import React from "react";
import "./Contact.css";
import subjects from "../Data/SubjectsData";

const subs = subjects.map((subject) => <option value="">{subject}</option>);

const Contact = (props) => (
  <div className="contact">
    <form action="" className="form">
      <div className="wrapper">
        <label className="subject" for="subject">
          przedmiot
        </label>
        <select name="" id="">
          <option value="" selected></option>
          {subs}
        </select>
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

      <button className="submit-button" type="button">
        Wyslij
      </button>
    </form>
  </div>
);

export default Contact;
