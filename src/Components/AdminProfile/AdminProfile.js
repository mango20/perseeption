import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminProfile.css";
import { Link } from "react-router-dom";
function AdminProfile() {
  const [USER_ID, setUSER_ID] = useState("");
  const [ADMIN_INFO_PASSWORD, setADMIN_INFO_PASSWORD] = useState("");
  const [ADMIN_INFO_USERNAME, setADMIN_INFO_USERNAME] = useState("");
  const [ADMIN_INFO_CONTACT, setADMIN_INFO_CONTACT] = useState("");
  const [ADMIN_INFO_ADDRESS, setADMIN_INFO_ADDRESS] = useState("");
  const [ADMIN_INFO_NAME, setADMIN_INFO_NAME] = useState("");
  const [ADMIN_INFO_EMAIL, setADMIN_INFO_EMAIL] = useState("");

  const [ADMIN_INFO, setADMIN_INFO] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:57230/login").then((response) => {
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

  const [USERNAME_, setUSERNAME] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:57230/login").then((response) => {
      console.log(response.data.loggedIn);
      if (response.data.loggedIn === true) {
        setUSERNAME(response.data.user);
      } else {
        window.location = "/Login";
      }
    });
  }, []);

  const logout = () => {
    Axios.get("http://localhost:57230/logout").then((response) => {
      console.log(response.data);
      if (response.data.loggedIn === false) {
        alert("logout");
        window.location = "/Login";
      } else {
        alert("not logout");
      }
    });
  };

  const updateAdmin = (USER_ID) => {
    Axios.put("http://localhost:57230/api/updateAdminInfo_", {
      USER_ID: USER_ID,
      ADMIN_INFO_USERNAME: ADMIN_INFO_USERNAME,
      ADMIN_INFO_CONTACT: ADMIN_INFO_CONTACT,
      ADMIN_INFO_ADDRESS: ADMIN_INFO_ADDRESS,
      ADMIN_INFO_NAME: ADMIN_INFO_NAME,
      ADMIN_INFO_PASSWORD: ADMIN_INFO_PASSWORD,
      ADMIN_INFO_EMAIL: ADMIN_INFO_EMAIL,
    }).then((response) => {
      setADMIN_INFO(
        ADMIN_INFO.map((val) => {
          return val.USER_ID === USER_ID
            ? {
                USER_ID: val.USER_ID,
                ADMIN_INFO_USERNAME: ADMIN_INFO_USERNAME,
                ADMIN_INFO_CONTACT: ADMIN_INFO_CONTACT,
                ADMIN_INFO_ADDRESS: ADMIN_INFO_ADDRESS,
                ADMIN_INFO_NAME: ADMIN_INFO_NAME,
                ADMIN_INFO_PASSWORD: ADMIN_INFO_PASSWORD,
                ADMIN_INFO_EMAIL: ADMIN_INFO_EMAIL,
              }
            : val;
        })
      );
    });
  };
  return (
    <div className="adminProfile">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Profile</p>
        </div>
        <Link to="/AdminProfile" className="profileIcon">
          <img src="/images/events1.jpg" alt="img" className="profilePicture" />
          {USERNAME_.map((val, key) => {
            return (
              <p key={key} className="profileNameHeader">
                {val.USERNAME}
              </p>
            );
          })}
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
          <p className="logout_Admin" onClick={logout}>
            <i className="fa fa-sign-out" id="adminLogout"></i> Logout
          </p>
        </div>
        <div className="adminInfo">
          <div className="adminInfoBox">
            <div className="adminDummyImage">
              <i className="fa fa-user-circle-o " id="iconDummy"></i>
            </div>
            {USERNAME_.map((val, key) => {
              return (
                <div key={key} className="adminInfoTexts">
                  <p className="adminName">Name: {val.ADMIN_NAME}</p>
                  <p className="adminContact">Contact: {val.ADMIN_CONTACT}</p>
                  <p className="adminAddress">Address: {val.ADMIN_ADDRESS}</p>
                  <p className="adminEmail">Email Address: {val.ADMIN_EMAIL}</p>
                  <p className="adminPassword">Password: ************</p>
                </div>
              );
            })}
          </div>
          <button className="updateInfo" onClick={showUpdateProfile}>
            Update Information
          </button>
        </div>
        {USERNAME_.map((val, key) => {
          return (
            <div className="popupProfile" id="profileBg">
              <div className="popupProfileBox" id="popupProfileCont">
                <p className="updateYourInfoTitle">Update Your Information</p>
                <label className="profileName">Name:</label>
                <input
                  type="text"
                  placeholder={val.ADMIN_NAME}
                  defaultValue={val.ADMIN_NAME}
                  // contentEditable="true"
                  onChange={(e) => {
                    setADMIN_INFO_NAME(e.target.value);
                  }}
                ></input>
                <label className="profileContact">
                  Contact:{" "}
                  <input
                    type="text"
                    placeholder={val.ADMIN_CONTACT}
                    // defaultValue={val.ADMIN_CONTACT || ""}
                    onChange={(e) => {
                      setADMIN_INFO_CONTACT(e.target.value);
                    }}
                  ></input>
                </label>
                <label className="profileAddress">
                  Address:{" "}
                  <input
                    type="text"
                    placeholder={val.ADMIN_ADDRESS}
                    // defaultValue={val.ADMIN_ADDRESS || ""}
                    onChange={(e) => {
                      setADMIN_INFO_ADDRESS(e.target.value);
                    }}
                  ></input>
                </label>
                <label className="profileEmail">
                  Email:{" "}
                  <input
                    type="email"
                    placeholder={val.ADMIN_EMAIL}
                    // defaultValue={val.ADMIN_EMAIL || ""}
                    onChange={(e) => {
                      setADMIN_INFO_EMAIL(e.target.value);
                    }}
                  ></input>
                </label>
                <label className="profilePass">
                  Username:{" "}
                  <input
                    type="text"
                    placeholder={val.USERNAME}
                    // defaultValue={val.USERNAME || ""}
                    onChange={(e) => {
                      setADMIN_INFO_USERNAME(e.target.value);
                    }}
                  ></input>
                </label>
                <label className="profilePass">
                  Password:{" "}
                  <input
                    type="password"
                    placeholder="*******"
                    id="profPass"
                    onChange={(e) => {
                      setADMIN_INFO_PASSWORD(e.target.value);
                    }}
                  ></input>
                </label>
                <div className="btnProfile">
                  <p className="cancelBtnProfile" onClick={hideUpdateProfile}>
                    Cancel
                  </p>
                  <p
                    className="updateNowBtn"
                    onClick={() => {
                      updateAdmin(val.USER_ID);
                    }}
                  >
                    Update Now
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        Form
      </div>
    </div>
  );
}

export default AdminProfile;
