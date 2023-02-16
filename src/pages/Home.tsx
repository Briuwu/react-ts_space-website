import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";

const Home = () => {
  return (
    <Section classProps="home">
      <div className="home__desc">
        <p className="home__desc-subhead">So, you want to travel to</p>
        <h1 className="home__desc-heading">space</h1>
        <p className="home__desc-info">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination" className="home__explore">
        <span>explore</span>
      </Link>
    </Section>
  );
};

export default Home;
