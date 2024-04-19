import React from "react";
import logo from "../image/logo_transperent.PNG";

import { Logo, NavBar } from "./styles";

import { HeaderStyles } from "./styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyles>
      <Logo src={logo} />
      <NavBar>
        <ul>
          <li>
            <NavLink to="/">Generator</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </NavBar>
    </HeaderStyles>
  );
};

export default Header;
