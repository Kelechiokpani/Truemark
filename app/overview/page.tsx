"use client";
import { useState } from "react";
import { Search, MoreVertical } from "lucide-react";
import Image from "next/image"
import cert2 from "../../public/images/cert/cert2.png"

const tabs = ["All courses", "My Lists", "Certifications",];

const filters = {
  sortBy: ["Recently Accessed", "Newest", "Oldest"],
  // categories: ["Development", "Design", "Business", "Data Science"],
  // progress: ["In Progress", "Completed", "Not Started"],
  // instructor: ["Grant Gamble", "Deepak Dubey", "Ahmed Elsakka", "Anton Voroniuk"],
};

const courses = [
  {
    title: "Power BI DAX Intermediate: Ranking, Logic, Time Intelligence",
    author: "Grant Gamble",
    image: cert2,
    status: "START COURSE",
  },
  {
    title: "AWS Certified Data Engineer - Associate - Hands-On + Exams",
    author: "Deepak Dubey",
    image: cert2,
    status: "START COURSE",
  },
  {
    title: "Master React, Redux and Next.js: The Practical Course",
    author: "Ahmed Elsakka",
    image: cert2,
    status: "1% complete",
  },
  {
    title: "Complete Figma Course: Web & Mobile Projects from Scratch",
    author: "Anton Voroniuk",
    image: cert2,
    status: "12% complete",
  },
];

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState("All courses");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#387467] text-white px-6 py-4 rounded-lg ">
        <h1 className="text-3xl font-bold">My learning</h1>
        <nav className="flex flex-wrap mt-3 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 border-b-2 ${
                activeTab === tab ? "border-white font-semibold" : "border-transparent"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="px-6 py-8 max-w-7xl mx-auto">
        {/* Weekly Streak */}
        <div className="border rounded-xl p-6 mb-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Start a Learning course now</h2>
            <p className="text-gray-600">Let’s chip away at your learning goals.</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0 space-x-6">
            <div className="text-center">
              <p className="text-2xl font-bold"> weeks</p>
              <p className="text-gray-500 text-sm">Current streak</p>
            </div>

          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-wrap gap-3">
            <select className="border px-3 py-2 rounded-lg">
              {filters.sortBy.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>

            <button className="text-purple-600 text-sm">Reset</button>
          </div>

          <div className="relative w-full md:w-84">
            <input
              type="text"
              placeholder="Search my courses"
              className="w-full border rounded-lg px-4 py-2"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <Image src={course.image} alt={course.title} className="w-full h-40 object-cover" width={200} height={200} />
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                  <MoreVertical size={18} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.author}</p>
                <p className="mt-2 text-xs text-purple-600 font-medium">{course.status}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
