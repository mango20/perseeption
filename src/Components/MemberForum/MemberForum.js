import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberForum.css";
import { Link } from "react-router-dom";

function MemberForum() {
  const [FORUM_TITLE, setFORUM_TITLE] = useState("");
  const [FORUM_CONTENT, setFORUM_CONTENT] = useState("");
  const [FORUM_ID, setFORUM_ID] = useState("");
  const [FORUM_LIST, setFORUM_LIST] = useState([]);
  const [FORUM_LIST_TOP, setFORUM_LIST_TOP] = useState([]);
  const [FORUM_REPLY_CONTENT, setFORUM_REPLY_CONTENT] = useState("");
  const [FORUM_REPLY_LIST, setFORUM_REPLY_LIST] = useState([]);
  const [USER_ID, setUSER_ID] = useState("");
  Axios.defaults.withCredentials = true;

  // const [USER_ID, setUSER_ID] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3005/login").then((response) => {
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
    Axios.get("http://localhost:3005/logout").then((response) => {
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
  // useEffect(() => {
  //   Axios.get("http://localhost:3005/login").then((response) => {
  //     console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       setUSER_ID(response.data.user[0].USER_ID);
  //     } else {
  //       window.location = "/";
  //     }
  //   });
  // }, []);

  useEffect(() => {
    Axios.get("http://localhost:3005/api/getForumReply").then((response) => {
      setFORUM_REPLY_LIST(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3005/api/getForumTop").then((response) => {
      setFORUM_LIST_TOP(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3005/api/getForum").then((response) => {
      setFORUM_LIST(response.data);
    });
  }, []);

  const deletForumQuestion = (FORUM_ID) => {
    Axios.get("http://localhost:3005/login").then((response) => {
      console.log(response.data.loggedIn);
      if (response.data.loggedIn === true) {
        Axios.delete(
          `http://localhost:3005/api/deleteQuestion/${FORUM_ID}`
        ).then((response) => {
          console.log(response);
          setFORUM_LIST(
            FORUM_LIST.filter((val) => {
              return val.FORUM_ID !== FORUM_ID; // Filter/remove if it not equals to id
            })
          );

          Axios.get("http://localhost:3005/api/getForum").then((response) => {
            setFORUM_LIST(response.data);
          });
          window.location.reload();
        });
      } else {
        document.getElementById("floatYouNeedLoginBg").style.display = "block";
        document.getElementById("floatYouNeedContainer").style.display =
          "block";
      }
    });
  };

  const createForumReply = () => {
    Axios.get("http://localhost:3005/login").then((response) => {
      console.log(response.data.loggedIn);
      if (response.data.loggedIn === true) {
        setUSER_ID(response.data.user[0].USER_ID);
        // Insert Announcement
        Axios.post("http://localhost:3005/insertForumReply", {
          FORUM_REPLY_CONTENT: FORUM_REPLY_CONTENT,
          // FORUM_ID: FORUM_ID,
        });

        Axios.get("http://localhost:3005/api/getForumReply").then(
          (response) => {
            setFORUM_REPLY_LIST(response.data);
          }
        );

        Axios.get("http://localhost:3005/api/getForumTop").then((response) => {
          setFORUM_REPLY_LIST(response.data);
        });
      } else {
        document.getElementById("floatYouNeedLoginBg").style.display = "block";
        document.getElementById("floatYouNeedContainer").style.display =
          "block";
      }
    });
  };

  const createForum = () => {
    // Insert Announcement

    Axios.post("http://localhost:3005/insertForum", {
      FORUM_ID: FORUM_ID,
      FORUM_TITLE: FORUM_TITLE,
      FORUM_CONTENT: FORUM_CONTENT,
    });

    Axios.get("http://localhost:3005/api/getForum").then((response) => {
      setFORUM_LIST(response.data);
      console.log(response.data[0].FORUM_ID);
    });
    // setFORUM_TITLE(" sd");
    // document.getElementById("floatForumAskQuestionBg").style.display = "none";
    document.getElementById("floatForumAskQuestionBg").style.display = "none";
    document.getElementById("floatForumAskQuestion").style.display = "none";
    // window.location.reload();
    // var form = document.getElementById("inputAnnouncementTitle");
    // form.target.reset();
    // document.getElementById("inputForumContentQuestion").innerHTML = "";
  };

  const hidePopupForumAsk = () => {
    document.getElementById("floatForumAskQuestionBg").style.display = "none";
    document.getElementById("floatForumAskQuestion").style.display = "none";
  };

  const hidefloatLogin = () => {
    document.getElementById("floatYouNeedLoginBg").style.display = "none";
    document.getElementById("floatYouNeedContainer").style.display = "none";
  };

  const askPopup = () => {
    Axios.get("http://localhost:3005/login").then((response) => {
      console.log(response.data.loggedIn);
      if (response.data.loggedIn === true) {
        setUSER_ID(response.data.user[0].USER_ID);
        document.getElementById("floatForumAskQuestionBg").style.display =
          "block";
        document.getElementById("floatForumAskQuestion").style.display =
          "block";
      } else {
        document.getElementById("floatYouNeedLoginBg").style.display = "block";
        document.getElementById("floatYouNeedContainer").style.display =
          "block";
      }
    });
  };

  const clickInput = () => {
    Axios.get("http://localhost:3005/login").then((response) => {
      console.log(response.data.loggedIn);
      if (response.data.loggedIn === false) {
        document.getElementById("floatYouNeedLoginBg").style.display = "block";
        document.getElementById("floatYouNeedContainer").style.display =
          "block";
      }
    });
  };

  // useEffect(() => {
  //   Axios.get("http://localhost:3005/getForumReply").then((response) => {
  //     FORUM_REPLY_LIST(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   Axios.get("http://localhost:3005/getForum").then((response) => {
  //     FORUM_LIST(response.data);
  //   });
  // }, []);
  return (
    <div className="ForumBg">
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
      <div className="floatYouNeedLoginBg" id="floatYouNeedLoginBg">
        <div className="floatYouNeedContainer" id="floatYouNeedContainer">
          <p className="youNeedLoginAlertMsg">Perseeption Message</p>
          <p
            className="fa fa-times cancelLog"
            id="cancelLogin"
            onClick={hidefloatLogin}
          ></p>
          <p className="youNeedLoginAlertMsg_content">
            You must be logged in to ask a question on Perseeption
          </p>
          <div className="forumBtns">
            <Link to="/Login" className="loginBtnForum">
              Login
            </Link>
            <Link to="/Registration" className="signupBtnForum">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="floatForumAskQuestionBg" id="floatForumAskQuestionBg">
        <div className="floatForumAskQuestion" id="floatForumAskQuestion">
          <div className="postATitleQuestion">
            <p>Ask a Question</p>
          </div>
          <div className="inputForumField">
            <p className="titleAskQuestionPopUp">Title:</p>
            <input
              type="text"
              className="inputForumTitleQuestion"
              placeholder="Enter a Title"
              id="inputForumTitleQuestion"
              onChange={(e) => setFORUM_TITLE(e.target.value)}
            />
            <p className="contentAskQuestionPopUp">Content:</p>
            <textarea
              className="inputForumContentQuestion"
              placeholder="Enter a Content..."
              id="inputForumContentQuestion"
              onChange={(e) => setFORUM_CONTENT(e.target.value)}
            />
          </div>
          <div className="submitForumBtn">
            <p className="cancelPostForum" onClick={hidePopupForumAsk}>
              Cancel
            </p>
            <p className="submitForum" onClick={createForum}>
              Submit Question
            </p>
          </div>
        </div>
      </div>
      <div className="forumBody">
        <div className="navForum"></div>
        <div className="forumTitleList">
          <p className="mostRecentTitle">Most Recent</p>
          {FORUM_LIST_TOP.map((val, key) => {
            return (
              <p key={key} className="mostRecentPost">
                {val.FORUM_TITLE}
              </p>
            );
          })}
        </div>
        <div className="forumMainContent">
          <div className="upperForum">
            <p className="btnAskQuestion" onClick={askPopup}>
              Ask Question
            </p>
            <div className="searchFilterForum">
              <input
                type="text"
                className="inputSearchForum"
                placeholder="Search Title"
              />
            </div>
          </div>
          <div className="forumQuestionList">
            <div className="scrollForum">
              {FORUM_LIST.map((val, key) => {
                return (
                  <div key={key} className="questionBox">
                    <div className="forumQuestionHead">
                      <img
                        src="/images/events1.jpg"
                        alt="img"
                        className="iconForum"
                      />
                      <p className="iconForumName">Charmaine Manga</p>
                      <i
                        className="fa fa-trash"
                        id="bullets"
                        onClick={() => {
                          deletForumQuestion(val.FORUM_ID);
                        }}
                      ></i>
                    </div>
                    <div className="forumQuestionContent">
                      {/* <p className="titleQuestion">{val.FORUM_ID}</p> */}
                      <p className="titleQuestion">{val.FORUM_TITLE}</p>
                      <p className="contentQuestion">{val.FORUM_CONTENT}</p>
                    </div>
                    <div className="replyContainer">
                      {FORUM_REPLY_LIST.map((val, key) => {
                        return (
                          <div key={key} className="repliesList">
                            <p className="nameReply">
                              Mary Rose Trono: replied
                            </p>
                            {/* <p className="titleQuestion">{val.FORUM_ID}</p> */}
                            <p className="contentReply">
                              {val.FORUM_REPLY_CONTENT}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="replyBox">
                      <input
                        type="text"
                        className="replyInput"
                        placeholder="Write a comment..."
                        onClick={clickInput}
                        onChange={(e) => setFORUM_REPLY_CONTENT(e.target.value)}
                      />
                      <p className="sentBtn" onClick={createForumReply}>
                        Reply
                      </p>
                    </div>
                  </div>
                );
              })}
              {/* <hr /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="announcementTitleHead">Forum</h1>
      <div className="forumOuter">
        <div className="postForumCon">
          <div className="userForum">
            <img
              src="/images/events1.jpg"
              alt="forumIcon"
              className="forumIcon"
            />
            <p className="forumUsername">Bam Manga</p>
          </div>
          <textarea
            className="postForum"
            placeholder="Type something..."
          ></textarea>
          <button className="postBtn">Post</button>
        </div>
      </div>
      <div className="forumQuestionList">
        <div className="forumOuter">
          <div className="postForumCon1">
            <div className="userForum">
              <img
                src="/images/events2.jpg"
                alt="forumIcon"
                className="forumIcon"
              />
              <p className="forumUsername">Mary Rose Trono</p>
            </div>
            <div></div>
            <div className="contentForumList">
              <p>Thank you for creating this website :)</p>
            </div>
            <div></div>
            <div className="forumIcons">
              <input
                type="text"
                className="replyQuestions"
                placeholder="Write a comment"
              />
              <i className="fa fa-reply replyForum" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div> */}
      <Link to="/Registration" className="floatBtn1" id="floatBtn">
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

export default MemberForum;
