import React from "react";
import "./Footer.css";
import socialdata from "./Socialdata";

const thisyear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="f_container">
      <div className="f_row f_row-1">
        <h2>
          <i>La Dope Delish</i>
        </h2>
        <h3>Contact Us</h3>
        <h3>FAQ</h3>
        <h3>Careers</h3>
        <h3>Support Us</h3>
        <h3>Make Reservation</h3>
        <h3>Find Us</h3>
        <p>&copy; {thisyear} <i>La Dope Delish,</i> Inc.</p>
      </div>
      <div className="f_row f_row-2">
        <h2>Social</h2>
        <div className="s_container">
          {socialdata.map((Socials) => (
            <div key={Socials.name} className="s_social_container">
              <img
                className="s_image"
                src={Socials.imageUrl}
                alt={Socials.name}
              />
              <h3 className="s_text">{Socials.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="f_row f_row-3">
        <h2>Stay up to date on the latest from <i>La Dope Delish</i></h2>
        <input
          className={"email"}
          type={"email"}
          placeholder={"Enter your e-mail address"}
        />
        <button className="f_button">Sign Up</button>
      </div>
    </div>
  );
};

export default Footer;
