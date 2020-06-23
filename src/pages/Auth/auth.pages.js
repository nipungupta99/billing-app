import React from "react";
import Signup from "../../containers/Signup/signup.container";
import Login from "../../containers/Login/login.container";
function AuthPage() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center ">
      <Signup />
    </div>
  );
}

export default AuthPage;
