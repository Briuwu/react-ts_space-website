import NavItems from "./NavItems";
import Logo from "../assets/shared/logo.svg";
import MenuOpen from "../assets/shared/icon-hamburger.svg";
import MenuClose from "../assets/shared/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navContainer } from "../Transitions";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    const menu = !toggle;
    setToggle((prev) => !prev);

    if (menu) {
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
  };

  function closeOnNavClick() {
    setToggle(false);
    if (!toggle) {
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
  }

  return (
    <motion.header
      variants={navContainer}
      initial="hidden"
      animate="visible"
      className="header flex"
    >
      <div className="header__logo">
        <Link to="/home">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <button
        onClick={handleToggle}
        className="header__btn"
        aria-controls="primary-nav"
      >
        <span className="sr-only">Menu</span>
        <img src={toggle ? MenuClose : MenuOpen} alt="" />
      </button>

      <NavItems toggle={toggle} closeOnNavClick={closeOnNavClick} />
    </motion.header>
  );
};

export default Navbar;
