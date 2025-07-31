"use client"
import { notFound } from "next/navigation";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CheckCircle } from "lucide-react";


const dynamicCourseDetails: Record<
  string,
  {
    title: string;
    short: string;
    image: string;
    overview: string;
    benefits: string[];
    accordion: {
      title: string;
      content: string;
    }[];
    courses: {
      title: string;
      duration: string;
      audience: string;
    }[];
  }
> = {
  "iso-9001-qms": {
    title: "ISO 9001 Quality Management System",
    short: "Quality Management System",
    image: "/images/iso-9001.png",
    overview:
      "This course provides a comprehensive understanding of ISO 9001 standards and how to apply them effectively in a quality management system.",
    benefits: [
      "Understand the key principles of ISO 9001",
      "Learn how to implement QMS effectively",
      "Prepare for ISO 9001 certification audits"
    ],
    accordion: [
      {
        title: "Foundation",
        content:
          "Covers basic concepts, terminology, and the importance of ISO 9001."
      },
      {
        title: "Implementer",
        content:
          "Practical implementation guidance, internal auditing, and compliance methods."
      },
      {
        title: "Lead Auditor",
        content:
          "Advanced auditing techniques and certification preparation."
      }
    ],
    courses: [
      {
        title: "ISO 9001 Foundation",
        duration: "2 Days",
        audience: "Beginners and QMS team members"
      },
      {
        title: "ISO 9001 Implementer",
        duration: "3 Days",
        audience: "Mid-level implementers"
      },
      {
        title: "ISO 9001 Lead Auditor",
        duration: "5 Days",
        audience: "Quality Managers and Auditors"
      }
    ]
  },
  "iso-27001-isms": {
    title: "ISO 27001 Information Security Management",
    short: "Information Security Management",
    image: "/images/iso-27001.png",
    overview:
      "This course explores the principles and controls of ISO 27001 for securing organizational information.",
    benefits: [
      "Develop strong information security practices",
      "Understand risk assessment methods",
      "Build confidence in managing ISMS systems"
    ],
    accordion: [
      {
        title: "Foundation",
        content:
          "Basic overview of information security and ISO 27001 structure."
      },
      {
        title: "Implementer",
        content:
          "Focus on planning, implementing, and maintaining an ISMS."
      },
      {
        title: "Lead Auditor",
        content:
          "Preparation for internal and external ISMS audits."
      }
    ],
    courses: [
      {
        title: "ISO 27001 Foundation",
        duration: "2 Days",
        audience: "IT and Compliance staff"
      },
      {
        title: "ISO 27001 Implementer",
        duration: "3 Days",
        audience: "Information Security Officers"
      },
      {
        title: "ISO 27001 Lead Auditor",
        duration: "5 Days",
        audience: "ISMS Auditors and Security Managers"
      }
    ]
  }
};

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = dynamicCourseDetails[params.slug];

  if (!course) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2 text-primary">{course.title}</h1>
      <p className="text-gray-600 mb-6 italic">{course.short}</p>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">Overview</h2>
      <p className="text-gray-700 mb-6">{course.overview}</p>

      <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
      <ul className="list-none mb-6 space-y-2">
        {course.benefits.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Course Structure</h2>
      <Accordion variant="splitted" className="mb-8">
        {course.accordion.map((item, i) => (
          <AccordionItem key={i} title={item.title} aria-label={item.title}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>

      <h2 className="text-2xl font-semibold mb-4">Course Options</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {course.courses.map((c, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-1">{c.title}</h3>
            <p className="text-sm text-gray-500">Duration: {c.duration}</p>
            <p className="text-sm text-gray-500">Audience: {c.audience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
