import React from "react";

const Col = props => {
  return <div className={props.classNames}>{props.children}</div>;
};

export default Col;
