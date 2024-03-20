import { MobileSidebar } from "./mobile-sidebar";
import { ModeToggle } from "./mode-toogle";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] md:h-20 flex justify-between items-center bg-indigo-700 dark:bg-indigo-950 bg-opacity-75 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
      <ModeToggle />
    </nav>
  );
};