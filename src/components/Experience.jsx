import React from "react";
import { Upwork } from "./Svj-Photos/Upwork";

export const Experience = () => {
  return (
    <div className="w-screen flex justify-center py-24 px-20 bg-gray-100">
      <div className=" flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <button className="bg-gray-200 w-24 rounded">Experience</button>
          <h2>Here is a quick summary of my most recent experiences:</h2>
        </div>

        <div className="flex gap-12 justify-center bg-white rounded-xl p-8">
          <div className="w-[204px]">
            <Upwork />
          </div>

          <div>
            <div className="text-xl font-semibold leading-6 pb-4">
              <h1>Sr. Frontend Developer</h1>
            </div>
            <div className="text-base font-normal leading-6 text-gray-600 w-[334px]">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </div>
          </div>

          <div>
            <h2>Nov 2021 - Present</h2>
          </div>
        </div>

        <div className="flex gap-12 justify-center bg-white rounded-xl p-8">
          <div className="w-[204px]">
            <Upwork />
          </div>

          <div>
            <div className="text-xl font-semibold leading-6 pb-4">
              <h1>Team Lead</h1>
            </div>
            <div className="text-base font-normal leading-6 text-gray-600 w-[334px]">
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </div>
          </div>

          <div>
            <h2>Jul 2017 - Oct 2021</h2>
          </div>
        </div>

        <div className="flex gap-12 justify-center bg-white rounded-xl p-8">
          <div className="w-[204px]">
            <Upwork />
          </div>

          <div>
            <div className="text-xl font-semibold leading-6 pb-4">
              <h1>Full Stack Developer</h1>
            </div>
            <div className="text-base font-normal leading-6 text-gray-600 w-[334px]">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit..
              </li>
            </div>
          </div>

          <div>
            <h2>Dec 2015 - May 2017</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
