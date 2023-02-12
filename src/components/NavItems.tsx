import React from "react";

interface NavItemsProps {
  toggle: Boolean;
}

const NavItems = ({ toggle }: NavItemsProps) => {
  return (
    <nav>
      <ul
        data-visible={toggle ? "true" : "false"}
        id="primary-nav"
        className="nav flex"
      >
        <li className="nav__items">
          <span aria-hidden="true">00</span> home
        </li>
        <li className="nav__items">
          <span aria-hidden="true">01</span> destination
        </li>
        <li className="nav__items">
          <span aria-hidden="true">02</span> crew
        </li>
        <li className="nav__items">
          <span aria-hidden="true">03</span> technology
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
