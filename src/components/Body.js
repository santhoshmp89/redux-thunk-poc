import React from "react";

const Body = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">{props.children}</div>
      </div>
    </div>
  );
};

export default Body;
