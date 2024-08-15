"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LINKS } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-44 flex flex-col gap-4">
      <span className="py-2 px-4 font-semibold text-sm text-neutral-500 dark:text-neutral-400 pointer-events-none select-none">
        Menu
      </span>
      {LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700/65 flex items-center rounded-lg hover:bg-neutral-200/65 cursor-pointer py-2 px-4 ${
            pathname === link.href
              ? "bg-neutral-200/65 dark:bg-neutral-700/65"
              : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
