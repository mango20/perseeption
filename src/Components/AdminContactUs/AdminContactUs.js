import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminContactUs.css";
// import React from "react";
import { Link } from "react-router-dom";

function AdminContactUs() {
  const [USER_ID, setUSER_ID] = useState("");
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
  return (
    <div className="AdminContactUsBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">inbox</p>
        </div>
        <Link to="/AdminProfile" className="profileIcon">
          <img src="/images/events1.jpg" alt="img" className="profilePicture" />
          <p className="profileNameHeader">Charmaine</p>
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
          <Link to="/" className="logout_Admin">
            <i className="fa fa-sign-out"></i> Logout
          </Link>
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
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Date</th>
                <th>Message</th>
                {/* <th>Reply</th> */}
                <th>Delete</th>
              </tr>
              <tr>
                <td>Charmaine Lilan Manga</td>
                <td>09123456789</td>
                <td>mangacq@gmail.com</td>
                <td>2-20-2021</td>
                <td>Hanep ka</td>
                {/* <td>
                  <i className="fa fa-reply replyContactMessages"></i>
                </td> */}
                <td>
                  <i className="fa fa-trash deleteContactMessages"></i>
                </td>
              </tr>
              <tr>
                <td>Mary Rose Trono</td>
                <td>09123456789</td>
                <td>tronomt@gmail.com</td>
                <td>5-20-2021</td>
                <td>Hanep ka rin</td>
                {/* <td>
                  <i className="fa fa-reply replyContactMessages"></i>
                </td> */}
                <td>
                  <i className="fa fa-trash deleteContactMessages"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminContactUs;
