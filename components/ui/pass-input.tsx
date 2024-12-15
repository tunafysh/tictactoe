// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    strength?: "weak" | "medium" | "strong" | "none";
  }

const PassInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, strength, type, ...props }, ref) => {

    return (
      <motion.div
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: strength === "weak" ? "#FF0000" : strength === "medium" ? "#FFA500" : strength==="strong" ? "#00FF00" : "transparent" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="p-[4px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
         `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
PassInput.displayName = "Input";

export { PassInput };
