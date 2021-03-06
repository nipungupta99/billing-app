import React, {useContext, useEffect, useState} from "react";
import FormInput from "../../components/form-input/form-input.component";
import HeadingPair from "../../components/heading-pair/heading-pair.component";
import "./login.styles.scss";
import firebase from '../../firebase'
import {LoginContext} from "../../context/loginContext";
const Login  = () => {


  const [login, setLogin] = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
    console.log(loginInfo)
  }, [loginInfo]);


  const handleChange = (evt) => {
    const value = evt.target.value;
    setLoginInfo({
      ...loginInfo,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginInfo)
    setLoading(!loading);
    firebase
        .auth()
        .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
        .then((res) => {
          localStorage.setItem("login", true)
setLogin(true)
        })
        .catch((err) => {
          alert("Login Failed, Please check your credentials and try again");
          setLoading(false);
        });
  };


  return (
    <div className="login">
      <HeadingPair heading="Login" subheading="Enter your Credentials here" />
      <div className="">
        <FormInput name="email"  label="EMAIL ID" type="text" onChange={handleChange} />
        <FormInput name="password" label="PASSWORD" type="password" onChange={handleChange} />
        <button
          style={{ borderRadius: 0, backgroundColor: "black" }}
          className="btn btn-block btn-dark my-3"
        onClick={handleSubmit}
        >
          LOGIN
        </button>
        {/*<p className="text-center py-3">*/}
        {/*  Dont have an account yet?{" "}*/}
        {/*  <span>*/}
        {/*    <a href="">Sign Up</a>*/}
        {/*  </span>*/}
        {/*</p>*/}
      </div>
    </div>
  );
}
export default Login;
