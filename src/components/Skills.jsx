import React from "react";
import { JavasIcon } from "./Svj-Photos/JavasIcon";
import { TypescIcon } from "./Svj-Photos/TypescIcon";
import { ReactIcon } from "./Svj-Photos/ReactIcon";
import { NextIcon } from "./Svj-Photos/NextIcon";
import { NodeIcon } from "./Svj-Photos/NodeIcon";
import { ExpressIcon } from "./Svj-Photos/ExpressIcon";
import { NestIcon } from "./Svj-Photos/NestIcon";
import { MongoDBIcon } from "./Svj-Photos/MongoDBIcon";
import { SassIcon } from "./Svj-Photos/SassIcon";
import { TailwindcssIcon } from "./Svj-Photos/TailwindcssIcon";
import { FigmaIcon } from "./Svj-Photos/FigmaIcon";
import { CypressIcon } from "./Svj-Photos/CypressIcon";
import { SocketIcon } from "./Svj-Photos/SocketIcon";
import { NextDataPathnameNormalizer } from "next/dist/server/future/normalizers/request/next-data";
import { StorybookiCON } from "./Svj-Photos/storyIcon";
import { Gorditas } from "next/font/google";
import { GitIcon } from "./Svj-Photos/GitIcon";

export const Skills = () => {
  return (
    <div className="w-screen flex justify-center py-24 px-20">
      <div className="w-4/5 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <button className="bg-gray-200 w-24 rounded">skills</button>

          <h2 className="text-[20px] text-gray-600 leading-7">
            The skills, tools and technologies I am really good at:
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <div className=" flex gap-12">
            <div className="flex flex-col items-center">
              <JavasIcon />
              <p>Javascript</p>
            </div>

            <div className="flex flex-col items-center">
              <TypescIcon />
              <p>Typescript</p>
            </div>

            <div className="flex flex-col items-center">
              <ReactIcon />
              <p>React</p>
            </div>

            <div className="flex flex-col items-center">
              <NextIcon />
              <p>Next</p>
            </div>

            <div className="flex flex-col items-center">
              <NodeIcon />
              <p>Node.js</p>
            </div>

            <div className="flex flex-col items-center">
              <ExpressIcon />
            </div>

            <div className="flex flex-col items-center">
              <NestIcon />
              <p>Nest.js</p>
            </div>

            <div className="flex flex-col items-center">
              <SocketIcon />
              <p>Socket.io</p>
            </div>
          </div>

          <div className=" flex gap-12">
            <div className="flex flex-col items-center">
              <img src="./postgresql.png" />
              <p>PostgreSQL</p>
            </div>

            <div className="flex flex-col items-center">
              <MongoDBIcon />
              <p>MongoDB</p>
            </div>

            <div className="flex flex-col items-center">
              <SassIcon />
              <p>Sass/Scss</p>
            </div>

            <div className="flex flex-col items-center">
              <TailwindcssIcon />
              <p>Sass/Scss</p>
            </div>

            <div className="flex flex-col items-center">
              <FigmaIcon />
              <p>Figma</p>
            </div>

            <div className="flex flex-col items-center">
              <CypressIcon />
              <p>Cypress</p>
            </div>

            <div className="flex flex-col items-center">
              <StorybookiCON />
              <p>Storybook</p>
            </div>

            <div className="flex flex-col items-center">
              <GitIcon />
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
