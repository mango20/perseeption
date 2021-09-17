import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ContactUs.css";
import { Link } from "react-router-dom";

function ContactUs() {
  const [USER_ID, setUSER_ID] = useState("");
  const [contact_name, setcontact_name] = useState("");
  const [contact_number, setcontact_number] = useState("");
  const [contact_email, setcontact_email] = useState("");
  const [contact_message, setcontact_message] = useState("");
  // const [announcementContentList, setAnnouncementList] = useState([]);
  // const [newReview, setNewReview] = useState("");
  // const [newTitle, setNewTitle] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:3005/login").then((response) => {
  //     console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       setUSER_ID(response.data.user[0].USER_ID);
  //       document.getElementById("floatBtn").style.display = "none";
  //       document.getElementById("LoginHeader").style.display = "none";
  //       document.getElementById("loggedInImg").style.display = "block";
  //     }
  //   });
  // }, []);

  const popup = () => {
    if (document.getElementById("dropdown-content").style.display !== "block") {
      document.getElementById("dropdown-content").style.display = "block";
    } else {
      document.getElementById("dropdown-content").style.display = "none";
    }
  };

  const logout = () => {
    Axios.get("http://localhost:3005/logout").then((response) => {});
    localStorage.clear();
    document.getElementById("floatBtn").style.display = "block";
    document.getElementById("LoginHeader").style.display = "block";
    document.getElementById("loggedInImg").style.display = "none";
    document.getElementById("dropdown-content").style.display = "none";
    // window.location.reload();
  };

  const insertContactUsMsg = () => {
    const contactNameInput_err = document.getElementById("_contactUsName");
    const contactNameInput = document.getElementById("_contactUsName").value;
    const contactNumberInput =
      document.getElementById("_contactUsNumber").value;
    const contactEmailInput = document.getElementById("_contactUsEmail").value;
    const contactMessageInput =
      document.getElementById("_contactUsMessage").value;

    if (contactNameInput === "") {
      contactNameInput_err.style.borderColor = "red";
    } else {
      contactNameInput_err.style.borderColor = "green";
    }

    if (contactNumberInput === "") {
      const contactNumberInput_err =
        document.getElementById("_contactUsNumber");
      contactNumberInput_err.style.borderColor = "red";
    } else {
    }
    Axios.post("http://localhost:3005/insertContactUsMsg", {
      contact_name: contact_name,
      contact_number: contact_number,
      contact_email: contact_email,
      contact_message: contact_message,
      // USER_ID: USER_ID,
    });
  };

  return (
    <div>
      <div className="contactUsBg">
        <div className="MainHeader">
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
            <Link className="forumHeader" to="/MemberForum">
              Forum
            </Link>
            <Link className="aboutHeader" to="/MemberAbout">
              About
            </Link>
            <Link className="contactHeader" to="/ContactUs">
              Contact
            </Link>
            <Link className="signinHeader" id="LoginHeader" to="/Login">
              Log in
            </Link>
            <div className="memberDiv" id="memberDiv">
              <img
                src="/images/events1.jpg"
                alt="sdf"
                className="loggedInImg"
                id="loggedInImg"
                onClick={popup}
              />
              <div className="dropdown-content" id="dropdown-content">
                <Link to="/MemberProfile">Profile</Link>
                <p onClick={logout}>Logout</p>
                {/* <a href="#">Sign In other Account</a> */}
              </div>
            </div>
          </div>
        </div>
        <h1 className="eventTitle_Head">Contact Us</h1>
        <div className="containerContact">
          <div className="contactUsContent">
            <div className="contactUsForm">
              <p className="contactUsFormTitle">Get in touch</p>
              {/* <p className="contactUsFormSubtitle"></p> */}
              <input
                type="text"
                placeholder="Enter Full Name"
                className="contactUsName"
                id="_contactUsName"
                onChange={(e) => setcontact_name(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="contactUsContact"
                id="_contactUsNumber"
                onChange={(e) => setcontact_number(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="contactUsEmail"
                id="_contactUsEmail"
                onChange={(e) => setcontact_email(e.target.value)}
              />
              <textarea
                placeholder="Type your message here"
                className="contactUsMessage"
                onChange={(e) => setcontact_message(e.target.value)}
                id="_contactUsMessage"
              ></textarea>
              <p className="contactSubmit" onClick={insertContactUsMsg}>
                Submit
              </p>
            </div>
            <div className="map">
              <p className="contactTitleMap">Perseeption</p>
              <p className="emailContactAdd">
                Email Address: Perseeption@gmail.com
              </p>
              <p className="contactContactNum">Contact Number: 0927896541236</p>
              <iframe
                className="visualMap"
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6272222366365!2d121.04814191535186!3d14.620299280512077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7affe1a3917%3A0x9f31783e1f8885bf!2sResources%20for%20the%20Blind%20Inc.!5e0!3m2!1sen!2sph!4v1619932190147!5m2!1sen!2sph"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Link to="/Registration" className="floatBtn" id="floatBtn">
        <p className="JoinUs"> Join Us!</p>
      </Link>
      <div className="footer">
        <div className="footIcon">
          <img src="/images/logoIcon.png" alt="img" className="imgfooterIcon" />
        </div>
        <div className="locMain">
          <label className="mainInfoFooter">
            <p className="fa fa-map-marker"></p>Cubao Philippines
          </label>
          <label className="mainInfoFooter">
            <p className="fa fa-phone"></p>+63978965896
          </label>
          <label className="mainInfoFooter">
            <Link to="/TermsCondition" className="terms">
              <p className="fa fa-file"></p>
              Terms & Conditions
            </Link>
          </label>
        </div>
        <div className="fbLogo">
          <a
            href="https://www.facebook.com/PAVIC.ph"
            className="fa fa-facebook"
          >
            {}
          </a>
        </div>
      </div>
      <div className="copyrightText">
        <p className="copyright">Copyright © 2021 | Perseeption</p>
      </div>
    </div>
  );
}

export default ContactUs;
