import { Metadata } from "next";
import AboutOutsourcing from "@/components/Services/Outsourcing /About-Outsourcing";
import TM_Outsourcing from "@/components/Services/Outsourcing /Outsourcing";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

export default function Home() {
  return (
    <main>
      <AboutOutsourcing />
      <TM_Outsourcing />
    </main>
  );
}
