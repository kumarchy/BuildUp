import React, { useContext, useEffect, useState } from "react";
import { Heart, MessageCircle, ThumbsDown, ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

const PersonalProjects = () => {
  const [deleteBoxVisibleFor, setDeleteBoxVisibleFor] = useState(null);

  const { userId } = useParams();

  const { showPersonalPost, showProjects, deleteProjects } =
    useContext(StoreContext);

  useEffect(() => {
    if (userId) {
      if (!showPersonalPost.length) {
        showProjects(userId);
      }
    }
  }, [userId, showProjects, showPersonalPost.length]);

  const handleVerticleElipse = (id) => {
    setDeleteBoxVisibleFor((prev) => (prev === id ? null : id));
  };

  const handleDeleteClick = (projectId) => {
    deleteProjects(projectId);
    setDeleteBoxVisibleFor(null);
  };

  return (
    <div className="flex flex-col items-center dark:bg-zinc-900">
      <div className="md:w-[70%] w-[95%]">
        {showPersonalPost.length > 0 && (
          <div className="flex gap-5 items-center mt-5 dark:bg-zinc-800 pt-8 pb-8">
            <div className="flex justify-center items-center md:h-20 md:w-20 h-16 w-16 bg-purple-600 rounded-full text-4xl font-semibold text-white ml-5">
              {showPersonalPost[0]?.user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <h1 className="md:text-4xl font-bold text-white text-2xl">
              {showPersonalPost[0]?.user?.name || "Unknown User"}
            </h1>
          </div>
        )}
        <div className="mt-8 flex justify-start flex-col gap-4">
          {/* Projects */}
          {showPersonalPost &&
            showPersonalPost.map((project) => (
              <div
                key={project.id}
                className="mx-auto max-w-5xl w-[100%] overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-800"
              >
                <div className="flex flex-col md:flex-row relative">
                  {/* Left Section */}
                  <section className="w-full md:w-[55%] p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-4">
                        <div className="h-64 md:h-80 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-700">
                          <img
                            src={project.image_url}
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
                          {project.title}
                        </h1>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                          Posted by John Doe • 2 days ago
                        </p>
                      </div>

                      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between gap-2 w-full flex-nowrap overflow-hidden">
                        <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                          <Heart className="h-4 w-4" />
                          <span className="hidden sm:block">Like</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                          <ThumbsDown className="h-4 w-4" />
                          <span className="hidden sm:block">Dislike</span>
                        </button>
                        <button className="flex items-center gap-1 rounded-lg px-1 md:px-2 py-1 text-xs md:text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700 shrink-0">
                          <MessageCircle className="h-4 w-4" />
                          <span className="hidden sm:block">Comment</span>
                        </button>
                      </div>
                    </div>
                  </section>

                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="text-white absolute top-6 sm:right-5 right-2 cursor-pointer text-xl"
                    onClick={() => handleVerticleElipse(project.id)} // Pass the ID
                  />
                  {/* Delete Confirmation */}
                  {deleteBoxVisibleFor === project.id && ( // Show only for the specific project
                    <div className="absolute top-12 sm:right-5 right-2 bg-white dark:bg-zinc-700 rounded-lg shadow-lg p-4 z-50">
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        Are you sure you want to delete this project?
                      </p>
                      <div className="flex justify-end mt-3 gap-2">
                        <button
                          className="px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-200 rounded-lg hover:bg-zinc-300 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-500"
                          onClick={() => setDeleteBoxVisibleFor(null)} // Close the delete box
                        >
                          Cancel
                        </button>
                        <button
                          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                          onClick={() => handleDeleteClick(project.id)} // Handle deletion
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
