"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Technology_Media() {
  return (
    <section className="mt-[12rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Technology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Technology</h2>
            <p className="text-lg mb-4">
              ICT enhances productivity, streamlines operations, and drives innovation. TRUE-MARK certification ensures digital solutions meet global standards for safety, performance, and sustainability.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Improving Connectivity:</strong> Bridges global communication and access to information.</li>
              <li><strong>Elevating Quality of Life:</strong> Enables access to education, healthcare, and commerce.</li>
              <li><strong>Supporting Sustainability:</strong> Aids in environmental protection and smart resource use.</li>
              <li><strong>Standards:</strong> Ensures quality, security, and interoperability in ICT solutions.</li>
              <li><strong>Security & Privacy:</strong> Validates data protection and cyber-resilience.</li>
              <li><strong>Ethical Practices:</strong> Promotes responsible conduct and continuous professional growth.</li>
              <li><strong>Consumer Confidence:</strong> Establishes trust in digital tools and platforms.</li>
              <li><strong>Global Trade:</strong> Harmonizes international ICT standards for market entry.</li>
              <li><strong>Digital Future:</strong> Drives safe, innovative tech adoption for lasting progress.</li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/media1.jpg" alt="Governance" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 2: Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/media2.jpg" alt="Governance" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Media</h2>
            <p className="text-lg mb-4">
              Media informs, educates, and connects people—fueling democracy and growth. TRUE-MARK helps ensure quality, ethics, and accountability in journalism and media production.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Public Influence:</strong> Shapes awareness and promotes dialogue on critical topics.</li>
              <li><strong>Community Engagement:</strong> Connects global audiences through shared platforms.</li>
              <li><strong>Democracy & Transparency:</strong> Supports informed public discourse and oversight.</li>
              <li><strong>Economic Impact:</strong> Stimulates jobs and innovation across industries.</li>
              <li><strong>Quality & Credibility:</strong> Ensures reliable and accurate content.</li>
              <li><strong>Ethical Practices:</strong> Encourages responsibility and fairness in reporting.</li>
              <li><strong>Professional Growth:</strong> Validates media professionals’ skills and knowledge.</li>
              <li><strong>Audience Trust:</strong> Builds confidence in certified media platforms.</li>
              <li><strong>Global Standards:</strong> Aligns international practices for consistent media excellence.</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 3: Certification in ICT & Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Certification in ICT & Media</h2>
            <p className="text-lg mb-4">
              Certification plays a vital role in ensuring high standards in both ICT and Media sectors, helping professionals and organizations meet global benchmarks and build trust with users and audiences.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Setting Standards:</strong> Maintains consistency and ensures quality across technologies and media.</li>
              <li><strong>Security & Privacy:</strong> Protects digital infrastructure and personal data.</li>
              <li><strong>Best Practices:</strong> Encourages ethics, competence, and ongoing development.</li>
              <li><strong>Consumer Confidence:</strong> Builds trust in certified digital tools and published content.</li>
              <li><strong>Global Compliance:</strong> Simplifies international market access and cooperation.</li>
              <li><strong>Trust & Accountability:</strong> Promotes transparency and professional integrity.</li>
              <li><strong>Resilient Future:</strong> Strengthens the foundation for secure, innovative growth.</li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/media1.jpg" alt="Governance" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
