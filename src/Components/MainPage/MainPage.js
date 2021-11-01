import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MainPage.css";
import { Link, useHistory } from "react-router-dom";

// import cookieParser from "cookie-parser";

function MainPage() {
  const [MAIN_EVENT, setMAIN_EVENT] = useState([]);
  Axios.defaults.withCredentials = true;
  const [USER_ID, setUSER_ID] = useState("");
  const [USERNAME, setUSERNAME] = useState([]);
  Axios.defaults.withCredentials = true;
  // const [loginStatus, setLoginStatus] = useState(false);
  // useEffect(() => {
  //   Axios.get("http://localhost:57230/logout").then((response) => {
  //     console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       document.getElementById("loggedInImg").style.display = "none";
  //       document.getElementById("floatBtn").style.display = "block";
  //       document.getElementById("LoginHeader").style.display = "block";
  //     }
  //   });
  // }, []);

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:57230/login").then((response) => {
      Axios.defaults.withCredentials = true;
      console.log(response.data.loggedIn);
      console.log(response.data.user);
      if (response.data.loggedIn === true) {
        setUSER_ID(response.data.user[0].USER_ID);
        // setUSERNAME(response.data);
        document.getElementById("floatBtn").style.display = "none";
        document.getElementById("LoginHeader").style.display = "none";
        document.getElementById("loggedInImg").style.display = "block";
        // document.getElementById("loggedInImg").style.display = "none";
        // document.getElementById("dropdown-content").style.display = "block";
      }
      // else {
      //   document.getElementById("loggedInImg").style.display = "none";
      // }
    });
  }, []);

  // Render
  useEffect(() => {
    Axios.get("http://localhost:57230/api/getMainEvent").then((response) => {
      setMAIN_EVENT(response.data);
    });
  }, []);

  const popup = () => {
    if (document.getElementById("dropdown-content").style.display !== "block") {
      document.getElementById("dropdown-content").style.display = "block";
    } else {
      document.getElementById("dropdown-content").style.display = "none";
    }
  };

  // const logout = () => {
  //   Axios.get("http://localhost:57230/logout").then((response) => {
  //     // alert("sdf");
  //     window.location.reload();
  //     console.log(response.data);
  //   });
  //   localStorage.clear();
  //   document.getElementById("floatBtn").style.display = "block";
  //   document.getElementById("LoginHeader").style.display = "block";
  //   document.getElementById("loggedInImg").style.display = "none";
  //   document.getElementById("dropdown-content").style.display = "none";
  // };

  const history = useHistory();
  const logout = () => {
    Axios.get("http://localhost:57230/logout").then((response) => {
      console.log(response.data);
      if (response.data.loggedIn === false) {
        alert("logout");
        // window.location = "/Login";
        history.push("/Login");
      } else {
        alert("not logout");
      }
    });

    // document.getElementById("floatBtn").style.display = "block";
    // document.getElementById("LoginHeader").style.display = "block";
    // document.getElementById("loggedInImg").style.display = "none";
    // document.getElementById("dropdown-content").style.display = "none";
    // window.location.reload();
    // window.location = "/Login";
  };

  return (
    <>
      <div className="MainBg">
        <div className="MainHeader">
          <div className="imgContainer">
            <Link className="imgHeader" to="/">
              <img src="/images/logoIcon.png" alt="img" className="imgIcon" />
              <img src="/images/logotext.png" alt="img" className="imgtxt" />
            </Link>
          </div>
          <div className="headerText">
            <Link className="homeHeader" to="/">
              Home {USER_ID}
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
              <div>
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
                </div>
              </div>
            </div>
            <i className="fa fa-bars"></i>
          </div>
        </div>

        <div className="imageOrg">
          <div className="slideshow">
            <img src="/images/pavic.jpg" alt="img" className="orgImg" />
            <img src="/images/events1.jpg" alt="img" className="orgImg1" />
            <img src="/images/events2.jpg" alt="img" className="orgImg2" />
            <img src="/images/events1.jpg" alt="img" className="orgImg3" />
            <img src="/images/events2.jpg" alt="img" className="orgImg4" />
          </div>
        </div>
        <Link to="/Registration" className="floatBtn" id="floatBtn">
          <p className="JoinUs"> Join Us!</p>
        </Link>
        <h1 className="eventTitleHead">Perseeption Events</h1>
        <div className="mainEventList">
          {MAIN_EVENT.map((val, key) => {
            return (
              <div key={key} className="eventMain_List">
                <img src={val.EVENT_IMAGE} alt="img" className="eventImgMain" />
                <p className="eventTitleMain">{val.EVENT_TITLE}</p>
                <p className="eventDateMain">{val.EVENT_DATE}</p>
                <p className="eventContentMain">{val.EVENT_CONTENT}</p>
                <Link to="/MemberEvents" className="readMoreMain">
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <div className="footIcon">
            <img
              src="/images/logoIcon.png"
              alt="img"
              className="imgfooterIcon"
            />
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
              href="https://db.skidax.com/www.facebook.com/PAVIC.ph"
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
    </>
  );
}

export default MainPage;
