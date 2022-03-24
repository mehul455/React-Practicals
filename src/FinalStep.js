import React from "react";

function FinalStep(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <p>
        <b  style={{marginLeft : "40px"}}>Name:</b> {props.state.name}
      </p>
      <p>
        <b  style={{marginLeft : "40px"}}>Surname:</b> {props.state.surname}
      </p>
      <p>
        <b  style={{marginLeft : "40px"}}>Email:</b> {props.state.email}
      </p>
      <p>
        <b  style={{marginLeft : "40px"}}>Phone:</b> {props.state.phone}
      </p>
    </div>
  );
}

export default FinalStep;
