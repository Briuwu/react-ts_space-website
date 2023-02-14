import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemsProps {
  toggle: Boolean;
  closeOnNavClick: () => void;
}

const navItems = ["home", "destination", "crew", "technology"];

const NavItems = ({ toggle, closeOnNavClick }: NavItemsProps) => {
  const navItemsElements = navItems.map((nav, i) => (
    <li className="nav__items" key={i}>
      <NavLink
        onClick={closeOnNavClick}
        to={`/${nav}`}
        className={({ isActive }) => "link" + (isActive ? " active" : "")}
      >
        <span aria-hidden="true">0{i}</span> {nav}
      </NavLink>
    </li>
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
