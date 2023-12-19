import React from "react";

export const Header = () => {
  return (
    <header className="w-screen h-fit flex justify-center mt-4">
      <div className="w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 flex items-center">
        <div className="w-1/2">
          <img src="/NEG.png" height={30} />
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <div className="hidden md:flex gap-6 text-base font-medium text-slate-500">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div className="flex md:hidden gap-2 items-center">
            <img src="/nar.png" width={24} />
            <p className="py-1 px-2 text-sm font-medium leading-6 bg-slate-950 text-white rounded-md">
              CV
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
