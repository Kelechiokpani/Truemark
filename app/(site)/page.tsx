import { Metadata } from "next";
import Hero from "@/components/Home";
import Brands from "components/Home/Brands";
import Feature from "components/Home/Features";
import About from "@/components/About/AboutTM";
import FeaturesTab from "components/Home/FeaturesTab";
// import FunFact from "components/Home/FunFact";
// import Integration from "components/Home/Integration";
import CTA from "components/Home/CTA";
import FAQ from "components/Home/FAQ";
// import Testimonial from "components/Home/Testimonial";
import Contact from "components/Home/Contact";
import HeroSlider from "@/components/Home/Hero/HeroSlider";
// import Pricing from "@/components/Pricing";
// import Certifications from "components/Courses";


export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      {/*<FunFact />*/}
      {/*<Integration />*/}
      <CTA />
      <FAQ />
      <Contact />
      {/*<Testimonial />*/}

      {/*<Pricing />*/}
      {/*<Certifications />*/}
    </main>
  );
}
