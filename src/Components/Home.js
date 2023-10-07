import React, { Fragment } from "react";
import Classes from "./Home.module.css";
import Resume from "../assets/SurajAKotuleResume.pdf";

const Home = () => {
  return (
    <Fragment>
      <div id="home" className={Classes.container}>
        <div className={Classes.div}>
          <h1 className={Classes.h1}>Welcome...</h1>
          <h3 className={Classes.h3}>Suraj Kotule</h3>
          <h4 className={Classes.h4}>Front End React Developer</h4>
          <p className={Classes.p}>
            "I'm Suraj K, a Front-End React Developer, passionate about creating
            engaging web experiences. Explore my portfolio to see my work."
          </p>
          <a
            className={Classes.a}
            href={Resume}
            download="Suraj kotule Resume.pdf"
          >
            Download Resume
          </a>
        </div>
        <div className={Classes.div2}></div>
      </div>
    </Fragment>
  );
};
export default Home;
