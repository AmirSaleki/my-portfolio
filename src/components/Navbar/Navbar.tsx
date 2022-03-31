import React, { useState } from "react";

import classes from "./Navbar.module.css";
import myWhiteLogo from "../../images/myLogo-white.png";
import myBlackLogo from "../../images/myLogo-black.png";

const Navbar: React.FC<{ themeSwitcher: () => void }> = (props) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [menuClicked, isMenuClicked] = useState(false);

  const themeSwitcher = () => {
    props.themeSwitcher();
    setIsLightMode(!isLightMode);
  };

  const menuHandler = () => {
    isMenuClicked(!menuClicked);
  };

  return (
    <>
      <div className={classes.navContainer}>
        <div className={classes.row}>
          <div className={classes.leftSide}>
            <img
              className={classes.logo}
              src={isLightMode ? myBlackLogo : myWhiteLogo}
              alt="myLogo"
            />
          </div>
          <div className={classes.rightSide}>
            <ul className={classes.navList}>
              <li>
                <a href="/">About Me</a>
              </li>
              <li>
                <a href="/">My Projects</a>
              </li>
              <li>
                <a href="/">Path to Frontend Developer</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <div
              className={`${classes.moon} ${isLightMode && classes.sun}`}
              onClick={themeSwitcher}
            ></div>
            <i
              className={`fas fa-bars fa-1x ${classes.menuIcon}`}
              onClick={menuHandler}
            ></i>
          </div>
        </div>
        <div className={classes.row}></div>
        {menuClicked && (
          <div>
            <ul className={classes.menuList}>
              <li>
                <a href="/">About Me</a>
              </li>
              <li>
                <a href="/">My Projects</a>
              </li>
              <li>
                <a href="/">Path to Frontend Developer</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
