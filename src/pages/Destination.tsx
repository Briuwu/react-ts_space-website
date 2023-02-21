import { useState } from "react";
import Section from "../components/Section";
import DATA from "../data/data.json";
import { motion, AnimatePresence } from "framer-motion";
import { container, slideLeftItem, slideUpItem } from "../Transitions";

const Destination = () => {
  const [destination, setDestination] = useState(DATA.destinations);
  const [selectDestination, setSelectDestination] = useState("Moon");

  const selectedDestination = destination.filter((eachDestination) => {
    return eachDestination.name === selectDestination;
  });

  const selectedImg = selectedDestination
    .map((eachDestination) => {
      let image = eachDestination.images.png.replace(".", "");
      let imageSrc = "./src".concat(image);
      return imageSrc;
    })
    .toString();

  const destinationChoices = destination.map(
    (eachDestination) => eachDestination.name
  );

  const destinationChoicesElement = destinationChoices.map((each) => (
    <button
      key={each}
      className={each === selectDestination ? "active" : ""}
      onClick={() => setSelectDestination(each)}
    >
      {each}
    </button>
  ));

  return (
    <Section classProps="destination grid container">
      <motion.h1 variants={slideUpItem} className="section__title">
        <span aria-hidden="true">01</span>pick your destination
      </motion.h1>
      {selectedDestination.map((el) => (
        <AnimatePresence key={el.name} mode="wait">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="destination__container grid"
            key={el.name}
          >
            <motion.img
              variants={slideLeftItem}
              className="destination__img"
              src={selectedImg}
              alt={el.name}
            />
            <div className="destination__info">
              <motion.div
                variants={slideUpItem}
                className="destination__selection flex"
              >
                {destinationChoicesElement}
              </motion.div>
              <motion.h2 variants={slideUpItem} className="section__heading">
                {el.name}
              </motion.h2>
              <motion.p variants={slideUpItem} className="section__desc">
                {el.description}
              </motion.p>
              <div className="destination__more flex">
                <motion.div
                  variants={slideUpItem}
                  className="destination__more-distance flex"
                >
                  <p className="subhead">avg. distance</p>
                  <p className="numbers">{el.distance}</p>
                </motion.div>
                <motion.div
                  variants={slideUpItem}
                  className="destination__more-travel flex"
                >
                  <p className="subhead">est. travel time</p>
                  <p className="numbers">{el.travel}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ))}
    </Section>
  );
};

export default Destination;
