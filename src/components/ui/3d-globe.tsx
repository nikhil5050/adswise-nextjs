"use client";
import React, { useRef, useMemo, useState, useCallback, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils/cn";

// ============================================================================
// Types
// ============================================================================

export interface GlobeMarker {
  lat: number;
  lng: number;
  /** Image shown in the marker bubble. Omit for a plain glowing dot. */
  src?: string;
  label?: string;
  size?: number;
  /** How the image fills the bubble: "cover" for photos, "contain" for logos */
  fit?: "cover" | "contain";
}

export interface Globe3DConfig {
  /** Globe radius */
  radius?: number;
  /** Globe base color (used as fallback or tint) */
  globeColor?: string;
  /** URL to the Earth texture map */
  textureUrl?: string;
  /** URL to the bump/elevation map for terrain */
  bumpMapUrl?: string;
  /** Whether to show atmosphere glow */
  showAtmosphere?: boolean;
  /** Atmosphere color */
  atmosphereColor?: string;
  /** Atmosphere intensity */
  atmosphereIntensity?: number;
  /** Atmosphere blur/softness (higher = more diffuse, default 3) */
  atmosphereBlur?: number;
  /** Terrain bump scale (0 = flat, higher = more pronounced) */
  bumpScale?: number;
  /** Auto rotate speed (0 = disabled) */
  autoRotateSpeed?: number;
  /** Enable drag-to-rotate */
  enableRotate?: boolean;
  /** Enable zoom */
  enableZoom?: boolean;
  /** Enable pan */
  enablePan?: boolean;
  /** Min zoom distance */
  minDistance?: number;
  /** Max zoom distance */
  maxDistance?: number;
  /** Initial rotation in radians (x tilts, y spins) */
  initialRotation?: { x: number; y: number };
  /** Marker default size */
  markerSize?: number;
  /** Show wireframe overlay */
  showWireframe?: boolean;
  /** Wireframe color */
  wireframeColor?: string;
  /** Ambient light intensity */
  ambientIntensity?: number;
  /** Point light intensity */
  pointLightIntensity?: number;
  /** Background color (null for transparent) */
  backgroundColor?: string | null;
  /** Marker pin/dot accent color */
  markerColor?: string;
}

interface Globe3DProps {
  /** Array of markers to display on the globe */
  markers?: GlobeMarker[];
  /** Globe configuration */
  config?: Globe3DConfig;
  /** Additional CSS classes */
  className?: string;
  /** Callback when a marker is clicked */
  onMarkerClick?: (marker: GlobeMarker) => void;
  /** Callback when a marker is hovered */
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

// ============================================================================
// Constants - Earth textures (NASA Blue Marble), served from /public
// ============================================================================

const DEFAULT_EARTH_TEXTURE = "/textures/earth.jpg";
const DEFAULT_BUMP_TEXTURE = "/textures/earth-bump.png";

const DEG = Math.PI / 180;

/** Group rotation that turns the given lat/lng to face the camera. */
export function rotationToFace(lat: number, lng: number) {
  return { x: lat * DEG, y: -(lng + 90) * DEG };
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Convert latitude/longitude to 3D cartesian coordinates
 */
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * DEG;
  const theta = (lng + 180) * DEG;

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// ============================================================================
// Marker Component (static - rotation handled by parent group)
// ============================================================================

interface MarkerProps {
  marker: GlobeMarker;
  /** Position in the list, used to stagger the entrance animation */
  index: number;
  radius: number;
  defaultSize: number;
  color: string;
  onClick?: (marker: GlobeMarker) => void;
  onHover?: (marker: GlobeMarker | null) => void;
}

const _worldPos = new THREE.Vector3();
const _camDir = new THREE.Vector3();

function Marker({ marker, index, radius, defaultSize, color, onClick, onHover }: MarkerProps) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const visibleRef = useRef(true);
  const imageGroupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  // Surface position (where the line starts)
  const surfacePosition = useMemo(
    () => latLngToVector3(marker.lat, marker.lng, radius * 1.001),
    [marker.lat, marker.lng, radius]
  );

  // Top of the line (where the image is)
  const topPosition = useMemo(
    () => latLngToVector3(marker.lat, marker.lng, radius * 1.18),
    [marker.lat, marker.lng, radius]
  );

  const lineHeight = topPosition.distanceTo(surfacePosition);

  // Hide markers on the far side. Only touch React state when it flips, not every frame.
  useFrame(() => {
    if (!imageGroupRef.current) return;
    imageGroupRef.current.getWorldPosition(_worldPos);
    const dot = _worldPos.normalize().dot(_camDir.copy(camera.position).normalize());
    const next = dot > 0.1;
    if (next !== visibleRef.current) {
      visibleRef.current = next;
      setIsVisible(next);
    }
  });

  const handlePointerEnter = useCallback(() => {
    setHovered(true);
    onHover?.(marker);
  }, [marker, onHover]);

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    onHover?.(null);
  }, [onHover]);

  const handleClick = useCallback(() => {
    onClick?.(marker);
  }, [marker, onClick]);

  // Calculate line center and orientation
  const { lineCenter, lineQuaternion } = useMemo(() => {
    const center = surfacePosition.clone().lerp(topPosition, 0.5);
    const direction = topPosition.clone().sub(surfacePosition).normalize();
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
    return { lineCenter: center, lineQuaternion: quaternion };
  }, [surfacePosition, topPosition]);

  // markerSize is in world units; ~220px per unit at the default camera distance
  const px = Math.round((marker.size ?? defaultSize) * 220);

  return (
    <group visible={isVisible}>
      {/* Pin line from surface to image */}
      <mesh position={lineCenter} quaternion={lineQuaternion}>
        <cylinderGeometry args={[0.003, 0.003, lineHeight, 8]} />
        <meshBasicMaterial
          color={hovered ? "#ffffff" : "#94a3b8"}
          transparent
          opacity={hovered ? 0.9 : 0.6}
        />
      </mesh>

      {/* Circular image (or dot) at the top */}
      <group ref={imageGroupRef} position={topPosition}>
        {/* Screen-space overlay (no CSS 3D transform): bubbles stay crisp and are never sliced */}
        <Html
          center
          zIndexRange={[20, 0]}
          style={{
            pointerEvents: isVisible ? "auto" : "none",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.4s ease-out",
          }}
        >
          {/* Outer wrapper carries the pop-in/float animation, inner bubble the hover scale */}
          <div className="globe-marker" style={{ "--i": index } as React.CSSProperties}>
            <div
              className={cn(
                "globe-marker-bubble cursor-pointer overflow-hidden rounded-full shadow-lg transition-transform duration-300",
                marker.src ? (marker.fit === "contain" ? "bg-[#050505]" : "bg-neutral-800") : "",
                hovered && "scale-125 shadow-xl"
              )}
              style={{
                width: `${px}px`,
                height: `${px}px`,
                ...(marker.src ? {} : { background: color, boxShadow: `0 0 6px 1px ${color}` }),
              }}
              title={marker.label}
              onMouseEnter={handlePointerEnter}
              onMouseLeave={handlePointerLeave}
              onClick={handleClick}
            >
              {marker.src && (
                <img
                  src={marker.src}
                  alt={marker.label || "Marker"}
                  className={cn("h-full w-full", marker.fit === "contain" ? "object-contain p-[12%]" : "object-cover")}
                  draggable={false}
                />
              )}
            </div>
            {marker.label && (
              <span className={cn("globe-marker-label", hovered && "is-on")}>{marker.label}</span>
            )}
          </div>
        </Html>
      </group>
    </group>
  );
}

