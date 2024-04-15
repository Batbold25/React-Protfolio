import React from "react";
import { useTheme } from "@/context/themeDark";

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className="w-screen h-fit flex justify-center mt-4"
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
      }}
    >
      <div className="w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 flex items-center">
        <div className="w-1/2">
          <img src="/NEG.png" height={30} />
        </div>
        <div className="w-1/2 flex gap-5 justify-end items-center">
          <div className="hidden lg:flex gap-6 text-base font-medium text-slate-500">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/nar.png"
              width={24}
              onClick={toggleDarkMode}
              className="cursor-pointer"
            />
            <p className="py-1 px-2 text-sm font-medium leading-6 bg-slate-950 text-white rounded-md">
              CV
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
