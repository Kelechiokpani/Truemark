"use client";
import React, { useState, useMemo } from "react";
import { Search, MoreVertical } from "lucide-react";
import CourseItem from "@/components/dashboard/Course/CourseItem";

const tabs = ["All courses", "My Learning", "Certifications"];

const categories = [
  "All",
  "Quality, Health & Environment Mgt",
  "Info. Tech Mgt",
  "Cyber & Privacy",
  "Business Management",
  "MS Audit",
];

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState("All courses");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#387467] text-white px-6 py-8 rounded-lg">
        <h1 className="text-3xl font-bold">Overview</h1>
        <nav className="flex flex-wrap mt-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 border-b-2 transition ${
                activeTab === tab
                  ? "border-white font-semibold"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="px-6 py-8 max-w-7xl mx-auto">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-wrap gap-3 items-center">
            <select
              className="border px-3 py-2 rounded-lg"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>

            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
              className="text-purple-600 text-sm"
            >
              Reset
            </button>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search my courses"
              className="w-full border rounded-lg px-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-500"
              size={20}
            />
          </div>
        </div>

        {/* Courses Grid */}
      </main>
    </div>
  );
}


