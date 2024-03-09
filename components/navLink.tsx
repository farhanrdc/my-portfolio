"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }:any) => {
  const pathName = usePathname()

  return (
    <Link 
      className={cn("flex items-center rounded-2xl px-2 py-1 text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition", pathName === link.url && "bg-black text-white dark:bg-white dark:text-black")} 
      href={link.url}
    >
      
      {link.title}
      
    </Link>
  )
}

export default NavLink