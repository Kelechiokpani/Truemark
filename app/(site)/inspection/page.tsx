import { Metadata } from "next";
import AboutInspection from "@/components/Services/Inspection/About-Inspection";
import TM_Inspection from "@/components/Services/Inspection/Inspections";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <AboutInspection />
      <TM_Inspection />
    </main>
  );
}
