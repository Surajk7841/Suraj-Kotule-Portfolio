import React, { Fragment } from "react";
import Classes from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Fragment>
      <nav className={Classes.nav}>
        <Link
          className={Classes.a}
          to="home"
          offset={20}
          smooth={true}
          duration={500}
        >
          Home
        </Link>{" "}
        <Link
          className={Classes.a}
          to="project"
          offset={-50}
          smooth={true}
          duration={500}
        >
          Projects
        </Link>{" "}
        <Link
          className={Classes.a}
          to="about"
          offset={-50}
          smooth={true}
          duration={500}
        >
          About
        </Link>{" "}
        <Link
          activeClass="active"
          spy={true}
          to="contact"
          offset={-50}
          className={Classes.a}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </nav>
    </Fragment>
  );
};
export default Header;
