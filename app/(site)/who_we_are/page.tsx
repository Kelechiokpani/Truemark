import { Metadata } from "next";
import AboutHero from "@/components/About/About-Hero";
import AboutTM from "@/components/About/AboutTM";
import SectorsWeServe from "@/components/About/Services";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <AboutHero />
      <AboutTM />
      <SectorsWeServe/>
    </main>
  );
}
