"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to detect current path

const SidebarLink = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <>
      <li className="block">
      <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathname === "/docs"
              ? "bg-stroke text-black dark:bg-blackho dark:text-white"
              : "text-black dark:text-white"
          }`}
        >
          Pengantar
        </Link>
      <Link
          href={`/docs/Event`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathname === "/docs/Event"
              ? "bg-stroke text-black dark:bg-blackho dark:text-white"
              : "text-black dark:text-white"
          }`}
        >
          Event Harian Brivixel
        </Link>
      <Link
          href={`/docs/reward`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathname === "/docs/reward"
              ? "bg-stroke text-black dark:bg-blackho dark:text-white"
              : "text-black dark:text-white"
          }`}
        >
          Dapatkan Reward dari kami
        </Link>

      
        <Link
          href={`/docs/branding`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathname === "/docs/branding"
              ? "bg-stroke text-black dark:bg-blackho dark:text-white"
              : "text-black dark:text-white"
          }`}
        >
          Update 
        </Link>
        
      </li>
    </>
  );
};

export default SidebarLink;
