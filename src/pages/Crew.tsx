import React, { useState } from "react";
import Section from "../components/Section";
import DATA from "../data/data.json";

const Crew = () => {
  const [crew, setCrew] = useState(DATA.crew);
  const [selectCrew, setSelectCrew] = useState("Douglas Hurley");

  const selectedCrew = crew.filter((each) => {
    return each.name === selectCrew;
  });

  const selectedImg = selectedCrew
    .map((item) => {
      let image = item.images.png.replace(".", "");
      let imageSrc = "./src".concat(image);
      return imageSrc;
    })
    .toString();

  const crewSelections = crew.map((each) => each.name);

  return (
    <Section classProps="crew">
      <h1 className="section__title">
        <span aria-hidden="true">02</span>meet your crew
      </h1>
      {selectedCrew.map((el) => (
        <div className="crew__container" key={el.name}>
          <img src={selectedImg} alt="" />
          <div className="crew__info">
            <div className="crew__selection">
              {crewSelections.map((each) => (
                <button className="crew__selection-each" key={each}>
                  <span>Select {each}</span>
                </button>
              ))}
            </div>
            <p className="crew__role">{el.role}</p>
            <h2 className="crew__name">{el.name}</h2>
            <p className="crew__bio">{el.bio}</p>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Crew;
