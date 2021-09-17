import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminProfile.css";
import { Link } from "react-router-dom";
function AdminProfile() {
  const [USER_ID, setUSER_ID] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:3005/login").then((response) => {
  //     console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       setUSER_ID(response.data.user[0].USER_ID);
  //     } else {
  //       window.location = "/Login";
  //     }
  //   });
  // }, []);

  const hideUpdateProfile = () => {
    document.getElementById("popupProfileCont").style.display = "none";
    document.getElementById("profileBg").style.display = "none";
    // popupProfileBox; showUpdateProfile
  };

  const showUpdateProfile = () => {
    document.getElementById("popupProfileCont").style.display = "block";
    document.getElementById("profileBg").style.display = "block";
    // document.getElementById("profileBg").style.backgroundcolor = "red";
    // popupProfileBox; showUpdateProfile
  };
  return (
    <div className="adminProfile">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Profile</p>
        </div>
        <Link to="/AdminProfile" className="profileIcon">
          <img src="/images/events1.jpg" alt="img" className="profilePicture" />
          <p className="profileNameHeader">Charmaine</p>
        </Link>
      </div>
      <div className="eventCont">
        <div className="sidebar">
          <img src="/images/logoIcon.png" alt="img" className="imgAdIcon" />
          <img src="/images/logotext.png" alt="img" className="imgAdTxt" />
          <Link to="/AdminDashboard" className="dash">
            <i className="fa fa-bar-chart"></i>Dashboard
          </Link>
          <Link to="/AdminAdminList" className="dash">
            <i className="fa fa-list-ul"></i>Admin List
          </Link>
          <Link to="/AdminAnnouncement" className="dash">
            <i className="fa fa-bullhorn"></i>Announcement
          </Link>
          <Link to="/AdminContactUs" className="dash">
            <i className="fa fa-envelope"></i>Contact Us
          </Link>
          <Link to="/Events" className="dash">
            <i className="fa fa-calendar-o"></i>Event
          </Link>
          <Link to="/AdminMemberList" className="dash">
            <i className="fa fa-users"></i>Member List
          </Link>
          <Link to="/AdminProfile" className="dash">
            <i className="fa fa-user"></i>Profile
          </Link>
          <div className="line"></div>
          <Link to="/" className="logout_Admin">
            <i className="fa fa-sign-out"></i> Logout
          </Link>
        </div>
        <div className="adminInfo">
          <div className="adminInfoBox">
            <div className="adminDummyImage">
              <i className="fa fa-user-circle-o " id="iconDummy"></i>
            </div>
            <div className="adminInfoTexts">
              <p className="adminName">Name: Charmaine Lilan Manga</p>
              <p className="adminContact">Contact: 09123456789</p>
              <p className="adminAddress">Address: Jhocson Manila </p>
              <p className="adminEmail">Email Address: mangacq@pavic.com </p>
              <p className="adminPassword">Password: ************</p>
            </div>
          </div>
          <button className="updateInfo" onClick={showUpdateProfile}>
            Update Information
          </button>
        </div>
        <div className="popupProfile" id="profileBg">
          <div className="popupProfileBox" id="popupProfileCont">
            <p className="updateYourInfoTitle">Update Your Information</p>
            <label className="profileName">Name:</label>
            <input type="text"></input>
            <label className="profileContact">
              Contact: <input type="text"></input>
            </label>
            <label className="profileAddress">
              Address: <input type="text"></input>
            </label>
            <label className="profileEmail">
              Email: <input type="email"></input>
            </label>
            <label className="profilePass">
              Password: <input type="password"></input>
            </label>
            <div className="btnProfile">
              <p className="cancelBtnProfile" onClick={hideUpdateProfile}>
                Cancel
              </p>
              <p className="updateNowBtn">Update Now</p>
            </div>
          </div>
        </div>
        Form
      </div>
    </div>
  );
}

export default AdminProfile;
