import React, { useState } from "react";
import { Heart, MessageCircle, ThumbsDown, ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const PersonalProjects = () => {
  const [showDeleteBox, setShowDeleteBox] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteBox((prev) => !prev);
  };
  return (
    <div className="flex flex-col items-center dark:bg-zinc-900">
      <div className="md:w-[70%] w-[95%]">
        <div className="flex gap-5  items-center mt-5 dark:bg-zinc-800 pt-8 pb-8">
          <div className="flex justify-center items-center md:h-20 md:w-20 h-16 w-16   bg-purple-600 rounded-full text-4xl font-semibold text-white ml-5">
            P
          </div>
          <h1 className="md:text-4xl font-bold text-white text-2xl">
            Pranit More Marathi
          </h1>
        </div>
        <div className="mt-8 flex justify-start flex-col gap-4">
          {/* Box1 */}
          <div className="mx-auto max-w-5xl w-[100%] overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-800">
            <div className="flex flex-col md:flex-row relative">
              {/* Left Section */}
              <section className="w-full md:w-[55%] p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-7 w-7 sm:h-10 sm:w-10 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      alt="User"
                      className="h-full w-full rounded-full object-cover  ring-2 ring-white dark:ring-zinc-700"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="h-64 md:h-80 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-700">
                      <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                        alt="Project Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Right Section */}
              <section className="w-full md:w-[45%] border-t md:border-l md:border-t-0 border-zinc-200 dark:border-zinc-700 p-6">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                      Project Showcase
                    </h1>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      Posted by John Doe • 2 days ago
                    </p>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    A beautifully crafted project that demonstrates the perfect
                    balance between functionality and design. Built with modern
                    technologies and best practices, this showcase represents
                    weeks of dedicated development and thoughtful user
                    experience considerations.
                  </p>

                  <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                  {/* all like dislike... box is */}

                  <div className="flex items-center justify-between gap-2 w-full flex-nowrap overflow-hidden">
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700   transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <Heart className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Like</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <ThumbsDown className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Dislike</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <MessageCircle className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Comment</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <ExternalLink className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Visit</span>
                    </button>
                  </div>
                </div>
              </section>

              <FontAwesomeIcon
                icon={faEllipsisV}
                className="text-white absolute top-6 sm:right-5 right-2  cursor-pointer text-xl"
                onClick={handleDeleteClick}
              />
              {/*  delete box */}
              {showDeleteBox && (
                <div className="absolute top-12 sm:right-5 right-2 bg-white dark:bg-zinc-700 rounded-lg shadow-lg p-4 z-50">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    Are you sure you want to delete this project?
                  </p>
                  <div className="flex justify-end mt-3 gap-2">
                    <button
                      className="px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-200 rounded-lg hover:bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500"
                      onClick={() => setShowDeleteBox(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                      onClick={() => {
                        console.log("Project deleted!");
                        setShowDeleteBox(false);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Box 1 */}
          <div className="mx-auto max-w-5xl w-[100%] overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-800">
            <div className="flex flex-col md:flex-row">
              {/* Left Section */}
              <section className="w-full md:w-[55%] p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-7 w-7 sm:h-10 sm:w-10 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      alt="User"
                      className="h-full w-full rounded-full object-cover  ring-2 ring-white dark:ring-zinc-700"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="h-64 md:h-80 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-700">
                      <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                        alt="Project Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Right Section */}
              <section className="w-full md:w-[45%] border-t md:border-l md:border-t-0 border-zinc-200 dark:border-zinc-700 p-6">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                      Project Showcase
                    </h1>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      Posted by John Doe • 2 days ago
                    </p>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    A beautifully crafted project that demonstrates the perfect
                    balance between functionality and design. Built with modern
                    technologies and best practices, this showcase represents
                    weeks of dedicated development and thoughtful user
                    experience considerations.
                  </p>

                  <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                  {/* all like dislike... box is */}

                  <div className="flex items-center justify-between gap-2 w-full flex-nowrap overflow-hidden">
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700   transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <Heart className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Like</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <ThumbsDown className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Dislike</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <MessageCircle className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Comment</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <ExternalLink className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Visit</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* Box 1 */}
          <div className="mx-auto max-w-5xl w-[100%] overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-800">
            <div className="flex flex-col md:flex-row">
              {/* Left Section */}
              <section className="w-full md:w-[55%] p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-7 w-7 sm:h-10 sm:w-10 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                      alt="User"
                      className="h-full w-full rounded-full object-cover  ring-2 ring-white dark:ring-zinc-700"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="h-64 md:h-80 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-700">
                      <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                        alt="Project Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Right Section */}
              <section className="w-full md:w-[45%] border-t md:border-l md:border-t-0 border-zinc-200 dark:border-zinc-700 p-6">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                      Project Showcase
                    </h1>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      Posted by John Doe • 2 days ago
                    </p>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    A beautifully crafted project that demonstrates the perfect
                    balance between functionality and design. Built with modern
                    technologies and best practices, this showcase represents
                    weeks of dedicated development and thoughtful user
                    experience considerations.
                  </p>

                  <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                  {/* all like dislike... box is */}

                  <div className="flex items-center justify-between gap-2 w-full flex-nowrap overflow-hidden">
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700   transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <Heart className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Like</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <ThumbsDown className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Dislike</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <MessageCircle className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Comment</span>
                    </button>
                    <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                      <ExternalLink className="h-4 w-4" />{" "}
                      <span className="hidden sm:block">Visit</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
