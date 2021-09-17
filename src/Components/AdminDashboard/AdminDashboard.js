import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";

function AdminDashboard() {
  const [NumCountReq, seNumCountReq] = useState([]);
  const [numCountApprove, setnumCountApprove] = useState([]);
  const [numCountApprove1, setnumCountApprove1] = useState([]);
  const [USER_ID, setUSER_ID] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:3005/login").then((response) => {
  //     console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       setUSER_ID(response.data.user[0].USER_ID);
  //       window.location = "/Dashboard";
  //     } else {
  //       window.location = "/Login";
  //     }
  //   });
  // }, []);

  const logout = () => {
    Axios.get("http://localhost:3005/logout").then((response) => {});
    localStorage.clear();
    // document.getElementById("floatBtn").style.display = "block";
    // document.getElementById("LoginHeader").style.display = "block";
    // document.getElementById("loggedInImg").style.display = "none";
    // document.getElementById("dropdown-content").style.display = "none";
    // window.location.reload();
    window.location = "/Login";
  };

  useEffect(() => {
    Axios.get("http://localhost:3005/api/countReqMember").then((response) => {
      seNumCountReq(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3005/api/countApproveMember").then(
      (response) => {
        setnumCountApprove(response.data);
      }
    );
  }, []);

  const state = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Member",

        backgroundColor: ["#ABDEE6"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [10, 59, 30, 40, 20, 80],
      },
    ],
  };

  const stateMember = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender",
        backgroundColor: ["rgb(255, 152, 67)", "rgb(0, 217, 255)"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0,
        data: [65, 79],
      },
    ],
  };

  return (
    <>
      <div className="adminDash">
        <div className="AdminHeader">
          <div className="imgAdminContainer">
            <p className="AdminHeaderTitle">Dashboard</p>
          </div>
          <Link to="/AdminProfile" className="profileIcon">
            <img
              src="/images/events1.jpg"
              alt="img"
              className="profilePicture"
            />
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
            <p className="logout_Admin" onClick={logout}>
              <i className="fa fa-sign-out" id="adminLogout"></i> Logout
            </p>
          </div>
          <div className="boxes">
            {NumCountReq.map((val, key) => {
              return (
                <Link to="/AdminMemberList" key={key} className="adminReqDiv">
                  <div className="numOfMem">
                    {/* <i className="fa fa-users"></i> */}
                    <p>Number of Member Request</p>
                    <p className="numTxt">{val.Mem}</p>
                  </div>
                </Link>
              );
            })}
            {numCountApprove.map((val, key) => {
              return (
                <Link to="/AdminMemberList" key={key} className="adminMemDiv">
                  <div className="numOfMemPavic">
                    <p>Member of PAVIC</p>
                    <p className="numTxt2">{val.Approve}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
            <div className="barCharts">
              <div className="barCont">
                <p className="memberStatsSub">Member Subscription</p>
                <hr />
                <Line
                  className="bar"
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
              <div className="bar2Cont">
                <p className="statsGender">Member Gender</p>
                <hr />
                <Doughnut
                  id="bar2"
                  data={stateMember}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
