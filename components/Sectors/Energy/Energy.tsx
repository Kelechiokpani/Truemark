"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EnergyAndMining() {
  return (
    <section className="mt-[12rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Mining */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Mining</h2>
            <p className="text-lg mb-4">
              Certification in the mining sector plays a crucial role in ensuring that mining operations meet established standards for safety, environmental management, ethical practices, and sustainability.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Ensuring Compliance with Standards:</strong> Includes ISO 14001 for environmental management systems.</li>
              <li><strong>Promoting Sustainable Practices:</strong> Via initiatives like RMI and ICMM.</li>
              <li><strong>Enhancing Safety and Health:</strong> Certifications like OHSAS 18001 and ISO 45001 help protect workers.</li>
              <li><strong>Building Trust and Credibility:</strong> Certification logos enhance stakeholder confidence.</li>
              <li><strong>Facilitating Market Access:</strong> Required for schemes like KPCS for conflict-free diamonds.</li>
              <li><strong>Legal and Regulatory Compliance:</strong> Reduces risk of penalties and ensures operational legality.</li>
              <li><strong>Improving Operational Efficiency:</strong> Standards like ISO 9001 promote continuous improvement.</li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/mining1.jpg" alt="Mining" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 2: Greenhouse Energy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/mining2.jpg" alt="Mining" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Greenhouse Energy</h2>
            <p className="text-lg mb-4">
              Effective energy management in greenhouses is essential for productivity and environmental sustainability. Certification ensures efficiency, compliance, and continuous improvement.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Sustainability:</strong> Reduces waste and conserves resources.</li>
              <li><strong>Energy Efficiency:</strong> Optimizes energy use for cost and carbon savings.</li>
              <li><strong>Quality Assurance:</strong> Guarantees high-performance systems.</li>
              <li><strong>Regulatory Compliance:</strong> Avoids legal penalties.</li>
              <li><strong>Market Trust and Access:</strong> Builds consumer and investor confidence.</li>
              <li><strong>Continuous Improvement:</strong> Encourages innovation and modernization.</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 3: Oil and Gas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Oil and Gas</h2>
            <p className="text-lg mb-4">
              Certification ensures that oil and gas operations meet global safety, environmental, and operational standards. It builds credibility and ensures access to regulated markets.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>Reduces risk of accidents and ensures environmental compliance.</li>
              <li>Facilitates smooth, uninterrupted operations through legal compliance.</li>
              <li>Provides insights to optimize processes and reduce costs.</li>
              <li>Supports access to global markets and stakeholder assurance.</li>
              <li>Drives continuous improvement with evolving standards.</li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/mining3.jpg" alt="Mining" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 4: Power */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/mining4.jpg" alt="Mining" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Power</h2>
            <p className="text-lg mb-4">
              Certification ensures safe, efficient, and sustainable power generation and distribution across various energy sources. It enhances operational excellence and global competitiveness.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Risk Management:</strong> Minimizes safety and environmental hazards.</li>
              <li><strong>Market Access:</strong> Required for entry into regulated and global markets.</li>
              <li><strong>Stakeholder Confidence:</strong> Validates quality, safety, and sustainability.</li>
              <li><strong>Continuous Improvement:</strong> Standards evolve with industry advancements.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
