"use client";

import React, { useState } from "react";

const MenuButton = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <button className="flex flex-col gap-[5px]" onClick={toggleMenu}>
        <span className="bg-black w-[41px] h-[3px]"></span>
        <span className="bg-black w-[41px] h-[3px]"></span>
      </button>
      {openMenu && (
        <div className="bg-green w-full h-screen absolute top-0 left-0 z-10 flex items-center justify-center">
          <button
            className="fixed top-[2.3rem] right-[2rem] flex flex-col gap-[5px]"
            onClick={closeMenu}
          >
            <span className="bg-white w-[41px] h-[3px]"></span>
            <span className="bg-white w-[41px] h-[3px]"></span>
          </button>
          <div className="text-white text-[4rem] flex flex-col gap-2">
            <p>Index</p>
            <p>Discover</p>
            <p>Contact</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuButton;
