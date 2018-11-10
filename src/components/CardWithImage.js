import React from "react";

const CardWithImage = props => {
  return (
    <div className="card">
      <img
        alt=""
        className="card-img-top"
        src={props.imagUrl}
        style={{ width: 100 + "px" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.first_name} {props.last_name}
        </h5>
        <button className="btn btn-primary" onClick={() => props.btnOnClick(1)}>
          Go somewhere
        </button>
      </div>
    </div>
  );
};

export default CardWithImage;
