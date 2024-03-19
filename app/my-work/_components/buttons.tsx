"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingButton() {
  return (
    <div>
      <a href="/contact">
        <Button
        
          borderRadius="1.75rem"
          className="border bg-white dark:bg-slate-900 text-black hover:bg-slate-800 hover:text-white dark:text-white border-neutral-200 dark:border-slate-800 dark:hover:bg-slate-300 dark:hover:text-black"
        >
          Hire me
        </Button>
      </a>
    </div>
  );
}
