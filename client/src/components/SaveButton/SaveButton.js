import React from "react";
import "./saveButton.css";
// Destructuring the type, className, children and onClick props, applying them to the button element
const saveButton = props => (
  <button className="btn btn-lg btn-primary btn-save" {...props}>
     Save
  </button>
);

export default saveButton;
