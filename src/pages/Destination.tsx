import { useState } from "react";
import Section from "../components/Section";
import DATA from "../data/data.json";

const Destination = () => {
  const [destination, setDestination] = useState(DATA.destinations);
  const [selectDestination, setSelectDestination] = useState("Moon");

  const selectedDestination = destination.filter((prev) => {
    return prev.name === selectDestination;
  });

  const selectedImg = selectedDestination
    .map((item) => {
      let image = item.images.png.replace(".", "");
      let imageSrc = "./src".concat(image);
      return imageSrc;
    })
    .toString();

  const destinationChoices = destination.map((each) => each.name);

  return (
    <Section classProps="destination">
      <h1 className="section__title">
        <span aria-hidden="true">01</span>pick your destination
      </h1>
      {selectedDestination.map((el) => (
        <div className="destination__container" key={el.name}>
          <img className="destination__img" src={selectedImg} alt={el.name} />
          <div className="destination__info">
            <div className="destination__selection flex">
              {destinationChoices.map((each) => (
                <button
                  key={each}
                  className={each === selectDestination ? "active" : ""}
                  onClick={() => setSelectDestination(each)}
                >
                  {each}
                </button>
              ))}
            </div>
            <h2 className="destination__name">{el.name}</h2>
            <p className="destination__desc">{el.description}</p>
            <div className="destination__more flex">
              <div className="destination__more-distance flex">
                <p className="subhead">avg. distance</p>
                <p className="numbers">{el.distance}</p>
              </div>
              <div className="destination__more-travel flex">
                <p className="subhead">est. travel time</p>
                <p className="numbers">{el.travel}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Destination;
