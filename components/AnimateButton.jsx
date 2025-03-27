import React from "react";
import "./button.css";

const AnimateButton = ({ label }) => {
  return (
    <>
      <button>
        <div className="default-btn">
          <span>{ label }</span>
        </div>
        <div className="hover-btn">
          <span>{ label }</span>
        </div>
      </button>
    </>
  );
};

export default AnimateButton;
