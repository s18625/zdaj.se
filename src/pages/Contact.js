import React from "react";
import "./Contact.css";

const Contact = (props) => (
  <div className="contact">
    <form action="" noValidate className="form">
      <div className="wrapper">
        <label className="subject" for="subject">
          przedmiot
        </label>
        <input type="text" placeholder="wybierz przedmiot" name="subject" />
      </div>

      <div className="wrapper">
        <label htmlFor="" className="email">
          Email
        </label>

        <input type="e-mail" name="" id="" placeholder="wpisz swojego maila" />
      </div>

      <div className="wrapper">
        <label htmlFor="">Opis</label>

        <textarea
          name="subject"
          id=""
          cols="30"
          rows="10"
          placeholder="czego od nas wymagasz"
        ></textarea>
      </div>

      <button className="submit-button" type="submit" noValidate>
        Wyslij
      </button>
    </form>
  </div>
);

export default Contact;
