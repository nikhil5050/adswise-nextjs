import Image from "next/image";

type Logo = { name: string; src: string };

// Client logos live in /public/logos/. Add or remove entries here.
const LOGOS: Logo[] = [
  { name: "Pallavi Kharade Makeup & Hair", src: "/logos/client.jpg" },
  { name: "Space Them Up Interior Design Studio", src: "/logos/logo (3).png" },
  { name: "OSM CSC Centre", src: "/logos/logo8.jpg" },
  { name: "Shree Events & Thematics", src: "/logos/logoset.png" },
  { name: "Nivastu Interiors", src: "/logos/nivastu.jpeg" },
  { name: "Oraa Stay", src: "/logos/oraa logo.jpeg" },
  { name: "Profit Tetra", src: "/logos/PROFIT TETRA Final.jpg" },
  { name: "The Formales", src: "/logos/theformales.jpeg" },
  { name: "Phanore", src: "/logos/phanore.png" },
  { name: "Solar", src: "/logos/Kalpasi Solar.png" },
];

function LogoItem({ name, src }: Logo) {
  return (
    <li className="mx-3 flex h-20 w-40 shrink-0 items-center justify-center rounded-xl bg-white px-4 py-2 transition-transform duration-300 hover:scale-105">
      <Image
        src={encodeURI(src)}
        alt={name}
        width={160}
        height={80}
        className="h-full w-full object-contain"
      />
    </li>
  );
}

export default function LogoMarquee() {
  return (
    <div className="logo-marquee relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      {/* Two identical lists side by side; the track slides by one list width and loops seamlessly */}
      <div className="logo-marquee-track flex w-max">
        <ul className="flex">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.src} {...logo} />
          ))}
        </ul>
        <ul className="flex" aria-hidden="true">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.src} {...logo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
