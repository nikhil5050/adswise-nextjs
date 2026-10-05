import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import ServicePackageTemplate from "@/components/templates/ServicePackageTemplate";
import { services } from "@/data/services";
import { getServicePackage, servicePackages } from "@/data/service-packages";
import { pageMetadata } from "@/lib/seo/metadata";

// Serves both the individual services and the growth packages from the header menu.
export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...servicePackages.map((pkg) => ({ slug: pkg.slug })),
  ];
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (service) {
    return pageMetadata({
      title: `${service.title} Services in Pune`,
      description: service.shortDescription,
      path: `/services/${service.slug}`,
    });
  }

  const pkg = getServicePackage(slug);
  if (!pkg) return {};
  const description = `${pkg.bestFor} Includes ${pkg.groups.map((g) => g.title).join(", ")}.`;
  return pageMetadata({ title: `${pkg.name} Package — Digital Marketing Services`, description, path: `/services/${pkg.slug}` });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (service) return <ServicePageTemplate service={service} />;

  const pkg = getServicePackage(slug);
  if (!pkg) notFound();
  return <ServicePackageTemplate pkg={pkg} />;
}
