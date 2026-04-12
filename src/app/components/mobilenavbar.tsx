"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react"; // or your existing icon
import { cn } from "@/lib/utils"; // optional, your utility function for className merging
import { IconType } from "react-icons";

export type NavItem = {
  title: string;
  logo: IconType;
  href: string;
};

export const MobileNavbar = ({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("z-50 md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 -left-1 bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-xl flex flex-col gap-8"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <div className="border-2 rounded-2xl w-full h-full inset-0 p-1 flex flex-col items-center text-center">
                  <Link
                    href={item.href}
                    className="w-5 h-5 flex items-center justify-center"
                    prefetch={false}
                  >
                    {<item.logo />}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="h-12 w-12 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center shadow-md"
        title="Menu"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};
