import { useState } from "react";
import Section from "../components/Section";
import DATA from "../data/data.json";
import { motion, AnimatePresence } from "framer-motion";
import { container, slideUpItem } from "../Transitions";

const Crew = () => {
  const [crew, setCrew] = useState(DATA.crew);
  const [selectCrew, setSelectCrew] = useState("Douglas Hurley");

  const selectedCrew = crew.filter((eachCrew) => {
    return eachCrew.name === selectCrew;
  });

  const selectedImg = selectedCrew
    .map((eachCrew) => {
      let image = eachCrew.images.png.replace(".", "");
      let imageSrc = "./src".concat(image);
      return imageSrc;
    })
    .toString();

  const crewSelections = crew.map((eachCrew) => eachCrew.name);

  const crewSelectionsElement = crewSelections.map((each) => (
    <button
      className={`crew__selection-each ${each === selectCrew ? "active" : ""}`}
      key={each}
      onClick={() => setSelectCrew(each)}
    >
      <span className="sr-only">Select {each}</span>
    </button>
  ));

  return (
    <Section classProps="crew grid container">
      <motion.h1 variants={slideUpItem} className="section__title">
        <span aria-hidden="true">02</span>meet your crew
      </motion.h1>
      {selectedCrew.map((el) => (
        <AnimatePresence mode="wait">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="crew__container grid"
            key={el.name}
          >
            <div className="crew__img">
              <motion.img
                variants={slideUpItem}
                src={selectedImg}
                alt={el.name}
              />
            </div>
            <div className="crew__info">
              <motion.div
                variants={slideUpItem}
                className="crew__selection flex"
              >
                {crewSelectionsElement}
              </motion.div>
              <motion.p variants={slideUpItem} className="crew__role">
                {el.role}
              </motion.p>
              <motion.h2 variants={slideUpItem} className="section__heading">
                {el.name}
              </motion.h2>
              <motion.p variants={slideUpItem} className="section__desc">
                {el.bio}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      ))}
    </Section>
  );
};

export default Crew;
