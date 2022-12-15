import React, { useState } from "react";
import { AiOutlineNodeCollapse } from "react-icons/ai";

const Blog = ({ blog }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg h-fit">
        <div class="flex-shrink-0">
          <img
            class="object-cover w-full h-48"
            src={blog?.thumbnail?.url}
            alt={blog?.thumbnail?.public_id}
          />
        </div>
        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
          <div class="flex-1">
            <span class="block mt-2">
              <p
                class={`text-xl font-semibold text-neutral-600 ${
                  !collapse && "overflow-hidden text-ellipsis whitespace-nowrap"
                }`}
                title={blog?.title}
              >
                {blog?.title}
              </p>
              <p
                class={`mt-3 text-base text-gray-500 ${
                  collapse && "h-32 overflow-y-scroll"
                }`}
                title={blog?.description}
              >
                {!collapse
                  ? blog?.description?.slice(0, 100) + "..."
                  : blog?.description}
              </p>
            </span>
          </div>
          <div class="flex items-center mt-6">
            <div class="flex-shrink-0">
              <span class="sr-only">{blog?.name}</span>
              <span class="w-10 h-10 rounded-full shadow p-2">
                {blog?.name
                  ?.split(" ")
                  ?.map((name) => name[0])
                  ?.join("")}
              </span>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-neutral-600">
                <span class="hover:underline"> {blog?.name}</span>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time datetime={blog?.createdAt?.split("T")[0]}>
                  {" "}
                  {blog?.createdAt?.split("T")[0]}{" "}
                </time>
                <span aria-hidden="true"> · </span>
                <span className="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  {blog?.watch}
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-between items-center"
          onClick={() => setCollapse(!collapse)}
        >
          Read full
          <AiOutlineNodeCollapse />
        </button>
      </div>
    </>
  );
};

export default Blog;
