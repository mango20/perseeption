import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Login.css";
import Axios from "axios";

function Resetpassword() {
  const { USER_ID } = useParams();
  const { TOKEN } = useParams();
  const [forgotPass, setforgotPass] = useState("");
  //   const [info, setinfo] = useState([]);

  const submitForgotPass = () => {
    const pass = document.getElementById("forgot_pass_").value;
    const passConfirm = document.getElementById("forgot_passConfirm").value;
    console.log(USER_ID);

    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );
    const l = passwordRegex.test(pass);
    console.log(l);

    if (pass !== passConfirm) {
      document.getElementById("fillMsg_").style.display = "block";
      setTimeout(function () {
        document.getElementById("fillMsg_").style.display = "none";
      }, 3000);
    } else if (pass === "" || passConfirm === "") {
      document.getElementById("fillMsg").style.display = "block";
      setTimeout(function () {
        document.getElementById("fillMsg").style.display = "none";
      }, 3000);
    } else if (!passwordRegex.test(pass)) {
      document.getElementById("fillMsg__").style.display = "block";
      setTimeout(function () {
        document.getElementById("fillMsg__").style.display = "none";
      }, 3000);
    } else {
      Axios.post(`http://localhost:57230/resetpassword/${USER_ID}/${TOKEN}`, {
        USER_ID: USER_ID,
        TOKEN: TOKEN,
        forgotPass: forgotPass,
      });
      document.getElementById("backToLogin_out").style.display = "block";
      document.getElementById("forgot_pass_").value = "";
      document.getElementById("forgot_passConfirm").value = "";
    }
  };
  return (
    <div>
      <div id="resetPasswordOut">
        <div id="resetPassMod_">
          <h1>Reset Password</h1>
          <p>
            The password should have atleast 8-16 characters with 1 Uppercase
            and 1 special character
          </p>
          <h4 id="fillMsg">Please fill out the empty field!</h4>{" "}
          <h4 id="fillMsg__">Please follow password conditions above</h4>
          <h4 id="fillMsg_">Password and Confirm password doesn't match!</h4>
          {/* <h4 id="fillMsg_1">Password and Confirm password doesn't match!</h4> */}
          <input
            type="password"
            id="forgot_pass_"
            placeholder="New Password"
            onChange={(e) => {
              setforgotPass(e.target.value);
            }}
          />
          <input
            type="password"
            id="forgot_passConfirm"
            placeholder="Confirm Password"
          />
          <button id="updatePassForgot" onClick={submitForgotPass}>
            Update Password
          </button>
          <Link to="/Login" id="backForgot_">
            Back to Login
          </Link>
        </div>
      </div>
      <div id="backToLogin_out">
        <div id="backToLogin_in">
          <h2>Message</h2>
          <i className="fa fa-check-circle" id="checkCircle"></i>
          <h1>Your password updated successfully!</h1>
          <Link to="/Login" id="backToLoginReset">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Resetpassword;
