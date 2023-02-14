import React, { ReactNode } from "react";

interface sectionProps {
  children: ReactNode;
  classProps: string;
}

const Section = ({ children, classProps }: sectionProps) => {
  return <div className={`${classProps} container`}>{children}</div>;
};

export default Section;
