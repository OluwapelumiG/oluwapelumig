"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function BookFlip({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      className="leaf"
      initial={reduce ? false : { opacity: 0.25 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: reduce ? 0 : 0.12 }}
    >
      {children}
    </motion.div>
  );
}
