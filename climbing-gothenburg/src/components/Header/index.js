import React from "react";
import "./Header.css";
import bg from "../../uploads/background.jpeg";

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={bg} alt="climbing" />
    </div>
  );
};

export default Header;
