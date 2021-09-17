import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminList.css";
import { Link } from "react-router-dom";

function AdminAdminList() {
  const [ADMIN_LIST, setADMIN_LIST] = useState([]);
  const [USER_ID, setUSER_ID] = useState("");
  Axios.defaults.withCredentials = true;
  // Render

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

  useEffect(() => {
    Axios.get("http://localhost:3005/api/AdminList").then((response) => {
      setADMIN_LIST(response.data);
    });
  }, []);

  const showAddNewAdmin = () => {
    document.getElementById("adminNewBox").style.display = "block";
    document.getElementById("adminNewOuter").style.display = "block";
  };

  const hideAddNewAdmin = () => {
    document.getElementById("adminNewBox").style.display = "none";
    document.getElementById("adminNewOuter").style.display = "none";
  };

  const hideEditAdmin = () => {
    document.getElementById("formEditAdminOuter").style.display = "none";
    document.getElementById("editAdminBoxContainer").style.display = "none";
  };
  const showEditAdmin = () => {
    document.getElementById("formEditAdminOuter").style.display = "block";
    document.getElementById("editAdminBoxContainer").style.display = "block";
  };
  const filterAdminInfo = () => {
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
    input = document.getElementById("getFilterInput3");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableApprovedAdminList");
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
  // response.data.user[0].USER_ID
  return (
    <div className="AdminAdminListBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Manage Admin</p>
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
        <div className="formBox">
          <div className="dividerTitleFilterAdminList">
            <p className="textAdminList">Manage Admin</p>
            <div className="input-wrapperAdminList">
              <input
                type="text"
                className="inputFilterAdminList"
                placeholder="Search..."
                id="getFilterInput3"
                onKeyUp={filterAdminInfo}
              />
            </div>
          </div>
          <div className="outerTableAdminList">
            <table className=" tableAdminList" id="tableApprovedAdminList">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Address</th>
                  <th>Registration Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>

                {ADMIN_LIST.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.USER_ID}</td>
                      <td>{val.USERNAME}</td>
                      <td>{val.ADDRESS}</td>
                      <td>{val.REGISTRATION_DATE}</td>
                      <td>
                        <button
                          className="editAdminBtn"
                          onClick={showEditAdmin}
                        >
                          ✏️
                        </button>
                      </td>
                      <td>
                        <button className="deleteAdmin">🗑</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="addNewAdmin" onClick={showAddNewAdmin}>
            Add New Admin
          </button>
        </div>
        <div className="form2" id="adminNewOuter">
          <div className="AddNewAdminForm" id="adminNewBox">
            <p className="addAdminInfo">Add Admin Information</p>
            <label>Name:</label>
            <input type="text" />
            <label>Contact:</label>
            <input type="text" />
            <label>Address:</label>
            <input type="text" />
            <label>Email:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <div className="AdminListBtns">
              <p className="adminListCancelBtn" onClick={hideAddNewAdmin}>
                Cancel
              </p>
              <p className="AddAdminNow">You're In!</p>
            </div>
          </div>
        </div>

        <div className="formEditAdmin" id="formEditAdminOuter">
          <div className="editAdminBox" id="editAdminBoxContainer">
            <p className="editAdminInfo">Edit Admin Information</p>
            <label>Name:</label>
            <input type="text" />
            <label>Contact:</label>
            <input type="text" />
            <label>Address:</label>
            <input type="text" />
            <label>Email:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <div className="editAdminBtns">
              <p className="editAdminCancelBtn" onClick={hideEditAdmin}>
                Cancel
              </p>
              <p className="editAdminConfirm">Submit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAdminList;
