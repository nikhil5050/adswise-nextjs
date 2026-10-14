import "./home.css";
import Link from "next/link";
import Calculator from "@/components/home/Calculator";
import IndustryViewer from "@/components/home/IndustryViewer";
import HighlightsCarousel from "@/components/home/HighlightsCarousel";
import ClientsSection from "@/components/home/ClientsSection";
import LaptopReport from "@/components/home/LaptopReport";
import ShotInHouse from "@/components/home/ShotInHouse";
import ScrollFillText from "@/components/home/ScrollFillText";
import HeroText from "@/components/hero/HeroText";
import HeroGlobe from "@/components/hero/HeroGlobe";
import TeamFanOut from "@/components/sections/TeamFanOut";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { webPageLd } from "@/lib/seo/schema";

const WA_LINK = "https://wa.me/919730266648";

export const metadata = pageMetadata({
  title: "AdsWise Marketing | Digital Marketing Agency in Pune",
  description:
    "AdsWise Marketing is a strategy-first digital marketing agency in Pune founded by Gaurav Jagtap. SEO, Google & Meta ads, social media, branding, websites and lead generation with measurable results.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <div className="home-v2">
      <JsonLd
        data={webPageLd({
          name: "AdsWise Marketing — Digital Marketing Agency in Pune",
          description:
            "Strategy-first digital marketing agency in Pune offering SEO, performance marketing, social media, branding and website development.",
          path: "/",
        })}
      />
      {/* Hero */}
      <section className="hero">
        <div className="wrap-wide hero-grid">
          <HeroText />
          <HeroGlobe />
        </div>
      </section>

      {/* Monthly report: laptop opens on scroll */}
      <LaptopReport />

      {/* Clients: scrolling logo wall */}
      <ClientsSection />

      {/* Highlights: cards slide sideways as you scroll */}
      <HighlightsCarousel />

      {/* Reels: shot in-house */}
      <ShotInHouse />

      {/* Statement: words fill with colour as you scroll */}
      <section className="center">
        <div className="wrap-wide">
          <ScrollFillText
            text="Most agencies send you reach, impressions and likes. We send you one number: what each customer cost. Then we spend every month making that number smaller."
            highlight={["one", "number", "customer", "cost", "smaller"]}
          />
        </div>
      </section>

      {/* Industries viewer */}
      <section className="surface">
        <div className="wrap-wide">
          <p className="label">Industries</p>
          <h2 className="h-l" style={{ marginTop: 8 }}>Built for four industries.</h2>
          <IndustryViewer />
        </div>
      </section>

      {/* Calculator */}
      {/* <section className="light">
        <div className="wrap-wide">
          <div className="center">
            <p className="label">Your numbers</p>
            <h2 className="h-l" style={{ marginTop: 8 }}>
              What your ad budget
              <br />
              really buys.
            </h2>
          </div>
          <Calculator />
          <p className="center muted" style={{ marginTop: 26, fontSize: 15 }}>
            Not sure of your numbers?{" "}
            <Link href="/contact" className="tlink" style={{ fontSize: 15 }}>
              We&apos;ll work them out in your audit.
            </Link>
          </p>
        </div>
      </section> */}

      {/* Team: side portraits slide out from behind Gaurav on scroll */}
      <TeamFanOut />

      {/* Method */}
      <section className="center" id="method">
        <div className="wrap-wide">
          <p className="label">The Adswise Method</p>
          <h2 className="h-l" style={{ marginTop: 8 }}>Four steps. No guesswork.</h2>
          <div className="outcomes" style={{ maxWidth: 900, margin: "40px auto 0", textAlign: "left" }}>
            <div><strong>1</strong><span>Understand the buyer — what your customer fears, compares and needs to hear before they pay.</span></div>
            <div><strong>2</strong><span>Position — one clear reason to choose you, said the same way everywhere.</span></div>
            <div><strong>3</strong><span>Convert — ads, website and WhatsApp follow-up that turn interest into bookings.</span></div>
            <div><strong>4</strong><span>Measure — cost per customer every month. If it isn&apos;t profitable, we change it.</span></div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="greyband center" id="offers">
        <div className="wrap-wide">
          <h2 className="h-l">Which one is right for you?</h2>
          <div className="compare">
            <div className="col">
              <span className="spacer" style={{ display: "block", height: 0 }} />
              <h3>Advertisement</h3>
              <p className="for">For new brands getting ready to sell.</p>
              <p className="price">From ₹5000</p>
              <Link href="/contact" className="btn">Plan a launch</Link>
              <dl>
                <dt>Includes</dt><dd>Naming, brand identity, Graphic Design, launch ads</dd>
                <dt>Timeline</dt><dd>6–10 weeks</dd>
                <dt>Reported on</dt><dd>Launch sales and enquiries</dd>
              </dl>
            </div>
            <div className="col">
              <span className="spacer" style={{ display: "block", height: 0 }} />
              <h3>Marketing</h3>
              <p className="for">For businesses already selling.</p>
              <p className="price">From ₹25k-70k a month</p>
              <Link href="/contact" className="btn">Talk about growth</Link>
              <dl>
                <dt>Includes</dt><dd>Meta and Google ads, reels, content, SEO , Website</dd>
                <dt>Timeline</dt><dd>Monthly, 3-month minimum</dd>
                <dt>Reported on</dt><dd>Cost per customer</dd>
              </dl>
            </div>
            <div className="col pick">
              <span className="start">Company Establishment</span>
              <h3>Company Formation</h3>
              <p className="for">For anyone unsure where to start.</p>
              <p className="price"> ₹4.75 one-time</p>
              <Link href="/contact" className="btn">Book a free growth audit</Link>
              <dl>
                <dt>Includes</dt><dd>Ads, Google profile, website and reply speed ,Seo , GMB</dd>
                <dt>Timeline</dt><dd>Reply within 24 hours</dd>
                <dt>You get</dt><dd>Your 3 biggest fixes, in writing</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      

      {/* Reviews + FAQ */}
      <section className="light center">
        <div className="wrap-wide">
          <h2 className="h-l">What clients say.</h2>
          <div className="reviews">
            <article className="review">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>A real Google review, 2–3 lines.</p>
              <footer>Name, Business, Pune</footer>
            </article>
            <article className="review">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p>A second review, ideally from another industry.</p>
              <footer>Name, Business, City</footer>
            </article>
          </div>

          <h2 className="h-m" style={{ marginTop: "clamp(60px,8vw,100px)" }}>
            Questions business owners ask.
          </h2>
          <div className="faq">
            <details>
              <summary>How much does digital marketing cost in Pune?</summary>
              <p>
                It depends on your monthly ad budget and the agency fee. Our
                retainers start from ₹X a month plus ad spend, agreed after a
                free growth audit.
              </p>
            </details>
            <details>
              <summary>Which industries does Adswise work with?</summary>
              <p>
                Real estate developers and channel partners, skin and aesthetic
                clinics, premium and D2C brands, and B2B manufacturers.
              </p>
            </details>
            <details>
              <summary>Do you only work with businesses in Pune?</summary>
              <p>
                No. We&apos;re based in Thergaon, Pune, and work with businesses
                in Pune, Pimpri-Chinchwad, Mumbai, Nashik and across India.
              </p>
            </details>
            <details>
              <summary>How do you measure results?</summary>
              <p>
                By cost per customer, not reach or likes. Every monthly report
                shows what the budget brought in.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="center">
        <div className="wrap">
          <h2 className="h-l silver">
            Find out what one customer
            <br />
            is costing you.
          </h2>
          <div className="actions">
            <Link href="/contact" className="btn">Book a free growth audit</Link>
            <a className="tlink" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
