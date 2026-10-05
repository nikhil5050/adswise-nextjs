"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format&fit=crop`;

const industries = [
  {
    title: "Real estate marketing",
    desc: "Meta and Google campaigns for developers and channel partners, measured in site visits. MahaRERA details on every ad.",
    ad: { top: "plotNflat", tag: "Possession Dec 2027", headline: "2/3 BHK in Wakad", body: "From ₹X L all-inclusive. 12 min to Hinjewadi.", cta: "Book a site visit", img: img("1545324418-cc1a3fa10c00"), alt: "Modern apartment building" },
  },
  {
    title: "Clinic marketing",
    desc: "Skin, aesthetic and dental clinics get booked consultations, not profile views.",
    ad: { top: "Cherish Derma Clinic", tag: "Dermatologist-led", headline: "Book a skin consultation", body: "Choose a time that suits you.", cta: "Confirm booking", img: img("1570172619644-dfd03ed5d881"), alt: "Facial treatment at a skin clinic" },
  },
  {
    title: "Premium and D2C brands",
    desc: "Jewellery, fragrance and fashion brands that need to look worth their price.",
    ad: { top: "Vylore Jewellers", tag: "New arrival", headline: "925 sterling silver ring", body: "Hallmarked. Free exchange in 15 days.", cta: "Shop now", img: img("1605100804763-247f67b3557e"), alt: "Silver ring on a dark surface" },
  },
  {
    title: "B2B lead generation",
    desc: "Manufacturers who need enquiries from the right buyers, not more traffic.",
    ad: { top: "Ceramicm Solutions", tag: "Bulk enquiries", headline: "Request a bulk quote", body: "Reply within 4 working hours.", cta: "Get my quote", img: img("1504917595217-d4dc5ebe6122"), alt: "Metal fabrication on a factory floor" },
  },
];

export default function IndustryViewer() {
  const [active, setActive] = useState(0);
  const item = industries[active];

  return (
    <div className="viewer">
      <div className="vtabs">
        {industries.map((ind, i) => (
          <button
            key={ind.title}
            className={`vtab ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            <strong>{ind.title}</strong>
            <span className="d">{ind.desc}</span>
          </button>
        ))}
        <Link href="/industry" className="tlink" style={{ marginTop: 14 }}>
          Explore all industries
        </Link>
      </div>

      <div className="phone-stage">
        {/* Liquid amoeba spotlight: orbiting blobs melted together by an SVG goo filter */}
        <svg className="phone-goo" viewBox="0 0 400 400" aria-hidden>
          <defs>
            <filter id="iv-goo" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
            <radialGradient id="iv-goo-fill" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#D7FF00" />
              <stop offset="65%" stopColor="#A8C900" />
              <stop offset="100%" stopColor="#5F7300" />
            </radialGradient>
          </defs>
          <g filter="url(#iv-goo)" fill="url(#iv-goo-fill)">
            <circle className="goo-core" cx="200" cy="200" r="96" />
            <g className="goo-orbit o1"><circle cx="200" cy="72" r="58" /></g>
            <g className="goo-orbit o2"><circle cx="334" cy="200" r="52" /></g>
            <g className="goo-orbit o3"><circle cx="200" cy="330" r="60" /></g>
            <g className="goo-orbit o4"><circle cx="64" cy="214" r="50" /></g>
            <g className="goo-orbit o5"><circle cx="304" cy="96" r="38" /></g>
            <g className="goo-orbit o6"><circle cx="92" cy="98" r="34" /></g>
          </g>
        </svg>
        <div className="phone-mock">
          <div className="scr" key={active}>
            <div className="ad-top">
              <i className="ad-avatar">{item.ad.top.split(" ")[1]?.[0] ?? item.ad.top[0]}</i>
              <div>
                {item.ad.top}
                <small>Sponsored</small>
              </div>
              <span className="ad-more" aria-hidden>•••</span>
            </div>
            <div className="ad-media">
              <Image src={item.ad.img} alt={item.ad.alt} fill sizes="260px" />
              <span className="ad-tag">{item.ad.tag}</span>
            </div>
            <div className="ad-txt">
              <b>{item.ad.headline}</b>
              <p>{item.ad.body}</p>
            </div>
            <div className="ad-cta">
              {item.ad.cta}
              <span aria-hidden>›</span>
            </div>
            <div className="ad-actions" aria-hidden>
              <span>♥</span>
              <span>💬</span>
              <span>➤</span>
            </div>
          </div>
        </div>
        <span className="phone-floor" aria-hidden />
      </div>
    </div>
  );
}
