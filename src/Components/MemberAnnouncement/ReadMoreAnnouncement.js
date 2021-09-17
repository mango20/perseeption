import React from "react";
// import Axios from "axios";
import "./ReadMoreAnnouncement.css";
import { Link } from "react-router-dom";

function ReadMoreAnnouncement() {
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

      <h1 className="announcementTitleHead">Announcement</h1>
      <div className="ReadMoreAnnouncementOuter">
        <img src="/images/events1.jpg" alt="img" className="ReadMoreImg" />
        <p className="ReadMoreTitle">Terms Discussion</p>
        <p className="ReadMoreDate">2021-06-04</p>
        <p className="ReadMoreContent">
          I am writing to you to ask for an appointment. I would like to discuss
          with you some of the terms which are involved in the contract which
          you have recently offered our company. I hope that you can get back to
          me suggesting a schedule which is convenient for you. I wish that our
          contract can go ahead as planned. I look forward to your reply.
        </p>
      </div>
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

export default ReadMoreAnnouncement;
