"use client";
import Image from "next/image";
import { useState } from "react";
import ISO from "../../public/images/Home/iso.jpg"
import ISSO from "../../public/images/Home/mahila.webp"

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">

            <div className="md:w-1/2">
              <h1 className="mb-5 pr-16 text-6xl font-bold text-black dark:text-white">
                Learn from Top Experts
              </h1>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                🔥 True-Mark
                <span
                  className="ml-1 relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Services
                </span>
              </h1>
              <p>
                True-Mark Service Limited is a globally accredited
                certification body providing ISO/IEC 17024, 17021, and 17065
                certification and training services. Our mission is to enhance
                competence, compliance,
                and global recognition for professionals and organizations
                across Nigeria and beyond.
              </p>

              <p className="mt-4">
                Build Skills. Get Certified. Gain Recognition.
                Professional certification and standards-based
                training for individuals and organizations seeking excellence and compliance.
              </p>

              {/*<ul className="gap-8">*/}
              {/*  <li className='p-2'>   🎓 Over 1 Million Professionals Trained</li>*/}
              {/*  <li className='p-2'>  ✅ 170+ Accredited Programs</li>*/}
              {/*  <li className='p-2'>    🌍 Trusted by Global Institutions</li>*/}
              {/*</ul>*/}


            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-8.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-13.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-8.5 bottom-0 z-1"
                />
                <div className=" relative aspect-500/300 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden rounded-2xl"
                    // src="/images/hero/hero-light.svg"
                    src={ISSO}
                    alt="Hero"
                    width={550}
                    height={550}
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block rounded-2xl"
                    // src="/images/hero/hero-dark.svg"
                    src={ISSO}
                    alt="Hero"
                   width={550}
                   height={550}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
