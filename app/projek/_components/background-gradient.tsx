"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/bgradient";

import { Button } from "@/components/ui/button";
import { MovingButton } from "./buttons";

export function BackgroundGradientDemo() {
  return (
    <div className="relative flex justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Fullstack Website Developer
        </p>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Front-end Website Developer
        </p>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Data Engineer
        </p>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Python Developer
        </p>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Typescript Developer
        </p>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Javascript Developer
        </p>

        <MovingButton />
      </BackgroundGradient>
    </div>
  );
}