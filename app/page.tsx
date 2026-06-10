import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PartnerStrip from "@/components/partner-strip";
import AusgewaehlteProjekteSection from "@/components/ausgewaehlte-projekte-section";
// import VideoTestimonialSection from "@/components/video-testimonial-section"; // archiviert
// import PortfolioSection from "@/components/portfolio-section"; // archiviert
import VorteileSection from "@/components/vorteile-section";
import MeetMindsSection from "@/components/meet-minds-section";
import ScrollCardsSection from "@/components/scroll-cards-section";
import VergleichSection from "@/components/vergleich-section";
import NextStepsSection from "@/components/next-steps-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import AngebotSection from "@/components/angebot-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#090909] text-white font-body" style={{ overflowX: "clip" }}>
      <Navbar />
      <main>
        <section id="start"><HeroSection /></section>
        <PartnerStrip />
        <VorteileSection />
        <section id="leistungen"><ScrollCardsSection /></section>
        <section id="projekte"><AusgewaehlteProjekteSection /></section>
        {/* Archiviert – Video-Testimonial-Section vorübergehend ausgeblendet */}
        {/* <section id="referenzen"><VideoTestimonialSection /></section> */}
        <VergleichSection />
        <section id="ueber-uns"><MeetMindsSection /></section>
        <NextStepsSection />
        <section id="faq"><FaqSection /></section>
        <CtaSection />
        <section id="angebote"><AngebotSection /></section>
      </main>
      <Footer />
    </div>
  );
}
