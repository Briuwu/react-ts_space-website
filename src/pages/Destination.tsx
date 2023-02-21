import { useState } from "react";
import Section from "../components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { container, slideLeftItem, slideUpItem } from "../Transitions";

const destinationData = [
  {
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "./assets/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destination = () => {
  const [destination, setDestination] = useState(destinationData);
  const [selectDestination, setSelectDestination] = useState("Moon");

  const selectedDestination = destination.filter((eachDestination) => {
    return eachDestination.name === selectDestination;
  });

  const selectedImg = selectedDestination
    .map((eachDestination) => {
      let image = eachDestination.images.png.replace(".", "");
      let imageSrc = "..".concat(image);
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
