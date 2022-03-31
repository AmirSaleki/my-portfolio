import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import logo from "./images/logo.png";

function App() {
  //switch Themes
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const themeSwitchHandler = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  // Elements to animate
  const introFrontPage = useRef<HTMLDivElement>(null);
  const introLogo = useRef<HTMLImageElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  // intro animation
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introFrontPage.current,
        start: "top",
        end: "100%",
        pin: true,
        scrub: true,
      },
    });
    tl.fromTo(
      introFrontPage.current,
      { clipPath: "circle(6%)" },
      { clipPath: "circle(100%)", duration: "2" }
    );
    tl.fromTo(
      introLogo.current,
      { scale: "1" },
      { scale: "0", opacity: "0", duration: "1" },
      "-=2"
    );
    tl.fromTo(
      backdrop.current,
      { opacity: "0" },
      { opacity: "1", duration: "2" },
      "-=2"
    );
  });
  return (
    <div className={`${isDarkTheme ? classes.dark : classes.light}`}>
      <Navbar themeSwitcher={themeSwitchHandler} />
      <div className={classes.frontPage} ref={introFrontPage}>
        <div className={classes.backdrop} ref={backdrop}>
          <Header theme={isDarkTheme ? "dark" : "light"} />
        </div>
        <img className={classes.logo} src={logo} alt="logo" ref={introLogo} />
        <div className={classes.blend}></div>
      </div>
      <Intro />
    </div>
  );
}

export default App;
