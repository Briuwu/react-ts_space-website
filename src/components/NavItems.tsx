import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { slideLeftItem } from "../Transitions";

interface NavItemsProps {
  toggle: Boolean;
  closeOnNavClick: () => void;
}

const navItems = ["home", "destination", "crew", "technology"];

const NavItems = ({ toggle, closeOnNavClick }: NavItemsProps) => {
  const navItemsElements = navItems.map((nav, i) => (
    <motion.li variants={slideLeftItem} className="nav__items" key={i}>
      <NavLink
        onClick={closeOnNavClick}
        to={`/${nav}`}
        className={({ isActive }) => "link" + (isActive ? " active" : "")}
      >
        <span aria-hidden="true">0{i}</span> {nav}
      </NavLink>
    </motion.li>
  ));

  return (
    <nav>
      <ul
        data-visible={toggle ? "true" : "false"}
        id="primary-nav"
        className="nav flex"
      >
        {navItemsElements}
      </ul>
    </nav>
  );
};

export default NavItems;
