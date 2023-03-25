import React from "react";
import "../styles/OverlayStyle.css";

const Overlay = (props) => {
  const checkForOverlay = (e) => {
    e.stopPropagation();
    props.functionCall();
  };

  return (
    <div className="overlay-on">
      <div className="text">
        {props.children}
        <button type="button" onClick={checkForOverlay}>
          X
        </button>
      </div>
    </div>
  );
}

export default Overlay;
