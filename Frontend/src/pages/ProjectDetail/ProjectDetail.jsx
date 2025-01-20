import React from "react";

const ProjectDetail = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="md:w-[70%] w-[95%]">
        <div className="flex items-center justify-center ">
        <div className="font-bold h-10 w-10 rounded-full bg-blue-500 flex justify-center items-center absolute text-2xl cursor-pointer lg:left-32 md:left-10 sm:top-7 left-3 ">
        k
        </div>
        <h1 className="sm:text-5xl text-2xl sm:font-bold font-bold mb-3 mt-5">
          Enjoy with coffee
        </h1>
        </div>
        <div>
          <img src="/frontend coffee webpage.png" alt="Coffee Webpage" />
        </div>
        <div className="flex gap-5 m">
        <p>likes</p>
        <p>comments</p>
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-semibold">Project Description</h1>
          <p>
            The Coffee Website is a fully responsive and visually engaging web
            application built using React.js. It is designed to showcase a
            coffee shop's offerings in an appealing and user-friendly manner.
            The project emphasizes modern web design principles, seamless
            navigation, and an interactive user experience.
          </p>
          <p>
            Features: Dynamic Content Rendering: Leveraging React.js, the
            website dynamically renders content for a smooth and fast user
            experience without the need for page reloads. Responsive Design: The
            website is fully responsive, ensuring optimal viewing across devices
            of all sizes, from desktops to tablets and smartphones. Interactive
            User Interface: A visually appealing interface with elements like
            hover effects, transitions, and interactive menus that engage users.
            Image Showcase: High-quality images of coffee products are displayed
            prominently, highlighting the shop’s offerings with smooth alignment
            and responsive scaling. Navigation Bar: A functional and responsive
            navigation bar enables users to explore different sections of the
            website effortlessly. Custom Styling with Tailwind CSS: The project
            uses Tailwind CSS for consistent, scalable, and modern styling,
            ensuring clean and reusable code.
          </p>
          <div className="mt-4">
            <h1 className="text-lg font-semibold">Tech stack</h1>
            <ul className="sm:gap-8 gap-5 list-disc ml-6">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="mt-4">
            <h1 className="text-lg font-semibold">Project References</h1>
            <ul className="list-disc ml-6">
              <li>React.js doc</li>
              <li>JavaScript doc</li>
              <li>Tailwind CSS doc</li>
              <li>HTML5 & CSS3 doc</li>
            </ul>
          </div>

          <div className="mt-4">
            <h1 className="text-lg font-semibold">Visit Website</h1>
            <a
              href="https://github.com/kumarchy/BuildUp/tree/main/Frontend/src"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              https://github.com/kumarchy/BuildUp/tree/main/Frontend/src
            </a>
          </div>

          <div className="mt-4 pb-16">
            <h1 className="text-lg font-semibold">Visit Github Repository</h1>
            <a
              href="https://github.com/kumarchy/BuildUp/tree/main/Frontend/src"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              https://github.com/kumarchy/BuildUp/tree/main/Frontend/src
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
