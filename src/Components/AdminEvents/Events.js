import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Events.css";
import { Link } from "react-router-dom";

function Events() {
  const [EVENT_TITLE, setEVENT_TITLE] = useState("");
  const [EVENT_CONTENT, setEVENT_CONTENT] = useState("");
  const [EVENT_LIST, setEVENT_LIST] = useState([]);
  const [NEW_EVENT_REVIEW, setNEW_EVENT_REVIEW] = useState("");
  const [NEW_EVENT_TITLE, setNEW_EVENT_TITLE] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  // const [userList, setuserList] = useState([]);
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3005/login").then((response) => {
      console.log(response.data.loggedIn);
      if (response.data.loggedIn === true) {
        setUSER_ID(response.data.user[0].USER_ID);
      } else {
        window.location = "/Login";
      }
    });
  }, []);
  // Render
  useEffect(() => {
    Axios.get("http://localhost:3005/api/getEvent").then((response) => {
      setEVENT_LIST(response.data);
    });
  }, []);

  // useEffect(() => {
  //   Axios.get("http://localhost:3005/api/getUser").then((response) => {
  //     setuserList(response.data);
  //   });
  // }, []);

  //Get User ID
  useEffect(() => {
    Axios.get("http://localhost:3005/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUSER_ID(response.data.user[0].USER_ID);
      }
    });
  }, []);

  // Create Announcement
  const createEvent = () => {
    const announcementTitleInput =
      document.getElementById("inputEventTitle").value;

    const announcementContentInput =
      document.getElementById("inputEventContent").value;

    if (announcementTitleInput === "" || announcementContentInput === "") {
      // if announcement is null
      // Timer
      let timerId = setInterval(
        () =>
          (document.getElementById("titleMessage").innerHTML =
            "Please fill out form completely!"),
        0
      );

      // Timeout
      setTimeout(() => {
        clearInterval(timerId);
        document.getElementById("titleMessage").innerHTML = "";
      }, 3000);
      return false;

      // Insert Announcement
    } else {
      Axios.post("http://localhost:3005/api/insertEvents", {
        EVENT_TITLE: EVENT_TITLE,
        EVENT_CONTENT: EVENT_CONTENT,
        USER_ID: USER_ID,
      });

      document.getElementById("messageEventPopUpouter").style.display = "block";
      document.getElementById("messageEvent_Content").style.display = "block";

      setTimeout(function () {
        document.getElementById("messageEventPopUpouter").style.display =
          "none";
        document.getElementById("messageEvent_Content").style.display = "none";
      }, 3000);
      // Making null value in input
      document.getElementById("inputEventTitle").value = "";
      document.getElementById("inputEventContent").value = "";
      setEVENT_TITLE("");
      setEVENT_CONTENT("");
      Axios.get("http://localhost:3005/api/getAdminEvent").then((response) => {
        setEVENT_LIST(response.data);
      });
    }
  };

  // Delete Announcement
  const deleteEvent = (EVENT_ID) => {
    Axios.delete(`http://localhost:3005/api/deleteEvent/${EVENT_ID}`).then(
      (response) => {
        console.log(response);
        setEVENT_LIST(
          EVENT_LIST.filter((val) => {
            return val.EVENT_ID !== EVENT_ID; // Filter/remove if it not equals to id
          })
        );
        Axios.get("http://localhost:3005/api/getEvent").then((response) => {
          setEVENT_LIST(response.data);
        });
      }
    );
  };

  // Update Title
  const updateEventTitle = (EVENT_ID) => {
    Axios.put("http://localhost:3005/api/updateEventTitle", {
      EVENT_ID: EVENT_ID,
      EVENT_TITLE: NEW_EVENT_TITLE,
    }).then((response) => {
      setEVENT_LIST(
        EVENT_LIST.map((val) => {
          return val.EVENT_ID === EVENT_ID
            ? {
                EVENT_ID: val.EVENT_ID,
                EVENT_TITLE: NEW_EVENT_TITLE,
              }
            : val;
        })
      );

      Axios.get("http://localhost:3005/api/getEvent").then((response) => {
        setEVENT_LIST(response.data);
      });
    });
  };

  // Update Content
  const updateEventContent = (EVENT_ID) => {
    Axios.put("http://localhost:3005/api/updateEventContent", {
      EVENT_ID: EVENT_ID,
      EVENT_CONTENT: NEW_EVENT_REVIEW,
    }).then((response) => {
      setEVENT_LIST(
        EVENT_LIST.map((val) => {
          return val.EVENT_ID === EVENT_ID
            ? {
                EVENT_ID: val.EVENT_ID,
                EVENT_CONTENT: NEW_EVENT_REVIEW,
              }
            : val;
        })
      );

      //   setNewReview("");
      //   document.getElementById("updateAnnouncementContentID").value = "";

      Axios.get("http://localhost:3005/api/getEvent").then((response) => {
        setEVENT_LIST(response.data);
      });
    });
  };

  return (
    <div className="EventsAdminBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Events</p>
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

        <div className="messageEventPopUpouter" id="messageEventPopUpouter">
          <div className="messageEvent_Content" id="messageEvent_Content">
            <h4 className="EventMsgTitle">Message</h4>
            {/* <i className="fa fa-times" id="announcementX"></i> */}
            <p className="EventMsg">Event Successfully Posted</p>
          </div>
        </div>

        <div className="form">
          <label className="eventAdminTitleTxt">Title </label>
          <input
            type="text"
            placeholder="Enter Title"
            id="inputEventTitle"
            className="inputeventTitle"
            onChange={(e) => setEVENT_TITLE(e.target.value)}
          />

          <label className="contentEventAdminTxt">Content</label>
          <textarea
            placeholder="Enter Content"
            id="inputEventContent"
            className="eventAdminContent"
            onChange={(e) => setEVENT_CONTENT(e.target.value)}
          />
          <div className="containerBtnAnnouncement">
            <input type="file" className="fileBtn" />
            <button onClick={createEvent} className="postEventBtn">
              Post Event
            </button>
          </div>
          <div id="titleMessage"></div>
        </div>
        <div className="container">
          {EVENT_LIST.map((val, key) => {
            return (
              <div key={key} className="eventAdminRender">
                <img
                  src="/images/events1.jpg"
                  alt="img"
                  className="eventAdImg"
                />
                <p className="eventAdmin_Title">{val.EVENT_TITLE}</p>
                <p className="eventAdmin_Date">{val.EVENT_DATE}</p>
                <p className="eventAdmin_Content">{val.EVENT_CONTENT}</p>

                <div>
                  <input
                    type="text"
                    className="updateEventTitle"
                    placeholder="Enter Title"
                    onChange={(e) => {
                      setNEW_EVENT_TITLE(e.target.value);
                    }}
                  />
                  <button
                    className="updateBtn"
                    onClick={() => {
                      updateEventTitle(val.EVENT_ID);
                    }}
                  >
                    Update
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    className="updateEventContent"
                    placeholder="Enter Updated Content"
                    onChange={(e) => {
                      setNEW_EVENT_REVIEW(e.target.value);
                    }}
                  />
                  <button
                    className="inpupdateEventContent"
                    onClick={() => {
                      updateEventContent(val.EVENT_ID);
                    }}
                  >
                    Update
                  </button>{" "}
                  <button
                    className="delAdminButton"
                    onClick={() => {
                      deleteEvent(val.EVENT_ID);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <h1>{loginStatus}</h1> */}
      </div>
    </div>
  );
}

export default Events;
