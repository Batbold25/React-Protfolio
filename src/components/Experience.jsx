import React from "react";
import { Upwork } from "./Svj-Photos/Upwork";

export const Experience = () => {
  return (
    <div className="w-screen flex justify-center py-12 md:py-24 px-6 md:px-20 bg-gray-100">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <button className="bg-gray-200 w-24 rounded">Experience</button>
          <h2 className="text-lg md:text-xl">
            Here is a quick summary of my most recent experiences:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Experience Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="p-8">
              <div className="w-24 mx-auto mb-4">
                <Upwork />
              </div>
              <div className="text-xl font-semibold leading-6 mb-4">
                <h1>Sr. Frontend Developer</h1>
              </div>
              <div className="text-base font-normal leading-6 text-gray-600">
                <ul className="list-disc pl-4">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
              <div>
                <h2>Nov 2021 - Present</h2>
              </div>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="p-8">
              <div className="w-24 mx-auto mb-4">
                <Upwork />
              </div>
              <div className="text-xl font-semibold leading-6 mb-4">
                <h1>Sr. Frontend Developer</h1>
              </div>
              <div className="text-base font-normal leading-6 text-gray-600">
                <ul className="list-disc pl-4">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
              <div>
                <h2>Nov 2021 - Present</h2>
              </div>
            </div>
          </div>

          {/* Experience Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="p-8">
              <div className="w-24 mx-auto mb-4">
                <Upwork />
              </div>
              <div className="text-xl font-semibold leading-6 mb-4">
                <h1>Sr. Frontend Developer</h1>
              </div>
              <div className="text-base font-normal leading-6 text-gray-600">
                <ul className="list-disc pl-4">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
              <div>
                <h2>Nov 2021 - Present</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
