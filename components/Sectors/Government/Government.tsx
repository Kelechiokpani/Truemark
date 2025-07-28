"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Government_Policy() {
  return (
    <section className="mt-[12rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Governance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Governance</h2>
            <p className="text-lg mb-4">
              The government and public sectors encompass services provided by federal, state, and local governments—like healthcare, education, defense, and public safety. At TRUE-MARK, we specialize in certifying public sector operations to meet the highest standards of quality, safety, and sustainability.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Risk Management:</strong> Mitigates hazards, improves security, and ensures regulatory compliance.</li>
              <li><strong>Building Public Trust:</strong> Certification assures citizens of safety and quality in public services.</li>
              <li><strong>Funding and Investment:</strong> Demonstrates commitment to high standards, aiding in fund acquisition.</li>
              <li><strong>Promoting Best Practices:</strong> Encourages innovation and continuous improvement.</li>
              <li><strong>Sustainable Development:</strong> Supports green initiatives and regulatory environmental adherence.</li>
              <li><strong>Legal Compliance:</strong> Prevents operational disruptions through regulatory alignment.</li>
              <li><strong>Efficiency:</strong> Enhances resource use and service delivery.</li>
              <li><strong>Public Safety:</strong> Ensures that infrastructure and services meet safety standards.</li>
              <li><strong>Accountability:</strong> Promotes transparency and ethical conduct.</li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/gov1.jpg" alt="Governance" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 2: Sustainable Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/gov2.jpg" alt="Governance" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Sustainable Development</h2>
            <p className="text-lg mb-4">
              Sustainable development balances current needs with future sustainability. TRUE-MARK supports organizations in reducing environmental impact, improving quality of life, and fostering innovation through responsible certifications.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Standard Setting:</strong> Establishes consistent sustainable guidelines across industries.</li>
              <li><strong>Verification & Accountability:</strong> Provides independent assurance of compliance.</li>
              <li><strong>Best Practices:</strong> Rewards sustainable leadership and fosters innovation.</li>
              <li><strong>Consumer Confidence:</strong> Assures buyers of sustainability in products/services.</li>
              <li><strong>Continuous Improvement:</strong> Drives long-term environmental and social progress.</li>
              <li><strong>Enhancing Quality of Life:</strong> Supports clean water, energy, food access, and equity.</li>
              <li><strong>Innovation:</strong> Encourages technological and inclusive growth.</li>
              <li><strong>Community Building:</strong> Builds strong, resilient, and healthy societies.</li>
              <li><strong>Future Security:</strong> Ensures that economic development supports global wellbeing.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
