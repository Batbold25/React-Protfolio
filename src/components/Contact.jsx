import React from "react";
import { Cont } from "../components/Svj-Photos/Cont";
import { Msg } from "../components/Svj-Photos/Msg";
import { Copy } from "../components/Svj-Photos/Copy";
import { Callphone } from "./Svj-Photos/Callphone";

export const Contact = () => {
  return (
    <div className="w-screen flex justify-center py-12 md:py-24 px-6 md:px-20">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <button className="bg-gray-200 w-28 rounded">Get in touch</button>
          <h2 className="text-lg md:text-xl text-gray-600 leading-7 w-full md:w-[576px]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-5 pb-4">
            <Msg />
            <Cont text="reachsagarshah@gmail.com" />
            <Copy />
          </div>
          <div className="flex items-center justify-center gap-5">
            <Callphone />
            <Cont text="+91 8980500565" />
            <Copy />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p>You may also find me on these platforms!</p>
          <div className="flex flex-row gap-4">
            <img src="/git.png" alt="GitHub" />
            <img src="/x.png" alt="LinkedIn" />
            <img src="/fgm.png" alt="Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};
