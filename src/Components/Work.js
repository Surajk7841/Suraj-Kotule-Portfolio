import React, { Fragment } from "react";
import Classes from "./Work.module.css";
import Expense from "../expensemanager.jpeg";
import Investment from "../investmentcalculator.jpeg";
import UserAge from "../useragetracker.jpeg";

const Work = () => {
  return (
    <Fragment>
      <h1 id="project" className={Classes.h1}>
        Projects
      </h1>
      <div className={Classes.div}>
        <div className={Classes.div1}>
          <img
            className={Classes.img}
            src={Expense}
            alt="Expense Manager"
          ></img>
          <span className={Classes.tooltipText}>
            Easily add, sort, and visualize expenses for efficient financial
            tracking and planning.
          </span>
          <p className={Classes.p}>Expense Manager</p>
          <div className={Classes.diva}>
            <a
              className={Classes.a}
              href="https://github.com/Surajk7841/React-Expense-Manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={Classes.p1}>GitHub</p>
            </a>
            <a
              className={Classes.a}
              href="https://surajk7841.github.io/React-Expense-Manager/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={Classes.p2}>Demo</p>
            </a>
          </div>
        </div>
        <div className={Classes.div2}>
          <img
            className={Classes.img}
            src={Investment}
            alt="investment calculator"
          ></img>
          <span className={Classes.tooltipText}>
            Input financial details, click 'Calculate,' and see a dynamic table
            with key data for easy financial planning.
          </span>
          <p className={Classes.p}>Investment Calculator</p>
          <div className={Classes.diva}>
            <a
              className={Classes.a}
              href="https://github.com/Surajk7841/React-Investment-Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={Classes.p1}>GitHub</p>
            </a>{" "}
            <a
              className={Classes.a}
              href="https://surajk7841.github.io/React-Investment-Calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={Classes.p2}>Demo</p>
            </a>
          </div>
        </div>
        <div className={Classes.div3}>
          <img className={Classes.img} src={UserAge} alt="UserAgeTracker"></img>
          <span className={Classes.tooltipText}>
            Simple data input, validation, and user list management for
            efficient user information tracking.
          </span>
          <p className={Classes.p}>User Age Tracker</p>
          <div className={Classes.diva}>
            <a
              className={Classes.a}
              href="https://github.com/Surajk7841/React-User-Age-Tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={Classes.p1}>GitHub</p>
            </a>{" "}
            <a
              className={Classes.a}
              href="https://surajk7841.github.io/React-User-Age-Tracker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={Classes.p2}>Demo</p>
            </a>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/Surajk7841?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className={Classes.a1}
      >
        View More
      </a>
    </Fragment>
  );
};
export default Work;
