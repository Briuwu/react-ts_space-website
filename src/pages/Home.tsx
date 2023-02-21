import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { slideUpItem } from "../Transitions";

const Home = () => {
  return (
    <Section classProps="home grid container">
      <div className="home__desc">
        <motion.p variants={slideUpItem} className="home__desc-subhead">
          So, you want to travel to
        </motion.p>
        <motion.h1 variants={slideUpItem} className="home__desc-heading">
          space
        </motion.h1>
        <motion.p variants={slideUpItem} className="home__desc-info">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </motion.p>
      </div>
      <Link to="/destination" className="home__explore grid">
        <span>explore</span>
      </Link>
    </Section>
  );
};

export default Home;
