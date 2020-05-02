import React from "react";
import "./Menu.css";

const Menu = (props) => {
  return (
    <nav className="Menu">
      {props.paths.map((path, key) => {
        return (
          <a href={path} key={key}>
            {path === "/" ? "Home" : path}
          </a>
        );
      })}
    </nav>
  );
};

export default Menu;
