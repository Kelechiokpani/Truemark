'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import dynamicCourseDetails from '@/components/Certifications/Details/DetailsData';
import { Tab } from '@headlessui/react';

const CourseDetails = () => {
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug || typeof slug !== 'string') return <p>Loading...</p>;

  const course = dynamicCourseDetails[slug];

  if (!course) return <p>Course not found</p>;

  // State to track accordion open index per tab
  const [openAccordions, setOpenAccordions] = useState<Record<string, number | null>>({});
  const [activeAccordion, setActiveAccordion] = useState<{ [key: string]: number | null }>({});

  //
  // const toggleAccordion = (tab: string, index: number) => {
  //   setOpenAccordions((prev) => ({
  //     ...prev,
  //     [tab]: prev[tab] === index ? null : index,
  //   }));
  // };


  const toggleAccordion = (tab: string, index: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [tab]: prev[tab] === index ? null : index,
    }));

    setActiveAccordion((prev) => ({
      ...prev,
      [tab]: prev[tab] === index ? null : index,
    }));
  };


  // max-w-1xl

  return (
    <>
      <main>

        <div className="mt-[8rem] max-w-4xl  mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <img src={course.image} alt={course.title} className="w-full mb-4 rounded-md" />
          <h2 className="text-3xl font-bold mb-6 text-black">Overview</h2>
          <p className="mt-4 mb-10 leading-loose tracking-wide">
            {course.overview}
          </p>


          <h2 className="text-3xl font-bold mb-2 text-black">Benefits of Certification</h2>
          <ul className="list-disc pl-6 mb- gap-8">
            {course.benefits.map((benefit, index) => (
              <li className='mb-4' key={index}>{benefit}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Course Content:</h2>

          {/*/!* Tabs *!/*/}
          {/*<Tab.Group>*/}
          {/*  <Tab.List className="flex space-x-4 bg-gray-100 p-2 rounded mb-4">*/}
          {/*    {course.tabs.map((item, index) => (*/}
          {/*      <Tab*/}
          {/*        key={index}*/}
          {/*        className={({ selected }) =>*/}
          {/*          `px-12 py-2 rounded-md text-sm font-medium focus:outline-none ${*/}
          {/*            selected ? 'bg-[#b9291e] text-white' : 'bg-white text-gray-800 hover:bg-gray-200'*/}
          {/*          }`*/}
          {/*        }*/}
          {/*      >*/}
          {/*        {item.title}*/}
          {/*      </Tab>*/}
          {/*    ))}*/}
          {/*  </Tab.List>*/}

          {/*  <Tab.Panels>*/}
          {/*    {course.tabs.map((tab, tabIndex) => {*/}
          {/*      const accordionItems = course.accordion[tab.title] || [];*/}
          {/*      const activeIndex = openAccordions[tab.title] ?? null;*/}

          {/*      return (*/}
          {/*        <Tab.Panel key={tabIndex}>*/}
          {/*          {accordionItems.length === 0 ? (*/}
          {/*            <p className="text-gray-500">No content available.</p>*/}
          {/*          ) : (*/}
          {/*            accordionItems.map((item, idx) => (*/}
          {/*              <div key={idx} className=" mb-4 bg-white ">*/}
          {/*                <button*/}
          {/*                  onClick={() => toggleAccordion(tab.title, idx)}*/}
          {/*                  className={`w-full text-left p-4  ${*/}
          {/*                    activeAccordion[tab.title] === idx ? "bg-[#1c4473] text-white rounded-tl-2xl rounded-tr-2xl" : "rounded-2xl bg-gray-100 hover:bg-gray-200"*/}
          {/*                  }`}*/}
          {/*                >*/}
          {/*                  <span className="font-semibold text-lg">{item.title}</span>*/}
          {/*                </button>*/}

          {/*                {activeIndex === idx && (*/}
          {/*                  <div*/}
          {/*                    className="p-4 bg-white text-sm shadow rounded-br-2xl  rounded-bl-2xl ">*/}

          {/*                    <p className="mt-4 mb-10 leading-loose tracking-wide">*/}
          {/*                      {item.content}*/}
          {/*                    </p>*/}
          {/*                  </div>*/}
          {/*                  )}*/}
          {/*              </div>*/}
          {/*            ))*/}
          {/*          )}*/}
          {/*        </Tab.Panel>*/}
          {/*      );*/}
          {/*    })}*/}
          {/*  </Tab.Panels>*/}
          {/*</Tab.Group>*/}

          {/*<h2 className="text-2xl font-semibold mb-2">Courses:</h2>*/}
          {/*<ul className="space-y-4">*/}
          {/*  {course.courses.map((c, index) => (*/}
          {/*    <li key={index} className="border p-4 rounded">*/}
          {/*      <h3 className="font-bold text-lg">{c.title}</h3>*/}
          {/*      <p>*/}
          {/*        <strong>Duration:</strong> {c.duration}*/}
          {/*      </p>*/}
          {/*      <p>*/}
          {/*        <strong>Audience:</strong> {c.audience}*/}
          {/*      </p>*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}
        </div>
      </main>
    </>

  );
};

export default CourseDetails;
