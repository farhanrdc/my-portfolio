"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-image";

export function ThreeDCardDemo() {
  return (
    <CardContainer >
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto md:w-[30rem] h-auto rounded-xl p-6">
        
        <CardItem translateZ="100" className="w-full ">
          <Image
            src="/farhan5.png"
            height="1000"
            width="1000"
            className="h-[30rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          {/* <div className="hidden md:flex absolute w-full px-6 right-[20%] "> */}
                <div className="hidden md:flex absolute w-full px-6 gap-x-6 justify-center top-[20%]">
                  <h3 className="bg-white font-bold px-5 py-2 rounded-lg text-black">Hover me</h3>
                </div>
            {/* </div> */}
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
