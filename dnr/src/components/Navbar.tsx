"use client";
import { MetastreetLogo } from "./MetastreetLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="z-10 w-full items-center justify-between font-mono text-sm lg:flex mb-16 max-w-5xl mx-auto bg-white/10 backdrop-blur-sm border border-gray-200/25 p-3 rounded-xl">
      <div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
        >
          <MetastreetLogo />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center z-10 max-w-5xl w-full h-full text-center lg:flex-row lg:justify-between lg:text-left ml-8">
        <div className="flex items-center justify-center gap-4 lg:flex-row lg:gap-8">
          <Link
            className={`flex items-center justify-center gap-2 px-8 text-sm font-bold 
            ${pathname === "/" ? "text-white" : "text-gray-300"}`}
            href="/pools"
          >
            <span>Pools</span>
          </Link>
          <Link
            className={`flex items-center justify-center gap-2 px-8 text-sm font-bold
            ${pathname === "/stats" ? "text-white" : "text-gray-300"}
            `}
            href="/stats"
          >
            <span>Stats</span>
          </Link>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        connect wallet
      </div>
    </nav>
  );
};