// ============================================================================
// Rotating Globe with Markers (all rotate together)
// ============================================================================

interface RotatingGlobeProps {
  config: Required<Globe3DConfig>;
  markers: GlobeMarker[];
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function RotatingGlobe({ config, markers, onMarkerClick, onMarkerHover }: RotatingGlobeProps) {
  // Load Earth textures
  const [earthTexture, bumpTexture] = useTexture([config.textureUrl, config.bumpMapUrl]);

  // Configure textures
  useMemo(() => {
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    earthTexture.anisotropy = 16;
    bumpTexture.anisotropy = 8;
  }, [earthTexture, bumpTexture]);

  const geometry = useMemo(() => new THREE.SphereGeometry(config.radius, 64, 64), [config.radius]);

  const wireframeGeometry = useMemo(
    () => new THREE.SphereGeometry(config.radius * 1.002, 32, 16),
    [config.radius]
  );

  return (
    <group rotation={[config.initialRotation.x, config.initialRotation.y, 0]}>
      {/* Main globe mesh with Earth texture */}
      <mesh geometry={geometry}>
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={config.bumpScale * 0.05}
          roughness={0.7}
          metalness={0.0}
        />
      </mesh>

      {/* Wireframe overlay */}
      {config.showWireframe && (
        <mesh geometry={wireframeGeometry}>
          <meshBasicMaterial color={config.wireframeColor} wireframe transparent opacity={0.08} />
        </mesh>
      )}

      {markers.map((marker, index) => (
        <Marker
          key={`marker-${index}-${marker.lat}-${marker.lng}`}
          marker={marker}
          index={index}
          radius={config.radius}
          defaultSize={config.markerSize}
          color={config.markerColor}
          onClick={onMarkerClick}
          onHover={onMarkerHover}
        />
      ))}
    </group>
  );
}

// ============================================================================
// Atmosphere Component (stays static - doesn't rotate)
// ============================================================================

interface AtmosphereProps {
  radius: number;
  color: string;
  intensity: number;
  blur: number;
}

function Atmosphere({ radius, color, intensity, blur }: AtmosphereProps) {
  // Higher blur = more diffuse (lower fresnel exponent)
  const fresnelPower = Math.max(0.5, 5 - blur);

  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        atmosphereColor: { value: new THREE.Color(color) },
        intensity: { value: intensity },
        fresnelPower: { value: fresnelPower },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform float fresnelPower;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, normalize(-vPosition))), fresnelPower);
          gl_FragColor = vec4(atmosphereColor, fresnel * intensity);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
  }, [color, intensity, fresnelPower]);

  return (
    <mesh scale={[1.12, 1.12, 1.12]}>
      <sphereGeometry args={[radius, 64, 32]} />
      <primitive object={atmosphereMaterial} attach="material" />
    </mesh>
  );
}

