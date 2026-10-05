import { Mail, Phone, MapPin } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import ContactForm from "@/components/forms/ContactForm";
import { company } from "@/data/company";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { ORG_ID, breadcrumbLd, webPageLd } from "@/lib/seo/schema";

export const metadata = pageMetadata({
  title: "Contact AdsWise Marketing — Digital Marketing Agency in Pune",
  description:
    "Talk to AdsWise Marketing in Thergaon, Pune. Call +91 9730266648 or email office@adswisemarketing.com for a free digital marketing growth audit.",
  path: "/contact",
  absoluteTitle: true,
});

export default function ContactPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={[
          webPageLd({
            type: "ContactPage",
            name: "Contact AdsWise Marketing",
            description: "Phone, email and address for AdsWise Marketing, Pune.",
            path: "/contact",
            mainEntity: { "@id": ORG_ID },
          }),
          breadcrumbLd([{ name: "Contact", path: "/contact" }]),
        ]}
      />
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <RevealText
            as="h1"
            lines={["LET'S TALK"]}
            className="font-display text-5xl leading-tight text-ink md:text-8xl"
          />
          <p className="mt-8 max-w-xl text-lg text-muted">
            Tell us about your brand and where you want it to go — we&apos;ll get back to you within
            one business day.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-growth" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">Email</p>
                <a href={`mailto:${company.email}`} className="text-ink hover:text-growth">
                  {company.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-growth" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">Phone</p>
                <a href={company.phoneHref} className="text-ink hover:text-growth">
                  {company.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-growth" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">Office</p>
                <p className="text-ink">
                  {company.address.street}, {company.address.city}, {company.address.region}{" "}
                  {company.address.postalCode}
                </p>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="AdsWise Marketing location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30248.59689364553!2d73.75014732464078!3d18.615713550497816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b909d331ee29%3A0x14a8ae0caf64c564!2sThergaon%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1763208883662!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
