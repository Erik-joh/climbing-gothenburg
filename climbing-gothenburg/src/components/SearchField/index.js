import React from "react";
import "./SearchField.css";

const SearchField = (props) => {
  return (
    <div className="search-field">
      <p>{props.fieldName}</p>
      <input onChange={props.handleChange} />
    </div>
  );
};

export default SearchField;
