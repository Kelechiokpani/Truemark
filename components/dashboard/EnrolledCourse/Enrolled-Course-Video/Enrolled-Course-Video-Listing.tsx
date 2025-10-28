"use client";
import React, { useMemo, useState } from "react";
import EmptyContainer from "@/components/utility/EmptyContainer";
import { useQuery } from "@apollo/client/react";
import { GET_USER_ENROLLED_COURSES_MODULES_LESSONS } from "@/lib/Query/queries";
import CenteredLoader from "@/components/utility/Loader";
import EnrolledCourseVideoItem from "@/components/dashboard/EnrolledCourse/Enrolled-Course-Video/Enrolled-Course-Video-Item";
// import CourseVideoItem from "@/components/dashboard/Course/CourseVideo/CourseVideoItem";
import SecurePDFViewer from "@/components/dashboard/Course/CourseVideo/SecurePDFViewer";


const empty_details = {
  title: "Your Lesson List is empty",
  description: "Looks like you haven’t paid for any Lesson yet.",
  callToAction: "Add New Courses",
  to:"/overview/course"
}

export default function EnrolledCourseVideoListing({id, module}) {

  const { data, loading, error} = useQuery(GET_USER_ENROLLED_COURSES_MODULES_LESSONS, {
    fetchPolicy: "cache-and-network",  variables:{moduleId:id},
    // fetchPolicy: 'network-only',
  }) as any;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = useMemo(() => {
    let List: any = data?.getEnrolledModuleLessions || [];

    if (searchTerm.trim() !== "") {
      List = List.filter((c: any) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return List;
  }, [searchTerm, data]);

  // ✅ Split into video and PDF groups based on file extension
  const videos = filteredCourses?.filter((item: any) =>
    item?.video?.toLowerCase().match(/\.(mp4|mov|mkv|avi|webm)$/)
  );

  const pdfs = filteredCourses?.filter((item: any) =>
    item?.video?.toLowerCase().endsWith(".pdf")
  );


  return (
    <div className="bg-white">
      <div className="px-6 py-8 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] w-full">
            <CenteredLoader />
          </div>
        ) : filteredCourses.length === 0 ? (
          <EmptyContainer
            title={empty_details.title}
            description={empty_details.description}
          />
        ) : (
          <div className="space-y-10">
            {/* 📄 PDF GRID */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Course Documents</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfs.map((post, key) => (
                  <SecurePDFViewer key={key} courseListing={post} module={module} />
                ))}
              </div>
              {pdfs.length === 0 && (
                <p className="text-gray-500 text-sm mt-2">
                  No PDF documents available.
                </p>
              )}
            </div>
            <hr/>
            {/* 🎬 VIDEO GRID */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Course Videos</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((post, key) => (
                  <EnrolledCourseVideoItem
                    key={key}
                    courseListing={post}
                    module={module}
                  />
                ))}
              </div>
              {videos.length === 0 && (
                <p className="text-gray-500 text-sm mt-2">
                  No videos found for this module.
                </p>
              )}
            </div>


          </div>
        )}
      </div>
    </div>
  );
}



