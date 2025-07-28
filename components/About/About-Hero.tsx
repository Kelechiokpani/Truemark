"use client"
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const AboutHero = () => {
  return (
    <section className="lg:grid lg:h-screen lg:place-content-center  transition-colors duration-300">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto text-center">
          <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
            🔥About
            <strong className="text-[#387467] dark:text-[#387467]"> True-Mark </strong>
          </h1>

          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[28px] leading-[30px] md:text-[40px] md:leading-[55px] xl:text-[40px] xl:leading-[70px] mb-6 font-bold capitalize"
          >
              we deliver{" "}
            <span className="text-[#387467]">world-class certification solutions</span> for{" "}
            <br/>
            <span className="text-[#387467]">
                <ReactTyped
                  strings={[
                    "Global Standards",
                    "Trusted Compliance",
                    "Sustainable Growth"
                  ]}
                  typeSpeed={100}
                  backSpeed={100}
                  backDelay={3000}
                  loop
                />
         </span>
          </motion.h1>

          {/*<h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">*/}
          {/*  Who We Are*/}
          {/*  <strong className="text-[#387467] dark:text-[#387467]"> True - Mark </strong>*/}
          {/*</h1>*/}

          <p className="mt-4 text-base text-pretty text-gray-700 dark:text-gray-300 sm:text-lg/relaxed">
            True-Mark Service Limited is a globally accredited certification and training body
            dedicated to developing professionals and organizations through internationally
            recognized standards. We operate with accreditations to ISO/IEC 17024 (Personnel Certification),
            17021 (Management System Certification), and 17065 (Product Certification),
            ensuring our services meet the highest level of global credibility and compliance.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="animate_right inline-block rounded border border-[#387467] bg-[#387467] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#387467]"
              href="#"
            >
              Get Started
            </a>

            <a
              className="animate_right inline-block rounded border border-gray-300 dark:border-gray-600 px-5 py-3 font-medium text-gray-700 dark:text-gray-200 shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
