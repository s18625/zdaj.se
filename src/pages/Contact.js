import React from "react";
import "./Contact.css";
import SubjectsData from "../Data/SubjectsData";
import { useState } from "react";
import emailjs from "emailjs-com";

const subs = SubjectsData.map((subject, index) => (
  <option
    value={subject}
    name="sub"
    key={index}
    style={{ color: "whitesmoke" }}
  >
    {subject}
  </option>
));

function sendEmail(e) {
  e.preventDefault();

  // emailjs
  //   .sendForm(
  //     "service_uut4joi",
  //     "template_os7e4je",
  //     e.target,
  //     "user_UQgrd5zbZwMURxuo0oszo"
  //   )
  //   .then(
  //     (result) => {
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
  e.target.reset();
}

const Contact = (props) => {
  let [color, setColor] = useState("gray");
  return (
    <div className="contact">
      <form action="" className="form" onSubmit={sendEmail}>
        <div className="wrapper">
          <label className="sub" for="sub">
            przedmiot
          </label>
          <select
            name="sub"
            id=""
            style={{ color: color }}
            onChange={() => setColor("whitesmoke")}
          >
            <option value="" name="sub" selected style={{ color: "gray" }}>
              -- Wybierz przedmiot --
            </option>
            {subs}
          </select>
        </div>

        <div className="wrapper">
          <label htmlFor="" className="email">
            Email
          </label>

          <input
            type="e-mail"
            id=""
            placeholder="wpisz swojego maila"
            name="email"
          />
        </div>

        <div className="wrapper">
          <label htmlFor="">Opis</label>

          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="czego od nas oczekujesz"
          ></textarea>
        </div>

        <button className="submit-button" type="submit">
          Wyslij
        </button>
      </form>
    </div>
  );
};

export default Contact;
