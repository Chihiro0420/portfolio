import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-20 md:my-20 lg:my-0">
          <h1 className="text-5xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
            Projects
          </h1>
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-2 gap-8 lg:mt-8 pb-40">
          {/* Single Card */}
          <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-2" >
            <div className="flex items-center border border-gray-300 dark:border-gray-800 rounded p-4 mb-5">
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">PetSitter / WEB APP</h4>
                <p className="pt-2 pb-2 leading-5 text-gray-700 dark:text-gray-300">An app to connect pet owners with other pet lovers/services that are willing to provide the certain pet services.</p>

                <div className="flex justify-start">
                  <a href="https://petsitter-2022.herokuapp.com/" target="_blank" rel="noreferrer" className="mr-2 py-1 px-2 text-white rounded-lg bg-gray-600 shadow-lg block md:inline-block">Demo</a>

                  <a href="https://github.com/Chihiro0420/PetSitter" target="_blank" rel="noreferrer" className="py-1 px-2 text-white rounded-lg bg-gray-600 shadow-lg block md:inline-block">Code
                  </a>
                </div>
                <div className="pt-2 flex md:flex-row space-x-2">
                  <p className="pt-2 pb-2 leading-5 text-gray-500 dark:text-gray-300">JavaScript, React, Redux, HTML, CSS, SASS, Auth0, SQL, REST APIs</p>
                </div>
                <a className="mb-4 hover:shadow" href="https://petsitter-2022.herokuapp.com/" aria-label="PetSitter" target="_blank" rel="noopener noreferrer">
                  <div className="pt-5 flex justify-center relative">
                    <img className="transform object-cover shadow-2xl" src="https://user-images.githubusercontent.com/88119709/157583527-ef14044c-32dc-42be-b540-644397c4db72.png" alt="" />
                    <div className="hover:bg-gray-300  transition duration-300 absolute bottom-0 top-4 right-0 left-0 hover:opacity-25"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Single Card */}
          <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-2" >
            <div className="flex items-center border border-gray-300 dark:border-gray-800 rounded p-4 mb-5">
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Yotsuba Acupuncture Clinic / WEB Design & Development</h4>
                <p className="pt-2 pb-2 leading-5 text-gray-700 dark:text-gray-300">Created a WordPress website for new Acupuncture Clinic in Kerikeri. Used WordPress & made responsive design.</p>
                <div className="flex justify-start">
                  <a href="https://yotsuba-acupunctureclinic.com/" target="_blank" rel="noreferrer" className="mr-2 py-1 px-2 text-white rounded-lg bg-gray-600 shadow-lg block md:inline-block">Live</a>
                </div>
                <div className="pt-2 flex md:flex-row space-x-2">
                  <p className="pt-2 pb-2 leading-5 text-gray-500 dark:text-gray-300">HTML, CSS, WordPress, Branding</p>
                </div>
                <a className="mb-4 hover:shadow" href="https://yotsuba-acupunctureclinic.com/" aria-label="PetSitter" target="_blank" rel="noopener noreferrer">
                  <div className="pt-5 flex justify-center relative">
                    <img className="transform object-cover shadow-2xl" src="/yotsuba.jpg" alt="Yotsuba Acupuncture Clinic" />
                    <div className="hover:bg-gray-300  transition duration-300 absolute bottom-0 top-4 right-0 left-0 hover:opacity-25"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Single Card */}
          <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-2" >
            <div className="flex items-center border border-gray-300 dark:border-gray-800 rounded p-4 mb-5">
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">THE COTTAGE / WEB Design & Development</h4>
                <p className="pt-2 pb-2 leading-5 text-gray-700 dark:text-gray-300">The website was the launching point for getting her one-woman business off the ground in Japan. I am currently working on eCommerce website usign Shopify for her business.</p>
                <div className="flex justify-start">
                  <a href="https://thecottage.co.jp/" target="_blank" rel="noreferrer" className="mr-2 py-1 px-2 text-white rounded-lg bg-gray-600 shadow-lg block md:inline-block">Live</a>
                </div>
                <div className="pt-2 flex md:flex-row space-x-2">
                  <p className="pt-2 pb-2 leading-5 text-gray-500 dark:text-gray-300">WordPress, HTML, CSS, Adobe XD</p>
                </div>
                <a className="mb-4 hover:shadow" href="https://thecottage.co.jp/" aria-label="PetSitter" target="_blank" rel="noopener noreferrer">
                  <div className="pt-5 flex justify-center relative">
                    <img className="transform object-cover shadow-2xl" src="/cottage.jpg" alt="the cottage" />
                    <div className="hover:bg-gray-300  transition duration-300 absolute bottom-0 top-4 right-0 left-0 hover:opacity-25"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Single Card */}
          <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-2" >
            <div className="flex items-center border border-gray-300 dark:border-gray-800 rounded p-4 mb-5">
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Jamie Style / WEB Design & Development</h4>
                <p className="pt-2 pb-2 leading-5 text-gray-700 dark:text-gray-300">Jamie Style is sustainable and ethical underwear brands in Japan. I created the eCommerce website for this businnes to have better user experience and good marketing strategy.</p>
                <div className="flex justify-start">
                  <a href="https://shop.jamiestyle-japan.com/" target="_blank" rel="noreferrer" className="mr-2 py-1 px-2 text-white rounded-lg bg-gray-600 shadow-lg block md:inline-block">Live</a>
                </div>
                <div className="pt-2 flex md:flex-row space-x-2">
                  <p className="pt-2 pb-2 leading-5 text-gray-500 dark:text-gray-300">Shopify, HTML, CSS, Branding</p>
                </div>
                <a className="mb-4 hover:shadow" href="https://shop.jamiestyle-japan.com/" aria-label="PetSitter" target="_blank" rel="noopener noreferrer">
                  <div className="pt-5 flex justify-center relative">
                    <img className="transform object-cover shadow-2xl" src="/jamie.jpg" alt="imax reform" />
                    <div className="hover:bg-gray-300  transition duration-300 absolute bottom-0 top-4 right-0 left-0 hover:opacity-25"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Single Card */}
          <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-2" >
            <div className="flex items-center border border-gray-300 dark:border-gray-800 rounded p-4 mb-5">
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">IMAX reform / WEB Design & Development</h4>
                <p className="pt-2 pb-2 leading-5 text-gray-700 dark:text-gray-300">Created a landing page for new service for IMAX reform group based in Japan. Used HTML & Vanila CSS and made responsive design.</p>
                <div className="flex justify-start">
                  <a href="https://imax.jp/reform/" target="_blank" rel="noreferrer" className="mr-2 py-1 px-2 text-white rounded-lg bg-gray-600 shadow-lg block md:inline-block">Live</a>
                </div>
                <div className="pt-2 flex md:flex-row space-x-2">
                  <p className="pt-2 pb-2 leading-5 text-gray-500 dark:text-gray-300">HTML, CSS, WordPress</p>
                </div>
                <a className="mb-4 hover:shadow" href="https://imax.jp/reform/" aria-label="PetSitter" target="_blank" rel="noopener noreferrer">
                  <div className="pt-5 flex justify-center relative">
                    <img className="transform object-cover shadow-2xl" src="/imax.jpg" alt="imax reform" />
                    <div className="hover:bg-gray-300  transition duration-300 absolute bottom-0 top-4 right-0 left-0 hover:opacity-25"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/*  */}

        </div>



      </div>
    </div>
  );
}
