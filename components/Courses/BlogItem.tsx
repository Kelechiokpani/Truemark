"use client";
import { Blog, Course } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const BlogItem = ({ course }: {course: Course }, ) => {
// const BlogItem = ({ blog, course }: { blog: Blog, course: Course }, ) => {
  // const { mainImage, title, metadata } = blog;


  const router = useRouter();

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/courses/`} className="relative block aspect-368/239">
          <Image src={course?.mainImage} alt={course.title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/courses/blog-details`}>
              {`${course.title.slice(0, 40)}...`}
            </Link>
          </h3>
          {/*<p className="line-clamp-3">{metadata}</p>*/}
        </div>




        {/* Course Info */}
        <div className="col-span-2 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {course.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {course.description}
          </p>

          <ul className="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-4">
            <li>✅ <strong>Type:</strong> {course.type === 'free' ? 'Free Course' : 'Certified / Paid'}</li>
            <li>✅ <strong>Certificate:</strong> Verifiable ISO Certificate</li>
          </ul>

          {/* Pricing & CTA */}
          <div className="flex items-center justify-between">
            {course.type === 'paid' ? (
              <div>
                <span className="text-lg font-semibold text-[#387467] dark:text-indigo-400">
                  &#8358; {course.price ?? 129}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">${course.oldPrice ?? 199}</span>
              </div>
            ) : (
              <span className="text-lg font-semibold text-green-600 dark:text-green-400">Free</span>
            )}

            <button
              onClick={() => router.push(`/courses/${course.slug ?? ''}`)}
              className="bg-[#387467] hover:bg-[#387467] text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              {course.type === 'free' ? 'Start Free' : 'Enroll Now'}
            </button>
          </div>
        </div>



      </motion.div>
    </>
  );
};

export default BlogItem;
