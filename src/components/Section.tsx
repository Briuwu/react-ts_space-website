import { ReactNode } from "react";
import { motion } from "framer-motion";
import { container } from "../Transitions";

interface sectionProps {
  children: ReactNode;
  classProps: string;
}

const Section = ({ children, classProps }: sectionProps) => {
  return (
    <motion.section
      key="section"
      variants={container}
      initial="hidden"
      animate="visible"
      className={`${classProps}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
