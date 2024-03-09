import React from "react";
import { Meteors } from "@/components/ui/meteors";


export function Kontak() {
  return (
    <div className="mx-auto">
      <div className=" w-full relative max-w-2xl">
        <div className="inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold mx-auto text-lg md:text-3xl text-white mb-4 relative z-20">
          farhanramadhands@gmail.com
          </h1>

          <h1 className="font-bold mx-auto text-lg md:text-3xl text-white mb-4 relative z-20">
          087885177321
          </h1>

          <h1 className="font-bold mx-auto text-lg md:text-3xl text-white mb-4 relative z-20">
          IG = @farhanrdc
          </h1>

          <h1 className="ml-11 font-bold mx-auto text-lg md:text-3xl text-white mb-4 relative z-20">
          https://www.linkedin.com/in/farhan-ramadhan-6318412b3
          </h1>
          

          

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}