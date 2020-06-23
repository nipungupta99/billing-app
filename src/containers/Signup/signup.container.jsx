import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import HeadingPair from "../../components/heading-pair/heading-pair.component";
import "./signup.styles.scss";
function Signup() {
  return (
    <div className="login">
      <HeadingPair heading="Register" subheading="Register yourself today!" />
      <form onsubmit={console.log("form submitted")}>
        <FormInput label="EMAIL ID" type="email" required />
        <FormInput
          label="MOBILE NUMBER"
          type="text"
          required
          maxlength="10"
          minlength="10"
        />
        <FormInput label="PASSWORD" type="password" required />
        <FormInput label="CONFIRM PASSWORD" type="password" required />
        <button
          type="submit"
          style={{ borderRadius: 0, backgroundColor: "black" }}
          className="btn btn-block btn-dark my-3">
          REGISTER
        </button>
        <p className="text-center py-3">
          Already have an account?
          <span>
            <a href="">Log In</a>
          </span>
        </p>
      </form>
    </div>
  );
}
export default Signup;