// ============================================================================
// Scene Component
// ============================================================================

interface SceneProps {
  markers: GlobeMarker[];
  config: Required<Globe3DConfig>;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
  onReady: () => void;
}

function Scene({ markers, config, onMarkerClick, onMarkerHover, onReady }: SceneProps) {
  const { camera } = useThree();

  // Set initial camera position (pulled back to accommodate markers)
  useEffect(() => {
    camera.position.set(0, 0, config.radius * 3.5);
    camera.lookAt(0, 0, 0);
  }, [camera, config.radius]);

  // Runs once the textures above have resolved (Suspense has let this subtree render)
  useEffect(() => {
    onReady();
  }, [onReady]);

  return (
    <>
      <ambientLight intensity={config.ambientIntensity} />
      <directionalLight
        position={[config.radius * 5, config.radius * 2, config.radius * 5]}
        intensity={config.pointLightIntensity}
        color="#ffffff"
      />
      <directionalLight
        position={[-config.radius * 3, config.radius, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.3}
        color="#88ccff"
      />

      <RotatingGlobe
        config={config}
        markers={markers}
        onMarkerClick={onMarkerClick}
        onMarkerHover={onMarkerHover}
      />

      {config.showAtmosphere && (
        <Atmosphere
          radius={config.radius}
          color={config.atmosphereColor}
          intensity={config.atmosphereIntensity}
          blur={config.atmosphereBlur}
        />
      )}

      <OrbitControls
        makeDefault
        enableRotate={config.enableRotate}
        enablePan={config.enablePan}
        enableZoom={config.enableZoom}
        minDistance={config.minDistance}
        maxDistance={config.maxDistance}
        rotateSpeed={0.4}
        autoRotate={config.autoRotateSpeed > 0}
        autoRotateSpeed={config.autoRotateSpeed}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

// ============================================================================
// Main Globe3D Component
// ============================================================================

const defaultConfig: Required<Globe3DConfig> = {
  radius: 2,
  globeColor: "#1a1a2e",
  textureUrl: DEFAULT_EARTH_TEXTURE,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  showAtmosphere: false,
  atmosphereColor: "#4da6ff",
  atmosphereIntensity: 0.5,
  atmosphereBlur: 2,
  bumpScale: 1,
  autoRotateSpeed: 0.3,
  enableRotate: true,
  enableZoom: false,
  enablePan: false,
  minDistance: 5,
  maxDistance: 15,
  initialRotation: { x: 0, y: 0 },
  markerSize: 0.06,
  showWireframe: false,
  wireframeColor: "#4a9eff",
  ambientIntensity: 0.6,
  pointLightIntensity: 1.5,
  backgroundColor: null,
  markerColor: "#ef4444",
};

export function Globe3D({
  markers = [],
  config = {},
  className,
  onMarkerClick,
  onMarkerHover,
}: Globe3DProps) {
  const mergedConfig = useMemo(() => ({ ...defaultConfig, ...config }), [config]);
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <div className={cn("relative h-[500px] w-full", className)}>
      {/* Fade + un-blur once textures are loaded instead of popping in.
          No scale here: the canvas measures itself with getBoundingClientRect, so a
          scaled wrapper would leave it (and the marker overlay) sized too small. */}
      <div
        className={cn(
          "absolute inset-0 transition-[opacity,filter] duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)]",
          ready ? "opacity-100 blur-0" : "opacity-0 blur-md"
        )}
      >
        <Canvas
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
          camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, mergedConfig.radius * 3.5] }}
          style={{ background: mergedConfig.backgroundColor || "transparent" }}
        >
          <Suspense fallback={null}>
            <Scene
              markers={markers}
              config={mergedConfig}
              onMarkerClick={onMarkerClick}
              onMarkerHover={onMarkerHover}
              onReady={handleReady}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Globe3D;
