import React from "react";

import classes from "./Header.module.css";
import {
  bootstrap,
  css,
  express,
  firebase,
  github,
  html,
  mongo,
  nextjs,
  npm,
  photoshop,
  postman,
  reactimg,
  redux,
  mysql,
  sass,
  ubuntu,
  wpcom,
} from "../../images/icons/images";
import lightTheme from "../../images/changeThemeBlack.png";
import darkTheme from "../../images/changeThemeWhite.png";

const Header: React.FC<{ theme: string }> = (props) => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.changeTheme}>
        {props.theme === "dark" ? (
          <img src={darkTheme} alt="" />
        ) : (
          <img src={lightTheme} alt="" />
        )}
      </div>
      <div className={classes.animationContainer}>
        <div className={classes.toLeftText}>
          <h2>Junior Frontend Developer</h2>
        </div>
        <div className={classes.toRightText}>
          <img src={reactimg} alt="" />
          <img src={redux} alt="" />
          <img src={express} alt="" />
          <img src={nextjs} alt="" />
          <img src={mysql} alt="" />
          <img src={reactimg} alt="" />
        </div>
        <div className={classes.toLeftText}>
          <h2>Computer Science Student </h2>
        </div>
        <h1>Hi, My Name is Amir and I'm a ...</h1>
        <div className={classes.toRightText}>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={sass} alt="" />
          <img src={bootstrap} alt="" />
          <img src={photoshop} alt="" />
          <img src={wpcom} alt="" />
        </div>
        <div className={classes.toLeftText}>
          <h2>Coding Enthusiast!</h2>
        </div>
        <div className={classes.toRightText}>
          <img src={firebase} alt="" />
          <img src={github} alt="" />
          <img src={npm} alt="" />
          <img src={postman} alt="" />
          <img src={mongo} alt="" />
          <img src={ubuntu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
