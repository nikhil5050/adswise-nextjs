import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

// Lazy loaded pages to improve performance
const Home = lazy(() => import("./pages/Home"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FootwearCaseStudy = lazy(() => import("./pages/case-study/FootwearCaseStudy"));
const InteriordesignCaseStudy = lazy(() => import("./pages/case-study/InteriordesignCaseStudy"));
const RealEstate = lazy(() => import("./pages/case-study/RealEstate"));
const CarrierPage = lazy(() => import("./pages/CarrierPage"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceRouter = lazy(() => import("./pages/services/ServiceRouter"));
const Industry = lazy(() => import("./pages/Industry"));
const IndustryRouter = lazy(() => import("./pages/industry/IndustryRouter"));
const PrivacyPolicy = lazy(() => import("./homepages/PrivacyPolicy"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Fallback loader while pages are fetching
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <SEO
          title="AdsWise Marketing | Advertising, Branding & Digital Growth"
          description="We help brands grow through creative advertising, digital marketing, social media strategy and high-impact campaigns."
          url="https://www.adswisemarketing.com/"
          image="https://www.adswisemarketing.com/og-image.jpg"
          keywords="Digital Marketing Agency Pune, SEO Company Pune, SEO Services Pune, Google Ads Agency Pune, PPC Services Pune, Social Media Marketing Pune, Website Development Pune, Web Design Company Pune, Lead Generation Agency, Performance Marketing, Local SEO Pune, Branding Agency Pune, B2B Marketing Agency, Ecommerce Marketing, Adswise Marketing"
        />
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceRouter />} />
              <Route path="*" element={<Navigate to="/services" replace />} />

              <Route path="/industry" element={<Industry />} />

              {/* Dynamic Route for all industries */}
              {/* This captures /industries/real-estate, /industries/manufacturing, etc. */}
              <Route path="/industries/:slug" element={<IndustryRouter />} />

              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/career" element={<CarrierPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route
                path="/case-study-footwear-growth"
                element={<FootwearCaseStudy />}
              />
              <Route
                path="interior-design-marketing-case-study"
                element={<InteriordesignCaseStudy />}
              />
              <Route path="real-estate-case-study" element={<RealEstate />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
