import { motion } from "motion/react";

const buttonVariants = {
  primary: "bg-[#24221f] text-[#f7f4ee] hover:bg-[#3a3631]",
  secondary: "bg-transparent border border-[#a3835a] text-[#8b6d47] hover:bg-[#a3835a] hover:text-[#f7f4ee]",
  ghost: "bg-transparent text-[#5e5952] hover:text-[#24221f]",
};

export function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`font-sans text-sm font-medium tracking-wide px-6 py-3 rounded-full transition-colors duration-300 ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
