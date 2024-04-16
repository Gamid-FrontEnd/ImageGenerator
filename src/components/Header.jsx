import React from "react";
import logo from "../image/logo_transperent.PNG";

import { Logo } from "./styles";

import { HeaderStyles } from "./styles";

const Header = () => {
  return (
    <HeaderStyles>
      <div>
        <Logo src={logo} />
      </div>
    </HeaderStyles>
  );
};

export default Header;
