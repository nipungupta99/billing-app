import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import HeadingPair from "../../components/heading-pair/heading-pair.component";
import "./login.styles.scss";
function Login() {
  return (
    <div className="login">
      <HeadingPair heading="Login" subheading="Enter your Credentials here" />
      <div className="">
        <FormInput label="EMAIL ID" type="text" />
        <FormInput label="PASSWORD" type="password" />
        <button
          style={{ borderRadius: 0, backgroundColor: "black" }}
          className="btn btn-block btn-dark my-3">
          LOGIN
        </button>
        <p className="text-center py-3">
          Dont have an account yet?{" "}
          <span>
            <a href="">Sign Up</a>
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
