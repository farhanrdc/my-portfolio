"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export function Taskind() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <a href="https://next14-taskind.vercel.app/" target="_blank">
      <PinContainer
        title="https://next14-taskind.vercel.app/"
        href="https://next14-taskind.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Website Task Management
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Fullstask website task management that look like Trello, named taskInd, with dark and light mode
            </span>
          </div>
          <Image src="/taskind.jpg" alt=""  height="350" className="mx-auto mt-4"
            width="300" />
        </div>
      </PinContainer>
      </a>
    </div>
  );
}
