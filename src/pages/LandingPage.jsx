import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
