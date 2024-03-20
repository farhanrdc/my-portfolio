"use client";

import Link from "next/link";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "./mode-toogle";


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/my-work", title: "My Work" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="hidden md:flex top-0 left-0 right-0  fixed z-10  h-20 w-full items-center justify-between px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 text-xl bg-[#FBFBFB] shadow-md shadow-black/5 dark:bg-indigo-950 dark:shadow-black/10 bg-opacity-70 dark:bg-opacity-70">
      {/* LINKS */}
      <div className="flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <ModeToggle />
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex md:flex-row-reverse gap-4 w-1/3">
        <Link href="https://github.com/farhanrdc" className="bg-white rounded-full ">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        
        <Link href="https://www.instagram.com/farhanrdc?utm_source=qr&igsh=MTVqdzlkaXFvOWxkcQ==">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        
        <Link href="https://www.linkedin.com/in/farhan-ramadhan-6318412b3">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      
      {/* RESPONSIVE MENU */}
      {open && (
        <motion.div
          className="md:hidden absolute top-20 left-0 right-0 bg-white flex flex-col items-center justify-center py-4"
          initial="closed"
          animate={open ? "opened" : "closed"}
          variants={{
            opened: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: -100 },
          }}
          transition={{ duration: 0.5 }}
        >
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </motion.div>
      )}
      
    </div>
  )
}

export default Navbar