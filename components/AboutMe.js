import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-gray-700 dark:text-gray-200 text-4xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">

            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a new opportunities as a web developer. 
                <br></br>Please check my {" "}
                <a
                  href={userData.socialLinks.linkedin}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  LinkedIn
                </a>{" "}
                .
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>

            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
              <p
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
             I am a curious person and I like learning. <br></br>I enjoy working in a team environment but I work well on my own too. <br></br>Before becoming a web developer, I had experience customer service in tourism industry and working under pressure. From those experiences, I am adaptable to change and new ways of working quickly and easily.
              </p>


            <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-700 dark:text-gray-200">
            Languages and Tools:
            </h1>
            <div className="flex flex-row flex-wrap mt-8">

              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-10 w-10 mx-4 my-4"
              />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  className="h-10 w-10 mx-4 my-4"
                />
                  <img
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                    className="h-10 w-10 mx-4 my-4"
                  />
                <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" className="h-10 w-10 mx-4 my-4"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  className="h-10 w-10 mx-4 my-4"
                />
              <img
                src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" width="40" height="40"
                className="h-10 w-10 mx-4 my-4"
              />
              <img 
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" 
              className="h-10 w-10 mx-4 my-4"/> 
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                className="h-10 w-10 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-10 w-10 mx-4 my-4"
              />
              <img 
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" className="h-10 w-10 mx-4 my-4"/>
              <img 
              src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" 
              alt="sqlite" 
              className="h-10 w-10 mx-4 my-4"/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
