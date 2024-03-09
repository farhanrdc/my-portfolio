
import { TextGenerateEffectDemo, TextGenerateEffectTitle } from "@/components/home/text-generate";
import { ThreeDCardDemo } from "@/components/home/three-d-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    
      <div className="mt-14 h-full flex flex-col lg:flex-row px-4 md:px-12 lg:px-20 xl:px-48 sm:px-8  ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <ThreeDCardDemo />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-10 items-center justify-center">
          {/* TITLE */}
          <TextGenerateEffectTitle/>
          {/* DESC */}
          <TextGenerateEffectDemo />
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Button className="rounded-lg">
              <Link href="/project">
                View My Work
              </Link>
              
            </Button>

            <Button variant="outline" className="rounded-lg">
              <Link href="/contact">
                Contact me
              </Link>
            </Button>
            
          </div>
        </div>
      </div>
    
    
  )
}
