import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberAbout.css";
import { Link } from "react-router-dom";

function MemberAbout() {
  const [USER_ID, setUSER_ID] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:57230/login").then((response) => {
      console.log(response.data.loggedIn);
      if (response.data.loggedIn === true) {
        setUSER_ID(response.data.user[0].USER_ID);
        document.getElementById("floatBtn").style.display = "none";
        document.getElementById("LoginHeader").style.display = "none";
        document.getElementById("loggedInImg").style.display = "block";
      }
    });
  }, []);

  const popup = () => {
    if (document.getElementById("dropdown-content").style.display !== "block") {
      document.getElementById("dropdown-content").style.display = "block";
    } else {
      document.getElementById("dropdown-content").style.display = "none";
    }
  };

  const logout = () => {
    Axios.get("http://localhost:57230/logout").then((response) => {
      // alert("sdf");
      window.location.reload();
    });
    localStorage.clear();
    document.getElementById("floatBtn").style.display = "block";
    document.getElementById("LoginHeader").style.display = "block";
    document.getElementById("loggedInImg").style.display = "none";
    document.getElementById("dropdown-content").style.display = "none";
    // window.location.reload();
  };
  return (
    <div className="AboutBg">
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
      <div className="imageAboutUs">
        <img src="/images/aboutUs.jpg" alt="img" className="abtImg" />
        {/* <h1 className="aboutUs_Title">About Us</h1> */}
      </div>
      <div className="history">
        <p className="historyTitle">History</p>
        <p className="historyContent">PAVIC as Parents Organization.</p>
        <p className="historyContent">
          PAVIC was formed in 1999 with just a dozen of parents whose children
          are either blind, low vision and/or with additional disabilities. As
          of date, PAVIC parent membership is 700 nationwide, with majority in
          capital region.
        </p>
        <p className="historyContent">
          PAVIC was registered with Securities and Exchange Commission as a non
          stock non profit organization , and is accredited with Department of
          Social Welfare and Development, recognized by National Council on
          Disability Affairs as a Disabled People’s Organization ( DPO ).
        </p>
        <p className="historyContent">
          PAVIC is a partner with Department of Education in holding seminars
          for teachers and school administrators on handling children and youth
          with visual impairment. PAVIC works with various government
          Departments and other NGOs promoting general public awareness on well
          beings of Children with Disabilities.
        </p>
      </div>
      <div className="visionMission">
        <img src="/images/events1.jpg" alt="jpg" className="historyImg"></img>
        <div className="visionMissionContent">
          <h1 className="visionTitle">Vision</h1>
          <p className="visionContent">
            Every visually impaired child will enjoy equal opportunities and
            access in all activities in life according to choice and ability.
          </p>
          <h1 className="misionTitle">Mission</h1>
          <p className="misionContent">
            Every visually impaired child will enjoy equal opportunities and
            access in all activities in life according to choice and ability.
          </p>
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

export default MemberAbout;
