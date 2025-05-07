"use client";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <motion.div className="-z-0 relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
      style={{
        color: theme === "light" ? 'black' : 'white', 
        background:
          theme === "light"
            ? "linear-gradient(to bottom right, #eee7d9, #e0d6c7)"
            : "linear-gradient(to bottom right, #111827, #1f2937)",
      }}
    >
      {children}
    </motion.div>
  );
}