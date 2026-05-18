import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PartnerStrip from "@/components/partner-strip";
import VideoTestimonialSection from "@/components/video-testimonial-section";
import PortfolioSection from "@/components/portfolio-section";
import MeetMindsSection from "@/components/meet-minds-section";
import ScrollCardsSection from "@/components/scroll-cards-section";
import VergleichSection from "@/components/vergleich-section";
import NextStepsSection from "@/components/next-steps-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#090909] text-white font-body" style={{ overflowX: "clip" }}>
      <Navbar />
      <main>
        <section id="problem"><HeroSection /></section>
        <PartnerStrip />
        <PortfolioSection />
<section id="leistungen"><ScrollCardsSection /></section>
        <VideoTestimonialSection />
        <section id="methode"><VergleichSection /></section>
        <section id="vergleich"><MeetMindsSection /></section>
        <section id="ueber-uns"><NextStepsSection /></section>
        <section id="faq"><FaqSection /></section>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
