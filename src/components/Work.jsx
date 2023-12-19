import React from "react";
import { ShareIcon } from "./Svj-Photos/ShareIcon";
import { Label } from "../components/Svj-Photos/Label";

export const Work = () => {
  return (
    <div className="w-screen flex justify-center py-24 px-20">
      <div className="flex flex-col gap-12 w-4/5 items-center">
        <div className="flex flex-col items-center gap-4">
          <button className="bg-gray-200 w-24 rounded">Work</button>

          <h2 className="text-[20px] text-gray-600 leading-7">
            Some of the noteworthy projects I have built:
          </h2>
        </div>

        <div className="flex shadow-xl ">
          <div className="p-12 bg-gray-100 flex-1 rounded-l-md">
            <img src="./Picture.png" />
          </div>

          <div className="p-12 flex flex-col gap-6 flex-1">
            <h1 className="text-xl text-black font-semibold">Fiskil</h1>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-3">
              <Label text="React" />
              <Label text="Next.js" />
              <Label text="Typescript" />
              <Label text="Nest.js" />
              <Label text="PostgreSQL" />
              <Label text="Tailwindcss" />
              <Label text="Figma" />
              <Label text="Cypress" />
              <Label text="Storybook" />
              <Label text="Git" />
            </div>
            <ShareIcon />
          </div>
        </div>

        <div className="flex shadow-xl">
          <div className="p-12 flex flex-col gap-6 flex-1">
            <h1 className="text-xl text-black font-semibold">Fiskil</h1>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-3">
              <Label text="React" />
              <Label text="Next.js" />
              <Label text="Typescript" />
              <Label text="Nest.js" />
              <Label text="PostgreSQL" />
              <Label text="Tailwindcss" />
              <Label text="Figma" />
              <Label text="Cypress" />
              <Label text="Storybook" />
              <Label text="Git" />
            </div>
            <ShareIcon />
          </div>

          <div className="p-12 bg-gray-100 flex-1 rounded-r-md">
            <img src="./Picture.png" />
          </div>
        </div>

        <div className="flex shadow-xl ">
          <div className="p-12 bg-gray-100 flex-1 rounded-l-md">
            <img src="./Picture.png" />
          </div>

          <div className="p-12 flex flex-col gap-6 flex-1">
            <h1 className="text-xl text-black font-semibold">Fiskil</h1>
            <p className="text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-3">
              <Label text="React" />
              <Label text="Next.js" />
              <Label text="Typescript" />
              <Label text="Nest.js" />
              <Label text="PostgreSQL" />
              <Label text="Tailwindcss" />
              <Label text="Figma" />
              <Label text="Cypress" />
              <Label text="Storybook" />
              <Label text="Git" />
            </div>
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
