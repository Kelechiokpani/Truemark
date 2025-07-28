import BlogData from "@/components/Courses/blogData";
import BlogItem from "@/components/Courses/BlogItem";
import { Metadata } from "next";
import Course_Hero from "@/components/Courses/Course_Hero";
import coursesData from "@/components/Courses/courseData";
import React from "react";

export const metadata: Metadata = {
  title: "True-Mark Global Standards & Solutions Limited",
  description: "Explore True-Mark Global expert services in E-Learning, ISO Certification, Auditing, Outsourcing, and Inspection — delivering quality, compliance, and professional excellence."
};

const BlogPage = async () => {
  return (
    <>
      <Course_Hero/>
      {/* <!-- ===== Courses Grid Start ===== --> */}
      <section className=" mb-8">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 py-20">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {coursesData.slice(0, 6).map((course, key) => (
              <BlogItem course={course} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Courses Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
