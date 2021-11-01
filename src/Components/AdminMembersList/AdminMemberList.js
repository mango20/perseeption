import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminMemberList.css";
import { Link } from "react-router-dom";

function AdminMemberList() {
  const [MEMBER_PENDING_LIST, setMEMBER_PENDING_LIST] = useState([]);
  const [MEMBER_APPROVE_LIST, setMEMBER_APPROVE_LIST] = useState([]);
  const [NEW_REQUEST_TYPE] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
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

  const [addMember_, setaddMember_] = useState({
    USERNAME: "",
    USER_PASSWORD: "",

    CHILD_SURNAME: "",
    CHILD_GIVEN_NAME: "",
    CHILD_MIDDLE_NAME: "",

    FATHER_SURNAME: "",
    FATHER_GIVEN_NAME: "",
    FATHER_MIDDLE_NAME: "",

    FATHER_CONTACT: "",
    FATHER_EMAIL: "",
    FATHER_BIRTHDAY: "",
    FATHER_OCCUPATION: "",

    MOTHER_SURNAME: "",
    MOTHER_GIVEN_NAME: "",
    MOTHER_MIDDLE_NAME: "",

    MOTHER_CONTACT: "",
    MOTHER_EMAIL: "",
    MOTHER_BIRTHDAY: "",
    MOTHER_OCCUPATION: "",

    GUARDIAN_SURNAME: "",
    GUARDIAN_GIVEN_NAME: "",
    GUARDIAN_MIDDLE_NAME: "",
    GUARDIAN_CONTACT: "",

    MOTHER_LANDLINE: "",
    FATHER_LANDLINE: "",

    FIRST_SIBLING: "",
    SECOND_SIBLING: "",
    THIRD_SIBLING: "",

    CITY_ADDRESS: "",
    REGION_ADDRESS: "",
    PROVINCE_ADDRESS: "",

    MONTHLY_INCOME: "",

    CHILD_BIRTHDAY: "",
    SEX: "",
    SCHOOL_NAME: "",
    SCHOOL_ADDRESS: "",
    YEAR_GRADE_LEVEL: "",
    CAUSE_OF_BLINDNESS: "",
    TOTALY_BLIND_EYES: "",
    TB_ADD_DISABILITY: "",
    LOW_VISION_EYES: "",
    LV_ADD_DISABILITY: "",
    ADAPTIVE_LENS: "",
    STYLUS: "",
    ARTIFICIAL_EYES: "",
    COMPUTER_SCREEN: "",
    WHITE_CANE: "",
    CCTV: "",
    WHEEL_CHAIR: "",
    LARGE_PRINTS: "",
    HEARING_AID: "",
    ABACUS: "",
    BRAILLER: "",
    PHYSICAL_THERAPHY: "",
    OCCUPATIONAL_THERAPHY: "",
    SPEECH_THERAPHY: "",
    OTHER_CONDITION: "",

    file: [],
    filepreview: null,
  });

  const UploadWithGCash = (event) => {
    setaddMember_({
      ...addMember_,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const UploadWithGCashSex = (event) => {
    setaddMember_({
      ...addMember_,
      SEX: event.target.value,
    });
  };

  const UploadWithGCashtbE = (event) => {
    setaddMember_({
      ...addMember_,
      TOTALY_BLIND_EYES: event.target.value,
    });
  };

  const UploadWithGCashLV = (event) => {
    setaddMember_({
      ...addMember_,
      LOW_VISION_EYES: event.target.value,
    });
  };

  const UploadWithGCashAL = (event) => {
    setaddMember_({
      ...addMember_,
      ADAPTIVE_LENS: event.target.value,
    });
  };

  const UploadWithGCashS = (event) => {
    setaddMember_({
      ...addMember_,
      STYLUS: event.target.value,
    });
  };

  const UploadWithGCashAE = (event) => {
    setaddMember_({
      ...addMember_,
      ARTIFICIAL_EYES: event.target.value,
    });
  };

  const UploadWithGCashCS = (event) => {
    setaddMember_({
      ...addMember_,
      COMPUTER_SCREEN: event.target.value,
    });
  };

  const UploadWithGCashWCa = (event) => {
    setaddMember_({
      ...addMember_,
      WHITE_CANE: event.target.value,
    });
  };

  const UploadWithGCashCC = (event) => {
    setaddMember_({
      ...addMember_,
      CCTV: event.target.value,
    });
  };

  const UploadWithGCashWC = (event) => {
    setaddMember_({
      ...addMember_,
      WHEEL_CHAIR: event.target.value,
    });
  };

  const UploadWithGCashLP = (event) => {
    setaddMember_({
      ...addMember_,
      LARGE_PRINTS: event.target.value,
    });
  };

  const UploadWithGCashHA = (event) => {
    setaddMember_({
      ...addMember_,
      HEARING_AID: event.target.value,
    });
  };

  const UploadWithGCashA = (event) => {
    setaddMember_({
      ...addMember_,
      ABACUS: event.target.value,
    });
  };

  const UploadWithGCashB = (event) => {
    setaddMember_({
      ...addMember_,
      BRAILLER: event.target.value,
    });
  };

  const UploadWithGCashPT = (event) => {
    setaddMember_({
      ...addMember_,
      PHYSICAL_THERAPHY: event.target.value,
    });
  };

  const UploadWithGCashOT = (event) => {
    setaddMember_({
      ...addMember_,
      OCCUPATIONAL_THERAPHY: event.target.value,
    });
  };

  const UploadWithGCashST = (event) => {
    setaddMember_({
      ...addMember_,
      SPEECH_THERAPHY: event.target.value,
    });
  };
  const UploadWithGCashMT = (event) => {
    setaddMember_({
      ...addMember_,
      MONTHLY_INCOME: event.target.value,
    });
  };

  const addMember_form_ = (event) => {
    setaddMember_({
      ...addMember_,
      USERNAME: document.getElementById("addM_username").value,
      USER_PASSWORD: document.getElementById("addM_pass").value,

      // CHILD
      CHILD_SURNAME: document.getElementById("addM_childSurname").value,
      CHILD_GIVEN_NAME: document.getElementById("addM_childName").value,
      CHILD_MIDDLE_NAME: document.getElementById("addM_childMiddleName").value,

      // FATHER
      FATHER_SURNAME: document.getElementById("addM_fatherSurname").value,
      FATHER_GIVEN_NAME: document.getElementById("addM_fatherName").value,
      FATHER_MIDDLE_NAME: document.getElementById("addM_fatherMiddleName")
        .value,

      FATHER_LANDLINE: document.getElementById("addM_fatherLandline").value,
      FATHER_CONTACT: document.getElementById("addM_fatherContact").value,
      FATHER_EMAIL: document.getElementById("addM_fatherEmail").value,
      FATHER_BIRTHDAY: document.getElementById("addM_fatherBday").value,
      FATHER_OCCUPATION: document.getElementById("addM_fatherOccupation").value,

      // MOTHER
      MOTHER_SURNAME: document.getElementById("addM_motherSurname").value,
      MOTHER_GIVEN_NAME: document.getElementById("addM_motherName").value,
      MOTHER_MIDDLE_NAME: document.getElementById("addM_motherMiddleName")
        .value,

      MOTHER_LANDLINE: document.getElementById("addM_motherLandline").value,
      MOTHER_CONTACT: document.getElementById("addM_motherContactNumber").value,
      MOTHER_EMAIL: document.getElementById("addM_motherEmail").value,
      MOTHER_BIRTHDAY: document.getElementById("addM_motherBday").value,
      MOTHER_OCCUPATION: document.getElementById("addM_motherOccupation").value,

      // GUARDIAN
      GUARDIAN_SURNAME: document.getElementById("addM_guardianSurname").value,
      GUARDIAN_GIVEN_NAME: document.getElementById("addM_guardianName").value,
      GUARDIAN_MIDDLE_NAME: document.getElementById("addM_guardianMiddleName")
        .value,

      GUARDIAN_CONTACT: document.getElementById("addM_guardianContactNumber")
        .value,

      // SIBLING
      FIRST_SIBLING: document.getElementById("addM_siblingName1").value,
      SECOND_SIBLING: document.getElementById("addM_siblingName2").value,
      THIRD_SIBLING: document.getElementById("addM_siblingName3").value,

      // ADDRESS
      CITY_ADDRESS: document.getElementById("addM_address").value,
      REGION_ADDRESS: document.getElementById("addM_region").value,
      PROVINCE_ADDRESS: document.getElementById("addM_province").value,

      // CHILDS DATA
      CHILD_BIRTHDAY: document.getElementById("addM_cBday").value,

      SCHOOL_NAME: document.getElementById("addM_cSchool").value,
      SCHOOL_ADDRESS: document.getElementById("addM_cSAddress").value,
      YEAR_GRADE_LEVEL: document.getElementById("addM_cYear").value,

      CAUSE_OF_BLINDNESS: document.getElementById("addM_cCOB").value,

      // TOTALY_BLIND_EYES: event.target.value,
      TB_ADD_DISABILITY: document.getElementById("addM_cTBAD").value,

      // LOW_VISION_EYES: event.target.value,
      LV_ADD_DISABILITY: document.getElementById("addM_cLVAD").value,

      // ADAPTIVE_LENS: event.target.value,
      // STYLUS: event.target.value,
      // ARTIFICIAL_EYES: event.target.value,
      // COMPUTER_SCREEN: event.target.value,
      // WHITE_CANE: event.target.value,
      // CCTV: event.target.value,
      // WHEEL_CHAIR: event.target.value,
      // LARGE_PRINTS: event.target.value,
      // HEARING_AID: event.target.value,
      // ABACUS: event.target.value,
      // BRAILLER: event.target.value,

      // PHYSICAL_THERAPHY: event.target.value,
      // OCCUPATIONAL_THERAPHY: event.target.value,
      // SPEECH_THERAPHY: event.target.value,

      OTHER_CONDITION: document.getElementById("addM_OCN").value,
    });
  };

  const addMember_submit = async () => {
    const formData_ = new FormData();
    formData_.append("image", addMember_.file);
    console.log(addMember_.file);
    formData_.append("USERNAME", addMember_.USERNAME);
    formData_.append("USER_PASSWORD", addMember_.USER_PASSWORD);

    formData_.append("CHILD_SURNAME", addMember_.CHILD_SURNAME);
    formData_.append("CHILD_GIVEN_NAME", addMember_.CHILD_GIVEN_NAME);
    formData_.append("CHILD_MIDDLE_NAME", addMember_.CHILD_MIDDLE_NAME);

    formData_.append("FATHER_SURNAME", addMember_.FATHER_SURNAME);
    formData_.append("FATHER_GIVEN_NAME", addMember_.FATHER_GIVEN_NAME);
    formData_.append("FATHER_MIDDLE_NAME", addMember_.FATHER_MIDDLE_NAME);

    formData_.append("FATHER_LANDLINE", addMember_.FATHER_LANDLINE);
    formData_.append("FATHER_CONTACT", addMember_.FATHER_CONTACT);
    formData_.append("FATHER_EMAIL", addMember_.FATHER_EMAIL);
    formData_.append("FATHER_BIRTHDAY", addMember_.FATHER_BIRTHDAY);
    formData_.append("FATHER_OCCUPATION", addMember_.FATHER_OCCUPATION);

    formData_.append("MOTHER_SURNAME", addMember_.MOTHER_SURNAME);
    formData_.append("MOTHER_GIVEN_NAME", addMember_.MOTHER_GIVEN_NAME);
    formData_.append("MOTHER_MIDDLE_NAME", addMember_.MOTHER_MIDDLE_NAME);

    formData_.append("MOTHER_CONTACT", addMember_.MOTHER_CONTACT);
    formData_.append("MOTHER_LANDLINE", addMember_.MOTHER_LANDLINE);
    formData_.append("MOTHER_EMAIL", addMember_.MOTHER_EMAIL);
    formData_.append("MOTHER_BIRTHDAY", addMember_.MOTHER_BIRTHDAY);
    formData_.append("MOTHER_OCCUPATION", addMember_.MOTHER_OCCUPATION);

    formData_.append("GUARDIAN_SURNAME", addMember_.GUARDIAN_SURNAME);
    formData_.append("GUARDIAN_GIVEN_NAME", addMember_.GUARDIAN_GIVEN_NAME);
    formData_.append("GUARDIAN_MIDDLE_NAME", addMember_.GUARDIAN_MIDDLE_NAME);
    formData_.append("GUARDIAN_CONTACT", addMember_.GUARDIAN_CONTACT);

    formData_.append("FIRST_SIBLING", addMember_.FIRST_SIBLING);
    formData_.append("SECOND_SIBLING", addMember_.SECOND_SIBLING);
    formData_.append("THIRD_SIBLING", addMember_.THIRD_SIBLING);

    formData_.append("CITY_ADDRESS", addMember_.CITY_ADDRESS);
    formData_.append("REGION_ADDRESS", addMember_.REGION_ADDRESS);
    formData_.append("PROVINCE_ADDRESS", addMember_.PROVINCE_ADDRESS);

    formData_.append("MONTHLY_INCOME", addMember_.MONTHLY_INCOME);

    formData_.append("CHILD_BIRTHDAY", addMember_.CHILD_BIRTHDAY);
    formData_.append("SEX", addMember_.SEX);
    formData_.append("SCHOOL_NAME", addMember_.SCHOOL_NAME);
    formData_.append("SCHOOL_ADDRESS", addMember_.SCHOOL_ADDRESS);
    formData_.append("YEAR_GRADE_LEVEL", addMember_.YEAR_GRADE_LEVEL);
    formData_.append("CAUSE_OF_BLINDNESS", addMember_.CAUSE_OF_BLINDNESS);
    formData_.append("TOTALY_BLIND_EYES", addMember_.TOTALY_BLIND_EYES);
    formData_.append("TB_ADD_DISABILITY", addMember_.TB_ADD_DISABILITY);
    formData_.append("LOW_VISION_EYES", addMember_.LOW_VISION_EYES);
    formData_.append("LV_ADD_DISABILITY", addMember_.LV_ADD_DISABILITY);
    formData_.append("ADAPTIVE_LENS", addMember_.ADAPTIVE_LENS);
    formData_.append("STYLUS", addMember_.STYLUS);
    formData_.append("ARTIFICIAL_EYES", addMember_.ARTIFICIAL_EYES);
    formData_.append("COMPUTER_SCREEN", addMember_.COMPUTER_SCREEN);
    formData_.append("WHITE_CANE", addMember_.WHITE_CANE);
    formData_.append("CCTV", addMember_.CCTV);
    formData_.append("WHEEL_CHAIR", addMember_.WHEEL_CHAIR);
    formData_.append("LARGE_PRINTS", addMember_.LARGE_PRINTS);
    formData_.append("HEARING_AID", addMember_.HEARING_AID);
    formData_.append("ABACUS", addMember_.ABACUS);
    formData_.append("BRAILLER", addMember_.BRAILLER);
    formData_.append("PHYSICAL_THERAPHY", addMember_.PHYSICAL_THERAPHY);
    formData_.append("OCCUPATIONAL_THERAPHY", addMember_.OCCUPATIONAL_THERAPHY);
    formData_.append("SPEECH_THERAPHY", addMember_.SPEECH_THERAPHY);
    formData_.append("OTHER_CONDITION", addMember_.OTHER_CONDITION);

    console.log(addMember_.USERNAME);
    console.log(addMember_.USERNAME);

    console.log(addMember_.CHILD_SURNAME);
    console.log(addMember_.CHILD_GIVEN_NAME);
    console.log(addMember_.CHILD_MIDDLE_NAME);

    console.log(addMember_.FATHER_SURNAME);
    console.log(addMember_.FATHER_GIVEN_NAME);
    console.log(addMember_.FATHER_MIDDLE_NAME);

    console.log(addMember_.FATHER_CONTACT);
    console.log(addMember_.FATHER_EMAIL);
    console.log(addMember_.FATHER_BIRTHDAY);
    console.log(addMember_.FATHER_OCCUPATION);

    console.log(addMember_.MOTHER_SURNAME);
    console.log(addMember_.MOTHER_GIVEN_NAME);
    console.log(addMember_.MOTHER_MIDDLE_NAME);

    console.log(addMember_.MOTHER_CONTACT);
    console.log(addMember_.MOTHER_EMAIL);
    console.log(addMember_.MOTHER_BIRTHDAY);
    console.log(addMember_.MOTHER_OCCUPATION);

    console.log(addMember_.MONTHLY_INCOME);

    // formData_.append("content", addMember_.content);

    Axios.post("http://localhost:57230/uploadGCash", formData_, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

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
  // Render
  useEffect(() => {
    Axios.get("http://localhost:57230/api/getUser").then((response) => {
      setMEMBER_PENDING_LIST(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:57230/api/ApprovedMember").then((response) => {
      setMEMBER_APPROVE_LIST(response.data);
    });
  }, []);

  // Update Title
  const ApprovedMember = (USER_ID) => {
    alert("Admin Approve!");
    Axios.put("http://localhost:57230/api/approvePendingMember", {
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

      Axios.get("http://localhost:57230/api/getUpdatedMemberList").then(
        (response) => {
          setMEMBER_PENDING_LIST(response.data);

          Axios.get("http://localhost:57230/api/ApprovedMember").then(
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
      `http://localhost:57230/api/deleteMemberPending/${USER_ID}`
    ).then((response) => {
      console.log(response);
      setMEMBER_PENDING_LIST(
        MEMBER_PENDING_LIST.filter((val) => {
          return val.USER_ID !== USER_ID; // Filter/remove if it not equals to id
        })
      );
      Axios.get("http://localhost:57230/api/getUpdatedMemberList").then(
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
      `http://localhost:57230/api/deleteMemberApprove/${USER_ID}`
    ).then((response) => {
      console.log(response);
      setMEMBER_APPROVE_LIST(
        MEMBER_APPROVE_LIST.filter((val) => {
          return val.USER_ID !== USER_ID; // Filter/remove if it not equals to id
        })
      );
      Axios.get("http://localhost:57230/api/getUpdatedApproveMemberList").then(
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

  const addNewMember = () => {
    document.getElementById("editApproveMember__").style.display = "block";
    // document.getElementById("editApproveMemberContainer1").style.display =
    //   "block";
  };
  return (
    <div className="adminMemberListBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Manage Members</p>
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
          <p className="logout_Admin" onClick={logout}>
            <i className="fa fa-sign-out" id="adminLogout"></i> Logout
          </p>
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
          <button className="addAdminNewMember" onClick={addNewMember}>
            Add New Member
          </button>
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
        <div className="outerAddNewMember_" id="outerAddNewMember_">
          <div className="innerAddNewMember_" id="innerAddNewMember_">
            <p className="editMemberApproveInfo">Add Member</p>
            <div className="form_addMember">
              <h2>Create Account</h2>
              <p>(Gumawa ng account)</p>
              <input
                type="text"
                placeholder="Username"
                id="addM_username"
                onChange={addMember_form_}
              />
              <input
                type="password"
                placeholder="Password"
                id="addM_pass"
                onChange={addMember_form_}
              />
              <h2>Child & Family Personal Data</h2>
              <p>(Personal na Datos ng Bata at ng Pamilya)</p>
              <input
                type="text"
                id="addM_childSurname"
                placeholder="Child's Surname"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Child's Name"
                id="addM_childName"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Child's Middlename"
                id="addM_childMiddleName"
                onChange={addMember_form_}
              />
              <h3>Father's Information</h3>
              <input
                type="text"
                placeholder="Father's Surname"
                id="addM_fatherSurname"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Father's Name"
                id="addM_fatherName"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Father's Middlename"
                id="addM_fatherMiddleName"
                onChange={addMember_form_}
              />
              <input
                type="tel"
                placeholder="Father's Contact Number"
                id="addM_fatherContact"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Father's Landline Number"
                id="addM_fatherLandline"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Father's Email"
                id="addM_fatherEmail"
                onChange={addMember_form_}
              />
              <p>Father's Birthday:</p>
              <input
                type="date"
                id="addM_fatherBday"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Father's Occupation"
                id="addM_fatherOccupation"
                onChange={addMember_form_}
              />
              <h3>Mother's Information</h3>
              <input
                type="text"
                placeholder="Mother's Surname"
                id="addM_motherSurname"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Mother's Name"
                id="addM_motherName"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Mother's Middlename"
                id="addM_motherMiddleName"
                onChange={addMember_form_}
              />
              <input
                type="tel"
                placeholder="Mother's Contact Number"
                id="addM_motherContactNumber"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Mother's Landline Number"
                id="addM_motherLandline"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Mother's Email"
                id="addM_motherEmail"
                onChange={addMember_form_}
              />
              <p>Mother's Birthday:</p>
              <input
                type="date"
                id="addM_motherBday"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Mother's Occupation"
                id="addM_motherOccupation"
                onChange={addMember_form_}
              />
              <h3>Guardians's Information</h3>
              <input
                type="text"
                placeholder="Guardians's Surname"
                id="addM_guardianSurname"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Guardians's Name"
                id="addM_guardianName"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Guardians's Middlename"
                id="addM_guardianMiddleName"
                onChange={addMember_form_}
              />
              <input
                type="tel"
                placeholder="Guardians's Contact Number"
                id="addM_guardianContactNumber"
                onChange={addMember_form_}
              />
              <h3>Siblings</h3>
              <input
                type="text"
                placeholder="Sibling Name"
                id="addM_siblingName1"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Sibling Name"
                id="addM_siblingName2"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Sibling Name"
                id="addM_siblingName3"
                onChange={addMember_form_}
              />
              <h3>Address</h3>
              <input
                type="text"
                placeholder="City Address"
                id="addM_address"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Region"
                id="addM_region"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Province Address"
                id="addM_province"
                onChange={addMember_form_}
              />
              <h3>Combined Monthly Income of Father and Mother</h3>
              <div className="addMemberRadio">
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="MONTHLY_INCOME"
                      className="below12_"
                      value="Below Ph12,000"
                      id="addM_b13"
                      onChange={UploadWithGCashMT}
                      // onChange={(e) => {
                      //   setMONTHLY_INCOME(e.target.value);
                      // }}
                    />
                    <label className="monthly_Income_1">Below Ph12,000</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="thirty_"
                      name="MONTHLY_INCOME"
                      value="Ph12,000-30,000"
                      id="addM_12_30"
                      onChange={UploadWithGCashMT}
                      // onChange={(e) => {
                      //   setMONTHLY_INCOME(e.target.value);
                      // }}
                    />
                    <label className="monthly_Income_">Ph12,000-30,000</label>{" "}
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="MONTHLY_INCOME"
                      className="fifty_"
                      value="Ph30,000-50,000"
                      id="addM_30_50"
                      onChange={UploadWithGCashMT}
                      // onChange={(e) => {
                      //   setMONTHLY_INCOME(e.target.value);
                      // }}
                    />
                    <label className="monthly_Income_">Ph30,000-50,000</label>
                  </li>
                  <li>
                    {" "}
                    <input
                      type="radio"
                      name="MONTHLY_INCOME"
                      className="above_"
                      value="Above Ph50,000"
                      id="addM_a50"
                      onChange={UploadWithGCashMT}
                      // onChange={(e) => {
                      //   setMONTHLY_INCOME(e.target.value);
                      // }}
                    />
                    <label className="monthly_Income_">Above Ph50,000</label>
                  </li>
                </ul>
              </div>
              <h3>Child's Data</h3>
              <p>(Datos ng Bata)</p>
              <p>Child's Birthday:</p>{" "}
              <input type="date" id="addM_cBday" onChange={addMember_form_} />
              <p>Gender</p>
              <input
                type="radio"
                name="SEX"
                value="Male"
                id="addM_cSexM"
                onChange={UploadWithGCashSex}
              />{" "}
              <label>Male</label>
              <input
                type="radio"
                name="SEX"
                value="Female"
                id="addM_cSexF"
                onChange={UploadWithGCashSex}
              />{" "}
              <label>Female</label>
              <input
                type="text"
                placeholder="School"
                id="addM_cSchool"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Year/ Grade Level"
                id="addM_cYear"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="School Address"
                id="addM_cSAddress"
                onChange={addMember_form_}
              />
              <input
                type="text"
                placeholder="Cause of Blindness"
                id="addM_cCOB"
                onChange={addMember_form_}
              />
              <h3>Vision</h3>
              <p>Totally Blind:</p>
              <input
                type="radio"
                name="TOTALY_BLIND_EYES"
                value="Left"
                onChange={UploadWithGCashtbE}
              />
              <label>Left</label>
              <input
                type="radio"
                name="TOTALY_BLIND_EYES"
                value="Right"
                onChange={UploadWithGCashtbE}
              />
              <label>Right</label>
              <input
                type="radio"
                name="TOTALY_BLIND_EYES"
                value="Both"
                onChange={UploadWithGCashtbE}
              />
              <p>Both: Left and Right</p>
              <input
                type="text"
                placeholder="Totally Blind with Additional Disabilities (Enter Additional Disabilities)"
                id="addM_cTBAD"
                onChange={addMember_form_}
              />
              <p>Low Vision</p>
              <input
                type="radio"
                name="LOW_VISION_EYES"
                value="Left"
                onChange={UploadWithGCashLV}
              />
              <label>Left</label>
              <input
                type="radio"
                name="LOW_VISION_EYES"
                value="Right"
                onChange={UploadWithGCashLV}
              />
              <label>Right</label>
              <input
                type="radio"
                name="LOW_VISION_EYES"
                value="Both"
                onChange={UploadWithGCashLV}
              />
              <p>Both: Left and Right</p>
              <input
                type="text"
                placeholder="Low Vision with Additional Disabilities (Enter Additional Disabilities)"
                id="addM_cLVAD"
                onChange={addMember_form_}
              />
              <div className="childNeeds_Admin">
                <h2>Child Needs</h2>
                <p>(Pangangailangan ng bata)</p>
                <table>
                  <tbody>
                    <tr>
                      <th>Special Needs</th>
                      <th>Yes</th>
                      <th>No</th>
                      <th>Learning Tools</th>
                      <th>Yes</th>
                      <th>No</th>
                    </tr>
                    <tr>
                      <td>Adaptive Lens</td>
                      <td>
                        <input
                          type="radio"
                          name="ADAPTIVE_LENS"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashAL}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="ADAPTIVE_LENS"
                          id=""
                          value="No"
                          onChange={UploadWithGCashAL}
                        />
                      </td>
                      <td>Stylus</td>
                      <td>
                        <input
                          type="radio"
                          name="STYLUS"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashS}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="STYLUS"
                          id=""
                          value="No"
                          onChange={UploadWithGCashS}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Artficial Eyes</td>
                      <td>
                        <input
                          type="radio"
                          name="ARTIFICIAL_EYES"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashAE}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="ARTIFICIAL_EYES"
                          id=""
                          value="No"
                          onChange={UploadWithGCashAE}
                        />
                      </td>
                      <td>Computer w/ screen reading program</td>
                      <td>
                        <input
                          type="radio"
                          name="COMPUTER_SCREEN"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashCS}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="COMPUTER_SCREEN"
                          id=""
                          value="No"
                          onChange={UploadWithGCashCS}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>White Cane</td>
                      <td>
                        <input
                          type="radio"
                          name="WHITE_CANE"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashWCa}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="WHITE_CANE"
                          id=""
                          value="No"
                          onChange={UploadWithGCashWCa}
                        />
                      </td>
                      <td>CCTV</td>
                      <td>
                        <input
                          type="radio"
                          name="CCTV"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashCC}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="CCTV"
                          id=""
                          value="No"
                          onChange={UploadWithGCashCC}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wheel Chair</td>
                      <td>
                        <input
                          type="radio"
                          name="WHEEL_CHAIR"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashWC}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="WHEEL_CHAIR"
                          id=""
                          value="No"
                          onChange={UploadWithGCashWC}
                        />
                      </td>
                      <td>Large Prints</td>
                      <td>
                        <input
                          type="radio"
                          name="LARGE_PRINTS"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashLP}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="LARGE_PRINTS"
                          id=""
                          value="No"
                          onChange={UploadWithGCashLP}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Hearing Aid</td>
                      <td>
                        <input
                          type="radio"
                          name="HEARING_AID"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashHA}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="HEARING_AID"
                          id=""
                          value="No"
                          onChange={UploadWithGCashHA}
                        />
                      </td>
                      <td>Abacus</td>
                      <td>
                        <input
                          type="radio"
                          name="ABACUS"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashA}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="ABACUS"
                          id=""
                          value="No"
                          onChange={UploadWithGCashA}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Brailler</td>
                      <td>
                        <input
                          type="radio"
                          name="BRAILLER"
                          id=""
                          value="Yes"
                          onChange={UploadWithGCashB}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="BRAILLER"
                          id=""
                          value="No"
                          onChange={UploadWithGCashB}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>Theraphy Service</th>
                      <th>PAVIC Program</th>
                      <th>Self Pay</th>
                      <th>No Theraphy</th>
                    </tr>
                    <tr>
                      <td>Physical Theraphy</td>
                      <td>
                        <input
                          type="radio"
                          name="PHYSICAL_THERAPHY"
                          id=""
                          value="PAVIC Program"
                          onChange={UploadWithGCashPT}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="PHYSICAL_THERAPHY"
                          id=""
                          value="Self Pay"
                          onChange={UploadWithGCashPT}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="PHYSICAL_THERAPHY"
                          id=""
                          value="No Theraphy"
                          onChange={UploadWithGCashPT}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Occupational Theraphy</td>
                      <td>
                        <input
                          type="radio"
                          name="OCCUPATIONAL_THERAPHY"
                          id=""
                          value="PAVIC Program"
                          onChange={UploadWithGCashOT}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="OCCUPATIONAL_THERAPHY"
                          id=""
                          value="Self Pay"
                          onChange={UploadWithGCashOT}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="OCCUPATIONAL_THERAPHY"
                          id=""
                          value="No Theraphy"
                          onChange={UploadWithGCashOT}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Speech Theraphy</td>
                      <td>
                        <input
                          type="radio"
                          name="SPEECH_THERAPHY"
                          id=""
                          value="PAVIC Program"
                          onChange={UploadWithGCashST}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="SPEECH_THERAPHY"
                          id=""
                          value="Self Pay"
                          onChange={UploadWithGCashST}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name="SPEECH_THERAPHY"
                          id=""
                          value="No Theraphy"
                          onChange={UploadWithGCashST}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3>Other Conditions and Needs</h3>
                <textarea
                  name="otn_"
                  id=""
                  cols="30"
                  rows="10"
                  id="addM_OCN"
                  onChange={addMember_form_}
                ></textarea>
                <h3>Upload proof of Payment</h3>
                <input
                  type="file"
                  name="imgGcash"
                  id="imgGcash"
                  onChange={UploadWithGCash}
                />
              </div>
            </div>
            <div className="editApproveMemberBtns">
              <p className="cancelApproveMember">Cancel</p>
              <p
                className="confirmUpdateApproveMembers"
                onClick={addMember_submit}
              >
                Submit form
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMemberList;
