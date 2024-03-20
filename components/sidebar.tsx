import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";


type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn(
      "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
      className,
    )}>
      
      <div className="mt-14 flex flex-col gap-y-2 flex-1">
        <SidebarItem 
          label="Home" 
          href="/"
          
        />
        <SidebarItem 
          label="About" 
          href="/about"

        />
        <SidebarItem 
          label="My work" 
          href="/my-work"

        />
        <SidebarItem 
          label="Contact" 
          href="/contact"

        />
      </div>
    </div>
  );
};