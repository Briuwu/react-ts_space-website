import { useState } from "react";
import Section from "../components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { container, slideUpItem } from "../Transitions";

import DouglasImg from "../assets/crew/image-douglas-hurley.png";
import MarkImg from "../assets/crew/image-mark-shuttleworth.png";
import VictorImg from "../assets/crew/image-victor-glover.png";
import AnoushehImg from "../assets/crew/image-anousheh-ansari.png";

const crewData = [
  {
    name: "Douglas Hurley",
    images: {
      png: DouglasImg,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: MarkImg,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: VictorImg,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: AnoushehImg,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const Crew = () => {
  const [crew, setCrew] = useState(crewData);
  const [selectCrew, setSelectCrew] = useState("Douglas Hurley");

  const selectedCrew = crew.filter((eachCrew) => {
    return eachCrew.name === selectCrew;
  });

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
        <AnimatePresence key={el.name} mode="wait">
          <motion.div
            key={el.name}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="crew__container grid"
          >
            <div className="crew__img">
              <motion.img
                variants={slideUpItem}
                src={el.images.png}
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
