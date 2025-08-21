"use client";
import React, { useState } from "react";
import HlsVideoPlayer from "@/components/utility/VideoPlayer";
import { useCourseStore } from "@/store/useCourseStore";
import { useParams } from "next/navigation";
import bg from "../../../public/images/cert/cert10.png"
import Image from "next/image";


interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  width?: string | number;
  height?: string | number;
}

const TABS = [
  "Course content",
  "Overview",
  // "Q&A",
  // "Notes",
  // "Announcements",
  // "Reviews",
  // "Learning tools",
];

const lessons = [
  { title: "1. 0100aa - Welcome to the Course", duration: "3min" },
  { title: "2. 0100b - Downloading the Course Files", duration: "2min" },
  { title: "3. 0100c - Downloading the PDF Book", duration: "2min" },
  {
    title: "4. 0101 - Using the SELECTEDVALUE Function",
    duration: "7min",
    resources: true,
  },
  {
    title: "5. 0102 - Nesting the SELECTEDVALUE Function",
    duration: "7min",
    resources: true,
  },
];

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState("Course content");
  const { slug } = useParams<{ slug: string }>(); // get slug
  const { paidCourses } = useCourseStore();


  return (
    <div className="flex flex-col ml-[3rem]">
      {/* Video Section */}
      <div className=" flex items-center justify-center h-50 md:h-[500px] lg:h-[500px] relative rounded-lg">
        <div className="w-full aspect-video">
          {/*<div className="w-full max-w-6xl aspect-video">*/}
          <div>
            <HlsVideoPlayer
              poster=""
              src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
              autoPlay={true}
              controls={true}
              width="80%"
              height="90%"
              hlsConfig={{
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                lowLatencyMode: true
              }}
            />
          </div>

        </div>
        {/*<div>*/}
        {/*  <Image src={bg} alt="bg" fill className="bg-cover w-full" />*/}
        {/*</div>*/}
      </div>

      {/* Tabs */}
      <div className="border-b bg-white px-4 mt-[1rem]">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap text-sm text-gray-600 py-3">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`pb-2 border-b-2 text-1xl ${
                activeTab === tab
                  ? "border-black text-black font-bold"
                  : "border-transparent hover:text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        {/*{activeTab === "Course content" && (*/}
        {/*  <div className="max-w-4xl mx-auto bg-white shadow rounded-lg">*/}
        {/*    <div className="border-b p-4">*/}
        {/*      <h2 className="font-semibold text-lg">*/}
        {/*        Section 1: Dynamic Titles & User Labels*/}
        {/*      </h2>*/}
        {/*      <p className="text-sm text-gray-500">0 / 10 | 1hr 11min</p>*/}
        {/*    </div>*/}
        {/*    <ul className="divide-y">*/}
        {/*      {lessons.map((lesson, idx) => (*/}
        {/*        <li*/}
        {/*          key={idx}*/}
        {/*          className="flex justify-between items-center px-4 py-3 hover:bg-gray-100"*/}
        {/*        >*/}
        {/*          <div className="flex items-center gap-3">*/}
        {/*            <input type="checkbox" className="w-4 h-4" />*/}
        {/*            <div>*/}
        {/*              <p className="text-sm font-medium">{lesson.title}</p>*/}
        {/*              <p className="text-xs text-gray-500">{lesson.duration}</p>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          {lesson.resources && (*/}
        {/*            <div className="relative">*/}
        {/*              <button className="flex items-center text-purple-600 text-sm border border-purple-200 rounded px-2 py-1 hover:bg-purple-50">*/}
        {/*                <span className="mr-1">Resources</span>*/}
        {/*                <ChevronDownIcon className="w-4 h-4" />*/}
        {/*              </button>*/}
        {/*            </div>*/}
        {/*          )}*/}
        {/*        </li>*/}
        {/*      ))}*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*)}*/}

        {/* Placeholder content for other tabs */}
        {activeTab !== "Course content" && (
          <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6 text-center text-gray-600">
            <p>
              Content for <strong>{activeTab}</strong> will be displayed here.
            </p>

          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;



