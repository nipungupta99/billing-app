import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="d-flex justify-content-center form-container flex-column ">
    <input className="input-field" onChange={handleChange} {...otherProps} />
    {label ? <label className="label">{label}</label> : null}
  </div>
);

export default FormInput;
