import React from "react";

const SectionHeader = ({children}) => {
  return (
    <h1 className="lg:text-6xl md:text-3xl text-xl text-center font-bold py-8 mb-8">
      {children}
    </h1>
  );
};

export default SectionHeader;
