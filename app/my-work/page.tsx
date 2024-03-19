"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import { Masjid } from "./_components/masjid";
import { Admin } from "./_components/admin";
import { Taskind } from "./_components/taskind";
import { Yt } from "./_components/yt";
import { Avoice } from "./_components/avoice";
import { BackgroundGradientDemo } from "./_components/background-gradient";

const items = [
  {
    id: 1,
    komponen: <Masjid />
  },
  {
    id: 2,
    komponen: <Admin />
  },
  {
    id: 3,
    komponen: <Taskind />
  },
  {
    id: 4,
    komponen: <Yt />
  },
  {
    id: 5,
    komponen: <Avoice />
  },
];


const ProjectPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["-16.5%", "-95%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center" />
            {items.map((item) => (
              <div
                className="h-screen w-screen flex items-center justify-center"
                key={item.id}
              >
               {item.komponen}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex gap-16 items-center justify-center text-center">
        <BackgroundGradientDemo />
      </div>
    </motion.div>
  )
}

export default ProjectPage