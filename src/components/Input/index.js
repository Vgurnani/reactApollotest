import React, { Fragment } from "react";

function Input(props) {
  return <input type={props.type} onChange={props.changeEventFunction} />;
}

export default Input;
