import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Axios from "axios";
// import "./ReadMoreAnnouncement.css";
import { Link } from "react-router-dom";

function ReadMoreEvent() {
  const [EventInfo, setEventInfo] = useState([]);

  const [EVENT_LIST, setEVENT_LIST] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:57230/readMoreEvent`).then((response) => {
      console.log(response.data);
      setEVENT_LIST(response.data);
    });
  }, []);

  return (
    <div className="AnnouncementBg">
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
          <Link className="signinHeader" to="/Login">
            Log in
          </Link>
        </div>
      </div>

      <h1 className="announcementTitleHead">Event</h1>
      {EVENT_LIST.map((val, key) => {
        return (
          <div key={key} className="ReadMoreAnnouncementOuter">
            <img src="/images/events1.jpg" alt="img" className="ReadMoreImg" />

            <p className="ReadMoreTitle">{val.EVENT_ID}Internal Badminton</p>
            <p className="ReadMoreDate">2021-06-04</p>
            <p className="ReadMoreContent">
              We are pleased to invite all of you to join our 1st ever Internal
              Badminton Tournament 2019 organized by PerSEEption Committees on
              the coming Saturday, 20/04/2021 from 5 p.m. to 9 p.m. at Sport
              Arena Court. This tournament are held to build a closer
              relationship with internal staffs and gain confident on yourself.
              Let’s actively join this tournament to make this activity more fun
              and laughter with your participation!
            </p>
          </div>
        );
      })}
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

export default ReadMoreEvent;
