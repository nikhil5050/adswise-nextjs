import { Mail, Phone, Globe } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd } from "@/lib/seo/schema";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How AdsWise Marketing collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

const USAGE = [
  "Respond to inquiries and service requests",
  "Provide digital marketing services (SEO, Ads, Branding)",
  "Generate leads and manage client communication",
  "Improve website and user experience",
  "Send marketing proposals (only if you opt-in)",
  "Analyze traffic and ad performance",
  "Comply with legal requirements",
];

const MISC = [
  { title: "8. Third-Party Links", body: "We are not responsible for the privacy practices of external sites linked on our website." },
  { title: "9. Marketing Communication", body: "You may opt out of marketing emails or offers at any time by following unsubscribe instructions." },
  { title: "10. Children's Privacy", body: "We do not knowingly collect information from individuals under the age of 18." },
  { title: "11. Your Rights", body: "You have the right to request access, correction, or deletion of your data, or withdraw consent." },
  { title: "12. Data Retention", body: "Data is retained only as long as necessary for business purposes or legal obligations." },
  { title: "13. Policy Changes", body: "We reserve the right to update this policy at any time. Updates will be posted on this page." },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={breadcrumbLd([{ name: "Privacy Policy", path: "/privacy-policy" }])}
      />
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-20 md:pt-52">
        <div className="mx-auto max-w-4xl">
          <RevealText as="h1" lines={["PRIVACY POLICY"]} className="font-display text-4xl text-ink md:text-6xl" />
          <p className="mt-4 text-sm text-muted">Last Updated: 18 December 2025</p>
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-12 text-sm leading-relaxed text-muted md:text-base">
          <p>
            <strong className="text-ink">AdsWise Marketing</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
            &ldquo;us&rdquo;) values your trust and is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit{" "}
            <a href="https://www.adswisemarketing.com" className="text-growth hover:underline">
              www.adswisemarketing.com
            </a>
            , use our services, or interact with us through digital platforms, advertisements, forms, emails,
            or communication channels. By accessing or using our website and services, you agree to the
            practices described in this Privacy Policy.
          </p>

          <div>
            <h2 className="font-display text-xl text-ink">1. Information We Collect</h2>
            <p className="mt-4">
              We may collect personal and non-personal information when you visit our website, fill out a
              form, request a service, or communicate with us.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-ink/10 p-6">
                <h3 className="text-growth">a) Personal Information</h3>
                <ul className="mt-3 space-y-2 text-ink/70">
                  <li>Full name &amp; company name</li>
                  <li>Email &amp; phone number</li>
                  <li>Business address &amp; website URL</li>
                  <li>Marketing budget or requirements</li>
                  <li>Data submitted via WhatsApp or email</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-ink/10 p-6">
                <h3 className="text-growth">b) Non-Personal Information</h3>
                <ul className="mt-3 space-y-2 text-ink/70">
                  <li>IP address &amp; browser version</li>
                  <li>Device type &amp; pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Approximate geographic location</li>
                  <li>Referring URLs</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">2. How We Use Your Information</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {USAGE.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-growth" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 inline-block rounded-lg border border-ink/10 px-4 py-2 text-ink">
              We do not sell, rent, or trade personal information to third parties.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl text-ink">3. Cookies &amp; Tracking</h2>
              <p className="mt-3">
                We use cookies to understand behavior, measure traffic, and improve content. You can disable
                cookies in your browser, though it may affect functionality.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-ink">4. Advertising &amp; Analytics</h2>
              <p className="mt-3">
                We use tools like Google Analytics, Google Ads, Meta Ads, and LinkedIn Ads. These platforms
                collect data per their own privacy policies.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-display text-lg text-ink">5. Data Sharing and Disclosure</h2>
              <p className="mt-2">
                Information is shared only with trusted service providers, when required by law, or with
                client consent. All third parties must maintain confidentiality.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg text-ink">6. Data Security</h2>
              <p className="mt-2">
                We take administrative and technical measures to prevent unauthorized access. Note that no
                internet transmission is 100% secure.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg text-ink">7. Client and Business Information</h2>
              <p className="mt-2">
                All confidential business data shared during strategy discussions is treated as strictly
                confidential. NDAs may be executed where required.
              </p>
            </div>
          </div>

          <div className="grid gap-8 border-t border-ink/10 pt-12 md:grid-cols-2">
            {MISC.map((item) => (
              <div key={item.title}>
                <h3 className="text-ink">{item.title}</h3>
                <p className="mt-2">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-ink/10 bg-surface p-10 text-center">
            <h2 className="font-display text-xl text-ink">14. Contact Information</h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-6 md:flex-row">
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-growth" /> office@adswisemarketing.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-growth" /> +91 97302 66648
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} className="text-growth" /> www.adswisemarketing.com
              </span>
            </div>
          </div>

          <p className="border-t border-ink/10 pt-8 text-center italic">
            By using our website and services, you acknowledge that you have read, understood, and agreed to
            this Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
}
