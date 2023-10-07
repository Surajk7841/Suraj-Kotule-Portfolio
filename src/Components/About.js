import React, { Fragment } from "react";
import Classes from "./About.module.css";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidFileDoc } from "react-icons/bi";

const About = () => {
  return (
    <Fragment>
      <h1 id="about" className={Classes.h1}>
        About
      </h1>
      <p className={Classes.p}>
        " I'm Suraj A Kotule, a non-CS background individual with a passion for
        web development and a strong commitment to learning. My goal is to
        secure an internship or entry-level position in front-end React
        development. With proficiency in HTML, CSS, JavaScript, and basic React,
        I'm dedicated to delivering high-quality work and creating exceptional
        web experiences. I'm eager, adaptable, and excited to contribute to
        innovative projects in the world of web development. "
      </p>
      <div className={Classes.div}>
        <div className={Classes.divul}>
          <ul className={Classes.ul}>
            <FaLaptopCode /> Technical Skills:
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (ES6)</li>
            <li>Basic React Js</li>
          </ul>
          <br />
          <ul className={Classes.ul}>
            <FaLaptopCode /> Familiar with:
            <li>VS Code</li>
            <li>GitHub</li>
            <li>Bootstrap</li>
            <li>Git</li>
          </ul>
          <br />
          <ul className={Classes.ul}>
            <BiSolidFileDoc /> Certifications:
            <li>Responsive web Design Certificate</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
