import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AnnouncementAdmin.css";
import { Link } from "react-router-dom";

function Announcement1() {
  const [ANNOUNCEMENT_TITLE, setANNOUNCEMENT_TITLE] = useState("");
  const [content, setContent] = useState("");
  const [announcementContentList, setAnnouncementList] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  // const [userList, setuserList] = useState([]);
  Axios.defaults.withCredentials = true;
  // Render
  useEffect(() => {
    Axios.get("http://localhost:3005/api/getAnnouncement").then((response) => {
      setAnnouncementList(response.data);
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

  // Create Announcement1
  const createAnnouncement = () => {
    const announcementTitleInput = document.getElementById(
      "inputAnnouncementTitle"
    ).value;

    const announcementContentInput = document.getElementById(
      "inputAnnouncementContent"
    ).value;

    // if announcement is null
    if (announcementTitleInput === "" || announcementContentInput === "") {
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

      // Insert Announcement1
    } else {
      Axios.post("http://localhost:3005/api/insertAnnouncement", {
        ANNOUNCEMENT_TITLE: ANNOUNCEMENT_TITLE,
        ANNOUNCEMENT_CONTENT: content,
        USER_ID: USER_ID,
      });

      // Making null value in input
      document.getElementById("inputAnnouncementTitle").value = "";
      document.getElementById("inputAnnouncementContent").value = "";
      setANNOUNCEMENT_TITLE("");
      setContent("");
      Axios.get("http://localhost:3005/api/getAnnouncement").then(
        (response) => {
          setAnnouncementList(response.data);
        }
      );
    }
  };

  // Delete Announcement1
  const deleteAnnouncement = (ANNOUNCEMENT_ID) => {
    Axios.delete(`http://localhost:3005/api/delete/${ANNOUNCEMENT_ID}`).then(
      (response) => {
        console.log(response);
        setAnnouncementList(
          announcementContentList.filter((val) => {
            return val.ANNOUNCEMENT_ID !== ANNOUNCEMENT_ID;
          })
        );
        Axios.get("http://localhost:3005/api/getAnnouncement").then(
          (response) => {
            console.log(response);
            setAnnouncementList(response.data);
          }
        );
      }
    );
  };

  // Update Title
  const updateAnnouncementTitle = (ANNOUNCEMENT_ID) => {
    Axios.put("http://localhost:3005/api/updateTitle", {
      ANNOUNCEMENT_ID: ANNOUNCEMENT_ID,
      ANNOUNCEMENT_TITLE: newTitle,
    }).then((response) => {
      setAnnouncementList(
        announcementContentList.map((val) => {
          return val.ANNOUNCEMENT_ID === ANNOUNCEMENT_ID
            ? {
                ANNOUNCEMENT_ID: val.ANNOUNCEMENT_ID,
                ANNOUNCEMENT_TITLE: newTitle,
              }
            : val;
        })
      );

      Axios.get("http://localhost:3005/api/getAnnouncement").then(
        (response) => {
          setAnnouncementList(response.data);
        }
      );
    });
  };

  // Update Content
  const updateAnnouncementContent = (ANNOUNCEMENT_ID) => {
    Axios.put("http://localhost:3005/api/updateContent", {
      ANNOUNCEMENT_ID: ANNOUNCEMENT_ID,
      ANNOUNCEMENT_CONTENT: newReview,
    }).then((response) => {
      setAnnouncementList(
        announcementContentList.map((val) => {
          return val.ANNOUNCEMENT_ID === ANNOUNCEMENT_ID
            ? {
                ANNOUNCEMENT_ID: val.ANNOUNCEMENT_ID,
                ANNOUNCEMENT_CONTENT: newReview,
              }
            : val;
        })
      );

      //   setNewReview("");
      //   document.getElementById("updateAnnouncementContentID").value = "";

      Axios.get("http://localhost:3005/api/getAnnouncement").then(
        (response) => {
          setAnnouncementList(response.data);
        }
      );
    });
  };

  return (
    <div className="AnnouncementBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Announcement1</p>
        </div>
        <Link
          className="fa fa-sign-out logout"
          aria-hidden="true"
          to="/"
        ></Link>
      </div>
      <div className="eventCont">
        <div className="sidebar">
          <img src="/images/logoIcon.png" alt="img" className="imgAdIcon" />
          <img src="/images/logotext.png" alt="img" className="imgAdTxt" />
          <Link to="/AdminDashboard" className="dash">
            <i className="fa fa-bar-chart"></i>Dashboard
          </Link>
          <Link to="/AdminProfile" className="dash">
            <i className="fa fa-user"></i>Profile
          </Link>
          <Link to="/AdminMemberList" className="dash">
            <i className="fa fa-users"></i>Member List
          </Link>
          <Link to="/AdminAdminList" className="dash">
            <i className="fa fa-list-ul"></i>Admin List
          </Link>
          <Link to="/Events" className="dash">
            <i className="fa fa-calendar-o"></i>Event
          </Link>
          <Link to="/Announcement1" className="dash">
            <i className="fa fa-bullhorn"></i>Announcement1
          </Link>
        </div>

        <div className="form">
          <label className="AnnouncementAdminTitleTxt">Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            id="inputAnnouncementTitle"
            className="adminAnnouncement_title"
            onChange={(e) => setANNOUNCEMENT_TITLE(e.target.value)}
          />

          <p className="contentEventAdminTxt">Content</p>
          <textarea
            placeholder="Enter Content"
            id="inputAnnouncementContent"
            className="inputAdmincontent"
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="containerBtnAnnouncement">
            <input type="file" className="fileBtnAnnouncement" />
            <button onClick={createAnnouncement} className="postAnnounBtn">
              Post Event
            </button>
          </div>

          <div id="titleMessage"></div>
        </div>
        <div className="container">
          {announcementContentList.map((val, key) => {
            return (
              <div key={key} className="announcementRender">
                {/* <h1>{val.ANNOUNCEMENT_ID}</h1> */}
                <img
                  src="/images/events1.jpg"
                  alt="img"
                  className="eventAdImg"
                />
                <p className="announcementAdmin_Title">
                  {val.ANNOUNCEMENT_TITLE}
                </p>
                <p className="announcementAdmin_Date">
                  {val.ANNOUNCEMENT_DATE}
                </p>
                <p className="announcementAdmin_Content">
                  {val.ANNOUNCEMENT_CONTENT}
                </p>
                <div>
                  <input
                    type="text"
                    // id="updateAnnouncementTitleID"
                    className="updateAnnouncementTitle"
                    placeholder="Enter Title"
                    onChange={(e) => {
                      setNewTitle(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateAnnouncementTitle(val.ANNOUNCEMENT_ID);
                    }}
                  >
                    Update
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    // id="updateAnnouncementContentID"
                    className="updateAnnouncementContent"
                    placeholder="Enter Updated Content"
                    onChange={(e) => {
                      setNewReview(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateAnnouncementContent(val.ANNOUNCEMENT_ID);
                    }}
                  >
                    Update
                  </button>

                  <button
                    onClick={() => {
                      deleteAnnouncement(val.ANNOUNCEMENT_ID);
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

export default Announcement1;
