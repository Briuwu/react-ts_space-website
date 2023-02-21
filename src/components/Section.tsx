import { ReactNode } from "react";

interface sectionProps {
  children: ReactNode;
  classProps: string;
}

const Section = ({ children, classProps }: sectionProps) => {
  return <section className={`${classProps}`}>{children}</section>;
};

export default Section;
