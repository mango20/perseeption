import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminMemberList.css";
import { Link } from "react-router-dom";

function AdminMemberList() {
  const [MEMBER_PENDING_LIST, setMEMBER_PENDING_LIST] = useState([]);
  const [MEMBER_APPROVE_LIST, setMEMBER_APPROVE_LIST] = useState([]);
  const [NEW_REQUEST_TYPE] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
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
    Axios.get("http://localhost:3005/api/getUser").then((response) => {
      setMEMBER_PENDING_LIST(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3005/api/ApprovedMember").then((response) => {
      setMEMBER_APPROVE_LIST(response.data);
    });
  }, []);

  // Update Title
  const ApprovedMember = (USER_ID) => {
    alert("Admin Approve!");
    Axios.put("http://localhost:3005/api/approvePendingMember", {
      USER_ID: USER_ID,
      REQUEST_TYPE: NEW_REQUEST_TYPE,
    }).then((response) => {
      setMEMBER_PENDING_LIST(
        MEMBER_PENDING_LIST.map((val) => {
          return val.USER_ID === USER_ID
            ? {
                USER_ID: val.USER_ID,
                REQUEST_TYPE: NEW_REQUEST_TYPE,
              }
            : val;
        })
      );

      Axios.get("http://localhost:3005/api/getUpdatedMemberList").then(
        (response) => {
          setMEMBER_PENDING_LIST(response.data);

          Axios.get("http://localhost:3005/api/ApprovedMember").then(
            (response) => {
              setMEMBER_APPROVE_LIST(response.data);
            }
          );
        }
      );
    });
  };

  // Delete Pending Member
  const deletePendingMember = (USER_ID) => {
    alert("Admin Deleted!");
    Axios.delete(
      `http://localhost:3005/api/deleteMemberPending/${USER_ID}`
    ).then((response) => {
      console.log(response);
      setMEMBER_PENDING_LIST(
        MEMBER_PENDING_LIST.filter((val) => {
          return val.USER_ID !== USER_ID; // Filter/remove if it not equals to id
        })
      );
      Axios.get("http://localhost:3005/api/getUpdatedMemberList").then(
        (response) => {
          setMEMBER_PENDING_LIST(response.data);
        }
      );
    });
  };

  // Delete Pending Member
  const deleteApprovedMember = (USER_ID) => {
    alert("Admin Deleted!");
    Axios.delete(
      `http://localhost:3005/api/deleteMemberApprove/${USER_ID}`
    ).then((response) => {
      console.log(response);
      setMEMBER_APPROVE_LIST(
        MEMBER_APPROVE_LIST.filter((val) => {
          return val.USER_ID !== USER_ID; // Filter/remove if it not equals to id
        })
      );
      Axios.get("http://localhost:3005/api/getUpdatedApproveMemberList").then(
        (response) => {
          setMEMBER_APPROVE_LIST(response.data);
        }
      );
    });
  };

  const filterPendingMembers = () => {
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
    table = document.getElementById("tablePendingMemberList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      td1 = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[6];
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

  const filterApproveMembers = () => {
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
    input = document.getElementById("getFilterInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableApproveMemberList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      td1 = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[6];
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

  const hideApproveMemberList = () => {
    document.getElementById("editApproveMemberOuter").style.display = "none";
    document.getElementById("editApproveMemberContainer1").style.display =
      "none";
  };
  const editApproveMemberList = () => {
    document.getElementById("editApproveMemberOuter").style.display = "block";
    document.getElementById("editApproveMemberContainer1").style.display =
      "block";
  };
  return (
    <div className="adminMemberListBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Manage Members</p>
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
        {/* <Link to="/AdminAdminList">Admin List</Link> */}
        <div className="form1">
          <div className="dividerTitleFilter">
            <p className="pendingMemberList">Member List (Pending)</p>
            <div className="input-wrapper">
              <input
                type="text"
                className="inputFilter"
                placeholder="Find Information"
                id="getFilterInput"
                onKeyUp={filterPendingMembers}
              />
            </div>
          </div>
          <div className="outerTable">
            <table className=" table5" id="tablePendingMemberList">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Mother's Name</th>
                  <th>Father's Name</th>
                  <th>Father's Contact Number</th>
                  <th>Mother's Contact Number</th>
                  <th>Address</th>
                  <th>Registration Date</th>
                  <th>Membership Request</th>
                  <th>Approve</th>
                  <th>Delete Request</th>
                </tr>

                {MEMBER_PENDING_LIST.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.USER_ID}</td>
                      <td>{val.USERNAME}</td>
                      <td>{val.MOTHER_NAME}</td>
                      <td>{val.FATHER_NAME}</td>
                      <td>{val.FATHER_CONTACT}</td>
                      <td>{val.MOTHER_CONTACT}</td>
                      <td>{val.ADDRESS}</td>
                      <td>{val.REGISTRATION_DATE}</td>
                      <td>{val.USER_REQUEST}</td>
                      <td>
                        <button
                          onClick={() => {
                            ApprovedMember(val.USER_ID);
                          }}
                          className="approveBtn"
                        >
                          ✔
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deletePendingMember(val.USER_ID);
                          }}
                          className="deleteMemberRequest"
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="dividerTitleFilter2">
            <p className="approveMemberList">Member List (Approve)</p>
            <div className="input-wrapper2">
              <input
                type="text"
                className="inputFilter2"
                id="getFilterInput2"
                placeholder="Find Information"
                onKeyUp={filterApproveMembers}
              />
            </div>
          </div>
          <div className="outerTable1">
            <table className="table6" id="tableApproveMemberList">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Mother's Name</th>
                  <th>Father's Name</th>
                  <th>Father's Contact Number</th>
                  <th>Mother's Contact Number</th>
                  <th>Address</th>
                  <th>Registration Date</th>
                  <th>Membership Request</th>
                  <th>Edit Information</th>
                  <th>Delete Member</th>
                </tr>

                {MEMBER_APPROVE_LIST.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.USER_ID}</td>
                      <td>{val.USERNAME}</td>
                      <td>{val.MOTHER_NAME}</td>
                      <td>{val.FATHER_NAME}</td>
                      <td>{val.FATHER_CONTACT}</td>
                      <td>{val.MOTHER_CONTACT}</td>
                      <td>{val.ADDRESS}</td>
                      <td>{val.REGISTRATION_DATE}</td>
                      <td>{val.USER_REQUEST}</td>
                      <td>
                        <button
                          className="editMemberBtn"
                          id="editApproveMemberListBtn"
                          onClick={editApproveMemberList}
                        >
                          ✏️
                        </button>
                      </td>
                      <td>
                        <button
                          className="deleteMemberList"
                          onClick={() => {
                            deleteApprovedMember(val.USER_ID);
                          }}
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="addAdminNewMember">Add New Member</button>
        </div>
        <div className="editApproveMember" id="editApproveMemberOuter">
          <div
            className="editApproveMemberContainer"
            id="editApproveMemberContainer1"
          >
            <p className="editMemberApproveInfo">
              Edit Approve Member Information
            </p>
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
            <div className="editApproveMemberBtns">
              <p
                className="cancelApproveMember"
                onClick={hideApproveMemberList}
              >
                Cancel
              </p>
              <p className="confirmUpdateApproveMembers">Done Editing!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMemberList;
