import React from "react";
import { Logo, MenuButton } from "../items";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <MenuButton />
    </nav>
  );
};

export default Navigation;
