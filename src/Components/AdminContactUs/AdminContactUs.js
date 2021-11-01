import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminContactUs.css";
// import React from "react";
import { Link } from "react-router-dom";

function AdminContactUs() {
  const [USER_ID, setUSER_ID] = useState("");
  const [contact_id, setcontact_id] = useState("");
  const [Subject, setSubject] = useState("");
  const [EmailContact, setEmailContact] = useState("");
  const [ContactUsMsg, setContactUsMsg] = useState("");
  const [contact_usList, setcontact_usList] = useState([]);
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

  useEffect(() => {
    Axios.get("http://localhost:57230/getContactUsMsg").then((response) => {
      setcontact_usList(response.data);
    });
  }, []);

  // Delete Announcement
  const deleteContactMessage = (contact_id) => {
    Axios.delete(
      `http://localhost:57230/deleteContactUsMsgt/${contact_id}`
    ).then((response) => {
      console.log(response);
      setcontact_usList(
        contact_usList.filter((val) => {
          return val.contact_id !== contact_id; // Filter/remove if it not equals to id
        })
      );
      Axios.get("http://localhost:57230/getContactUsMsg").then((response) => {
        setcontact_usList(response.data);
      });
    });
  };

  const showDetails = (contact_id) => {
    console.log(contact_id);
  };
  const replyBtn = (contact_id) => {
    document.getElementById("floatContactUsMessage_bg").style.display = "block";
    document.getElementById("floatContactUsMessage").style.display = "block";
    Axios.get(
      `http://localhost:57230/getAdminInformations_/${contact_id}`
    ).then((response) => {
      console.log(response);
      setcontact_usList(
        contact_usList.filter((val) => {
          return val.contact_id === contact_id;
        })
      );
    });
  };

  const sendEmail = (contact_id) => {
    const p = document.getElementById("email-id").value;
    Axios.get(`http://localhost:57230/getContactUsMsg/${contact_id}`).then(
      (response) => {
        const getEmail = response.data[0].contact_email;
        console.log(getEmail);
        Axios.post("http://localhost:57230/sendtoEmail", {
          EmailContact: p,
          Subject: Subject,
          ContactUsMsg: ContactUsMsg,
          // USER_ID: USER_ID,
        });
      }
    );
    document.getElementById("nameAdmin-id").value = "";
    // document.getElementById("email-id").value = "";
    document.getElementById("messagesText").value = "";
  };
  const hideReplyModal = () => {
    document.getElementById("nameAdmin-id").value = "";
    const p = (document.getElementById("email-id").value = "");
    console.log(p);
    document.getElementById("messagesText").value = "";
    document.getElementById("floatContactUsMessage_bg").style.display = "none";
    document.getElementById("floatContactUsMessage").style.display = "none";
    Axios.get("http://localhost:57230/getContactUsMsg").then((response) => {
      setcontact_usList(response.data);
    });
  };

  const filterInboxMessages = () => {
    var input,
      filter,
      table,
      tr,
      td,
      td1,
      td2,
      i,
      txtValue,
      txtValue1,
      txtValue2;
    input = document.getElementById("getFilterInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableContactUs");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      td1 = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[2];
      if (td || td1) {
        txtValue = td.textContent || td.innerText;
        txtValue1 = td1.textContent || td1.innerText;
        txtValue2 = td2.textContent || td2.innerText;
        if (
          txtValue.toUpperCase().indexOf(filter) > -1 ||
          txtValue1.toUpperCase().indexOf(filter) > -1 ||
          txtValue2.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
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

  return (
    <div className="AdminContactUsBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">inbox</p>
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
      <div className="adminContactUsCont">
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
          <p className="logout_Admin" onClick={logout}>
            <i className="fa fa-sign-out" id="adminLogout"></i> Logout
          </p>
        </div>

        <div className="inboxContent">
          <div className="input-wrapperContactUs">
            <input
              type="text"
              className="inputFilterContactUs"
              placeholder="Search"
              id="getFilterInput"
              onKeyUp={filterInboxMessages}
            />
          </div>

          <table className="inboxList" id="tableContactUs">
            <tbody className="inboxListBody">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                {/* <th>Date</th> */}
                <th>Message</th>
                <th>Reply</th>
                <th>Delete</th>
              </tr>
              {contact_usList.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>
                      <div className="messageComp">{val.contact_id}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_name}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_number}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_email}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_message}</div>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          replyBtn(val.contact_id);
                        }}
                      >
                        ✏️
                      </button>
                    </td>
                    <td>
                      <i
                        className="fa fa-trash deleteContactMessages"
                        onClick={() => {
                          deleteContactMessage(val.contact_id);
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {contact_usList.map((val, key) => {
            return (
              <div
                className="floatContactUsMessage_bg"
                id="floatContactUsMessage_bg"
                key={key}
              >
                <div
                  className="floatContactUsMessage"
                  id="floatContactUsMessage"
                >
                  <ul>
                    <li className="xBtn" onClick={hideReplyModal}>
                      x
                    </li>
                    <li className="replyTo">
                      <p>Name: {val.contact_name} </p>
                    </li>
                    <li className="replyTo">
                      <p>Reply to: {val.contact_email} </p>
                    </li>
                    <li className="replyTo">
                      <p>Contact Number: {val.contact_number} </p>
                    </li>
                    <li className="replyTomess">
                      <p>Message: {val.contact_message}</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        className="nameAdmin"
                        id="nameAdmin-id"
                        placeholder="Subject"
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="email"
                        id="email-id"
                        placeholder="Email"
                        readOnly={true}
                        value={val.contact_email}
                      />
                    </li>
                    <li>
                      <textarea
                        name=""
                        id="messagesText"
                        cols="30"
                        rows="10"
                        placeholder="Enter messages ..."
                        onChange={(e) => {
                          setContactUsMsg(e.target.value);
                        }}
                      ></textarea>
                    </li>
                    <li>
                      <button onClick={sendEmail}>Send</button>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminContactUs;
