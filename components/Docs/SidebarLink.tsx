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
          href={`/docs/branding`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathname === "/docs/branding"
              ? "bg-stroke text-black dark:bg-blackho dark:text-white"
              : "text-black dark:text-white"
          }`}
        >
          Panduan Desain Branding
        </Link>
        <Link
          href={`/docs/media-sosial`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathname === "/docs/media-sosial"
              ? "bg-stroke text-black dark:bg-blackho dark:text-white"
              : "text-black dark:text-white"
          }`}
        >
          Desain Grafik Media Sosial
        </Link>
        <Link
          href={`/docs/print`}
          className={`flex w-full rounded-sm px-3 py-2 text-base ${
            pathname === "/docs/print"
              ? "bg-stroke text-black dark:bg-blackho dark:text-white"
              : "text-black dark:text-white"
          }`}
        >
          Panduan Desain Cetak
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
