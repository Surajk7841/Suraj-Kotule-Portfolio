import "./App.css";
import React, { Fragment } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Work />
      <About />
      <Contact />
    </Fragment>
  );
}

export default App;
