import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { MenuItems } from "./Componentdata";

function Navbar() {
  const [openedmenu, setOpenedMenu] = useState(false);
  const MenuRef = useRef();
  //This works like document.querySelector in vanilla javascript
  const IconRef = useRef();

  //this fires on every click depending..
  function handleOpendMenu() {
    setOpenedMenu(!openedmenu);
  }

  const handleOutsideClick = (e) => {
    if (
      !MenuRef.current.contains(e.target) &&
      !IconRef.current.contains(e.target)
    ) {
      setOpenedMenu(false);
    }
    //The condition for the navbar with useRef hook
  };
  // close the navbar when clicking outside with useffect for proper functionality
  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  });
  return (
    <>
      {/* header */}
      <header className=" w-full h-[80px]  flex px-5 md:px-10 lg:px-16 justify-between items-center z-[999] top-0 fixed border-b-2 border-gray-700 bg-[rgb(0,0,0)]">
          {/* The logo*/}
        <div className=" flex items-center">
          <h1 className=" font-Monessa text-white font-medium text-4xl">
            droid
          </h1>
          <span className=" text-cyan-500 font-bold animate-spin text-2xl lg:text-4xl">
          <ion-icon name="disc-sharp"></ion-icon>
          </span>
        </div>
        {/* navbar */}
        <nav ref={MenuRef}>
          <ul
            className={` bg-black
           fixed h-full bottom-0 z-[999999] ${
             openedmenu ? "left-0 " : " left-[-10000%]"
           } left-0 w-[70%] sm:w-[50%] md:w-[40%] lg:left-auto 
           lg:relative lg:w-auto font-Vernada text-xl lg:text-xl lg:font-normal lg:top-auto flex flex-col lg:bg-transparent text-md font-medium py-10 lg:p-0  px-5 gap-5 text-white lg:flex-row top-0`}
          >
            <Fade cascade damping={0.03}>
              {MenuItems.map((items, index) => (
                <li key={index}>
                  <a href={items.Url} className=" hover:text-cyan-500">
                    {items.text}
                  </a>
                </li>
              ))}
            </Fade>
           
          </ul>
   
        </nav>
        {/* The light dark background that appears when navbar is open */}
        {openedmenu && (
          <div className=" fixed inset-0 lg:hidden  top-[80px]  bg-[rgba(0,0,0,0.6)]"></div>
        )}

        {/* the menu icons which change onclick */}
        <div
          ref={IconRef}
          onClick={handleOpendMenu}
          className=" lg:hidden text-white bg-cyan-400 rounded-md h-10  p-1"
        >
          <ion-icon
            name={`${openedmenu ? "close" : "menu-outline"}`}
            size="large"
          ></ion-icon>
        </div>
      </header>
      {/* End of header */}
    </>
  );
}

export default Navbar;
