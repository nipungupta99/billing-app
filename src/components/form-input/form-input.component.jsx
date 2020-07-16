import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, sm, ...otherProps }) => (
  <div
    className={`d-flex justify-content-center form-container flex-column  ${
      sm ? "sm" : ""
    } `}
  >
    <input className="input-field" onChange={handleChange} {...otherProps} />
    {label ? <label className="label">{label}</label> : null}
  </div>
);

export default FormInput;
