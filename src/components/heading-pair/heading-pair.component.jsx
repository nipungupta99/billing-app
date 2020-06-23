import React from "react";
import "./heading-pair.styles.scss";
function HeadingPair({ heading, subheading }) {
  return (
    <div className="d-flex flex-column  p-2 ">
      <h3 style={{ fontWeight: 600 }}>{heading}</h3>
      <p className="sub-heading">{subheading}</p>
    </div>
  );
}

export default HeadingPair;
