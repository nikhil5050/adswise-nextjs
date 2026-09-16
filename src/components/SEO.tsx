import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  canonical?: string;
  keywords?: string;
}

const siteName = "AdsWise Marketing";
const baseDomain = "https://www.adswisemarketing.com";
const defaultImage = `${baseDomain}/og-image.jpg`;

const SEO = ({
  title = "AdsWise Marketing | Creative Advertising & Digital Agency",
  description = "AdsWise Marketing is a full-service advertising and digital marketing agency offering branding, creative ads, social media and performance marketing.",
  
  url,
  image = defaultImage,
  canonical,
  keywords,
}: SEOProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // let finalCanonical = canonical || currentPath;
  // if (finalCanonical.startsWith("/")) {
  //   finalCanonical = `${baseDomain}${finalCanonical}`;
  // }

  // let finalUrl = url || currentPath;
  // if (finalUrl.startsWith("/")) {
  //   finalUrl = `${baseDomain}${finalUrl}`;
  // }

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : baseDomain;

  let finalCanonical = canonical || currentPath;
  if (finalCanonical.startsWith("/")) {
    finalCanonical = `${origin}${finalCanonical}`;
  }

  let finalUrl = url || currentPath;
  if (finalUrl.startsWith("/")) {
    finalUrl = `${origin}${finalUrl}`;
  }

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Meta Pixel */}
      <script>{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '845799078169611');
        fbq('track', 'PageView');
      `}</script>
      <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=845799078169611&ev=PageView&noscript=1" />`}</noscript>

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          url: baseDomain,
          logo: `${baseDomain}/logo.png`,
          description: description,
          sameAs: [
            "https://www.instagram.com/adswisemarketing",
            "https://www.facebook.com/adswisemarketing",
            "https://www.linkedin.com/company/adswisemarketing",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            telephone: "+91-9730266648",
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
