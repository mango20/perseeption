import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
// import { response } from "express";
// import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginMessage, setloginMessage] = useState("");

  const [ForgotEmail, setForgotEmail] = useState("");

  const history = useHistory();

  Axios.defaults.withCredentials = true;
  console.log((Axios.defaults.withCredentials = true));
  const Login = () => {
    Axios.post("http://localhost:57230/login", {
      USERNAME: username,
      USER_PASSWORD: password,
    }).then((response) => {
      console.log(response);
      // setLoginStatus(response);
      if (!response.data.auth) {
        setLoginStatus(false);
        setloginMessage(response.data.message);
        const errorMgs = (document.getElementById("errorMsg").style.display =
          "block");
        setTimeout(function () {
          document.getElementById("errorMsg").style.display = "none";
        }, 3000);
        // const errorMgs =
        //   ((document.getElementById("errorMsg").style.display = "block"), 1000);
      } else {
        console.log(response.data);
        // localStorage.setItem("USER_ID", response.data.token);
        localStorage.setItem("USER_ID", response.data.result[0].USER_TYPE);
        localStorage.getItem(response.data.result);
        setLoginStatus(true);
        setloginMessage(response.data.message);
        const l =
          ((document.getElementById("bgLoginStats").style.display = "block"),
          10000);
        // document.getElementsById("bgLoginStats").style.display = "block";
        console.log(response.data.result[0].message);
        if (response.data.result[0].USER_TYPE === "Admin") {
          console.log(response.data.result[0].USER_TYPE);
          Axios.defaults.withCredentials = true;
          // history.pushState("")
          // history.push("/AdminDashboard");
          setTimeout(function () {
            // window.location = "https://perseeption.com/AdminDashboard";
            history.push("/AdminDashboard");
          }, 1800);
          // window.location = "/AdminDashboard";
        } else {
          Axios.defaults.withCredentials = true;
          // document.getElementsById("LoginHeader").style.visibility = "hidden";
          history.push("/");
        }
      }
    });
  };

  // const userAuthentication = () => {
  //   Axios.get("http://localhost:57230/isUserAuth", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  useEffect(() => {
    Axios.get("http://localhost:57230/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].USERNAME);
        console.log(response.data.user[0].USERNAME);
      }
    });
  }, []);

  const forgotPass = () => {
    document.getElementById("popForgot").style.display = "block";
    document.getElementById("modalForgot").style.display = "grid";
  };
  const [emailmsg, setEmailMsg] = useState("");
  const submitEmail = () => {
    Axios.post("http://localhost:57230/resetPassword", {
      ForgotEmail: ForgotEmail,

      // USER_ID: USER_ID,
    }).then((response) => {
      setEmailMsg(response.data.message);
      if (response.data.message == "Email not found") {
        document.getElementById("emailMsg").style.display = "block";
        setTimeout(function () {
          document.getElementById("emailMsg").style.display = "none";
        }, 3000);
        console.log(response.data);
      } else {
        document.getElementById("emailMsg").style.display = "block";
        document.getElementById("emailMsg").style.backgroundColor = "green";
        // setTimeout(function () {
        //   document.getElementById("emailMsg").style.display = "none";
        // }, 3000);
        // console.log(response.data);
      }
    });
  };

  const backToLogin = () => {
    document.getElementById("popForgot").style.display = "none";
    document.getElementById("modalForgot").style.display = "none";
  };
  return (
    <div className="LoginBg">
      {/* <div className="MainHeader">
        <div className="imgContainer">
          <Link className="imgHeader" to="/">
            <img src="/images/logoIcon.png" alt="img" className="imgIcon" />
            <img src="/images/logotext.png" alt="img" className="imgtxt" />
          </Link>
        </div>
        <div className="headerText">
          <Link className="homeHeader" to="/">
            Home
          </Link>
          <Link className="announcementHeader" to="/MemberAnnouncement">
            Announcement
          </Link>
          <Link className="eventHeader" to="/MemberEvents">
            Event
          </Link>
          <Link className="forumHeader" to="/">
            Forum
          </Link>
          <Link className="aboutHeader" to="/MemberAbout">
            About
          </Link>
          <Link className="contactHeader" to="/ContactUs">
            Contact
          </Link>
          <Link className="signinHeader" to="/Login">
            Log in
          </Link>
        </div>
      </div> */}
      <div id="popForgot">
        <div id="modalForgot">
          <h1>Forgot your password?</h1>

          <p>
            Enter your email you used to sign up to receive a link to reset your
            password
          </p>
          <h4 id="emailMsg">{emailmsg}</h4>
          <input
            type="text"
            id="emailForgot"
            placeholder="Enter Email"
            onChange={(e) => {
              setForgotEmail(e.target.value);
            }}
          />
          <button id="submitEmailForgot" onClick={submitEmail}>
            Continue
          </button>
          <h3 id="backForgot" onClick={backToLogin}>
            Back to Login
          </h3>
        </div>
      </div>
      <div className="login">
        <div className="loginOut">
          <div className="loginContainer">
            {/* <p className="titleLog">Login</p> */}
            <Link to="/" className="fa fa-times"></Link>
            <div className="inputUsernameLoginOutside">
              <h3 id="errorMsg">{loginMessage}</h3>
              <input
                type="text"
                placeholder="Enter username"
                className="inputUsernameLogin"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <input
              type="password"
              placeholder="Enter password"
              className="inputPasswordLogin"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p id="forgotPass" onClick={forgotPass}>
              Forgot password?
            </p>
            <p onClick={Login} className="loginUserBtn">
              Sign In
            </p>

            <span className="dont">
              Don't have an account?
              <Link to="/Registration" className="dontHaveAcc">
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bgLoginStats" id="bgLoginStats">
        <div className="LoginStats">
          {/* <p className="fa fa-times" id="closeBtn"></p> */}
          <img
            src="/images/logoIcon.png"
            alt="icon"
            className="LoginstatusIcon"
          />
          <h1>{loginMessage}</h1>{" "}
        </div>
      </div>
    </div>
  );
}

export default Login;
// && (
//           <button onClick={userAuthentication}>Check if Auth</button>
//         )
