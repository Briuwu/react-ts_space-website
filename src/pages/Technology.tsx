import React, { useState } from "react";
import Section from "../components/Section";
import DATA from "../data/data.json";

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
    <button
      className={`technology__selection-each ${
        selectTechnology === eachTech ? "active" : ""
      }`}
      key={index}
      onClick={() => setSelectTechnology(eachTech)}
    >
      <span className="sr-only">{eachTech}</span>
      {index + 1}
    </button>
  ));

  return (
    <Section classProps="technology grid">
      <h1 className="section__title">
        <span>03</span> space launch 101
      </h1>
      {selectedTechnology.map((el) => (
        <div className="technology__container grid" key={el.name}>
          <img
            className="technology__img mobile"
            src={selectedImgLandscape}
            alt={el.name}
          />
          <img
            className="technology__img desktop"
            src={selectedImgPortrait}
            alt={el.name}
          />
          <div className="technology__info flex">
            <div className="technology__selection flex">
              {technologyChoicesElement}
            </div>
            <div className="technology__desc">
              <span>the terminology...</span>
              <h2 className="section__heading">{el.name}</h2>
              <p className="section__desc">{el.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Technology;
