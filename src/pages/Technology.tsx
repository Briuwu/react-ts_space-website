import React, { useState } from "react";
import Section from "../components/Section";
import DATA from "../data/data.json";
import { motion, AnimatePresence } from "framer-motion";
import { container, slideUpItem, slideLeftItem } from "../Transitions";

const Technology = () => {
  const [technology, setTechnology] = useState(DATA.technology);
  const [selectTechnology, setSelectTechnology] = useState("Launch vehicle");

  const selectedTechnology = technology.filter((eachTech) => {
    return eachTech.name === selectTechnology;
  });

  const selectedImgLandscape = selectedTechnology
    .map((eachTech) => {
      let image = eachTech.images.landscape.replace(".", "");
      let imageSrc = "./src".concat(image);
      return imageSrc;
    })
    .toString();
  const selectedImgPortrait = selectedTechnology
    .map((eachTech) => {
      let image = eachTech.images.portrait.replace(".", "");
      let imageSrc = "./src".concat(image);
      return imageSrc;
    })
    .toString();

  const technologyChoices = technology.map((eachTech) => eachTech.name);

  const technologyChoicesElement = technologyChoices.map((eachTech, index) => (
    <motion.button
      variants={slideUpItem}
      className={`technology__selection-each ${
        selectTechnology === eachTech ? "active" : ""
      }`}
      key={index}
      onClick={() => setSelectTechnology(eachTech)}
    >
      <span className="sr-only">{eachTech}</span>
      {index + 1}
    </motion.button>
  ));

  return (
    <Section classProps="technology grid">
      <motion.h1 variants={slideUpItem} className="section__title">
        <span>03</span> space launch 101
      </motion.h1>
      {selectedTechnology.map((el) => (
        <AnimatePresence mode="wait">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="technology__container grid"
            key={el.name}
          >
            <motion.img
              variants={slideLeftItem}
              className="technology__img mobile"
              src={selectedImgLandscape}
              alt={el.name}
            />
            <motion.img
              variants={slideLeftItem}
              className="technology__img desktop"
              src={selectedImgPortrait}
              alt={el.name}
            />
            <div className="technology__info flex">
              <div className="technology__selection flex">
                {technologyChoicesElement}
              </div>
              <motion.div className="technology__desc">
                <motion.span variants={slideUpItem}>
                  the terminology...
                </motion.span>
                <motion.h2 variants={slideUpItem} className="section__heading">
                  {el.name}
                </motion.h2>
                <motion.p variants={slideUpItem} className="section__desc">
                  {el.description}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      ))}
    </Section>
  );
};

export default Technology;
