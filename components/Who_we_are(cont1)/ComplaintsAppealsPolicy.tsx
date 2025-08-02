'use client';
import { motion } from 'framer-motion';

const ComplaintsAppealsPolicy = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white mt-[1rem]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">Complaints and Appeals Policy</h2>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Purpose</h3>
          <p>
            This policy defines the steps to take when complaints or appeals are received from candidates, certified individuals, or other stakeholders regarding certification decisions or general operations. It excludes matters of legal, financial, or regulatory nature, which are handled by the appropriate authorities.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Scope</h3>
          <p>
            <strong>Certification Complaints:</strong> Complaints about a certified person or the certification process including application, assessment, certification decisions, and recertification.
          </p>
          <p>
            <strong>Operations Complaints:</strong> Concerns related to Truemark’s services, policies, technologies, staff, or complaint handling process, excluding certification-related decisions.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">References</h3>
          <ul className="list-disc pl-6">
            <li>ISO/IEC 17024:2012, Clauses 9.8 and 9.9</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Terms and Definitions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Complainant:</strong> A person or representative making a complaint.</li>
            <li><strong>Complaint:</strong> Dissatisfaction with Truemark’s certified person or certification process, where a response is expected.</li>
            <li><strong>Certification Process:</strong> Activities used to determine a person's fulfillment of certification requirements.</li>
            <li><strong>Operations Complaint:</strong> Concerns about Truemark’s operations, staff, or services, not tied to certification decisions.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">General Rules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complainants must present facts truthfully and completely.</li>
            <li>False claims or baseless accusations will lead to termination of the complaint or appeal.</li>
            <li>Anonymous complaints will not be processed.</li>
            <li>Appeals must be submitted within the timeframe stated in policy.</li>
            <li>Complaints are shared with involved individuals unless authorization is denied.</li>
            <li>Persistent or unreasonable complaints may be declined with committee approval.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Certification Complaints Procedure</h3>
          <p>
            Certification complaints are reviewed by the MD or a designated independent staff member. If unsatisfied, an appeal can be submitted, prompting Truemark to appoint an independent Appeal Board composed of at least three impartial members. They assess all relevant documentation and provide a binding decision.
          </p>
          <p>
            Visit <a href="https://www.truemark.com" className="text-blue-600 underline">www.truemark.com</a> to submit a certification complaint or appeal.
          </p>
        </section>

        {/*<section className="space-y-4">*/}
        {/*  <h3 className="text-2xl font-semibold text-[#387467]">Appeal Process</h3>*/}
        {/*  <ul className="list-disc pl-6 space-y-2">*/}
        {/*    <li>Appeals must be submitted within 30 days of the certification complaint decision.</li>*/}
        {/*    <li>A fee of $100 applies, refundable if the appeal is successful.</li>*/}
        {/*    <li>The Appeal Board responds with a final written decision within 60 days.</li>*/}
        {/*  </ul>*/}
        {/*</section>*/}

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Operations Complaints Procedure</h3>
          <p>
            <strong>Level 1:</strong> Complaints are first handled by the Head of Customer Service with a response due within 5 working days.
          </p>
          <p>
            <strong>Level 2:</strong> If unresolved, the complaint is escalated to Top Management or an independent staff member for investigation and response within 30 working days.
          </p>
          <p>
            Complaints must be written and recorded in the ticketing system.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Appeal Board Criteria</h3>
          <p>
            Appeal Board members are impartial and independent. Conflicts of interest are addressed by replacing the member with a suitable alternative. Truemark may appoint its Impartiality Ethics and Appeals (IEA) Committee members to serve on the board when eligible.
          </p>
        </section>

        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          For further assistance, contact us through the contact form on the website.
        </p>
      </motion.div>
    </section>
  );
};

export default ComplaintsAppealsPolicy;
