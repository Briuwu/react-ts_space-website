import React, { useState } from "react";
import Section from "../components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { container, slideUpItem, slideLeftItem } from "../Transitions";

const technologyData = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./assets/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./assets/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = () => {
  const [technology, setTechnology] = useState(technologyData);
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
        <AnimatePresence key={el.name} mode="wait">
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
              src={el.images.landscape}
              alt={el.name}
            />
            <motion.img
              variants={slideLeftItem}
              className="technology__img desktop"
              src={el.images.portrait}
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
