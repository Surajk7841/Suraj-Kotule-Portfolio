import React, { Fragment, useState, useRef } from "react";
import Classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaRegCopyright,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMsg, setEnteredMsg] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      enteredName.trim().length < 3 ||
      enteredMail.trim().length < 10 ||
      enteredMsg.trim().length === 0
    ) {
      alert("Please enter valid Name, Mail and Message (non-empty values).");
      return;
    }
    if (enteredMsg.trim().length < 17) {
      alert("Message too short");
      return;
    }

    emailjs
      .sendForm(
        "service_63hivnt",
        "template_jw504kc",
        form.current,
        "vZDnWhruw2EmXV7Yh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEnteredName("");
    setEnteredMail("");
    setEnteredMsg("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mailChangeHandler = (event) => {
    const mailInput = event.target.value;
    setEnteredMail(mailInput);
    setIsValid(validateEmail(mailInput));
  };

  const msgChangeHandler = (event) => {
    setEnteredMsg(event.target.value);
  };
  return (
    <Fragment>
      <h1 id="contact" className={Classes.h1}>
        Contact
      </h1>
      <div className={Classes.divf}>
        <form ref={form} onSubmit={sendEmail}>
          <label className={Classes.label}>Name</label>
          <input
            className={Classes.input}
            type="text"
            name="from_name"
            placeholder="Name"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
          <br />
          <label className={Classes.label}>Email</label>
          <input
            className={Classes.input}
            type="email"
            placeholder="Email"
            name="user_email"
            required
            style={{ borderColor: isValid ? "initial" : "red" }}
            value={enteredMail}
            onChange={mailChangeHandler}
          ></input>{" "}
          {!isValid && (
            <p style={{ color: "orange", margin: "0px" }}>
              Invalid Email Format
            </p>
          )}
          <br />
          <label className={Classes.label}>Message</label>
          <textarea
            className={Classes.input}
            cols={30}
            name="message"
            placeholder="Message"
            rows={10}
            value={enteredMsg}
            onChange={msgChangeHandler}
          ></textarea>
          <button className={Classes.button} type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
      <div className={Classes.div}>
        <a
          className={Classes.a}
          href="https://github.com/Surajk7841"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          className={Classes.a}
          href="https://www.linkedin.com/in/surajkotule/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn /> LinkedIn
        </a>
        <a
          className={Classes.a}
          href="mailto:kotulesuraj@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> Gmail
        </a>
        <a
          className={Classes.a}
          href="tel:+917744898673"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFillTelephoneFill /> Phone
        </a>
      </div>
      <p className={Classes.p}>
        Copyright <FaRegCopyright /> 2023 Suraj Kotule. All Rights Reserved.
        <br />
        (last update - 7th Oct 2023)
      </p>
    </Fragment>
  );
};

export default Contact;
