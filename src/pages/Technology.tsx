import React, { useState } from "react";
import Section from "../components/Section";
import DATA from "../data/data.json";

const Technology = () => {
  const [technology, setTechnology] = useState(DATA.technology);
  const [selectTechnology, setSelectTechnology] = useState("Launch vehicle");

  const selectedTechnology = technology.filter((eachTechnology) => {
    return eachTechnology.name === selectTechnology;
  });

  return <Section classProps="technology">Technology</Section>;
};

export default Technology;
