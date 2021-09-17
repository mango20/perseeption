import React, { useEffect, useState } from "react";
import Axios from "axios";
// import AdminDashboard from "../MemberAdminPage/AdminDashboard";
import Member from "../MemberAdminPage/Member";
import Announcement from "../AdminAnnouncement/Announcement";

function Main() {
  const [USER_TYPE, setUSER_TYPE] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3005/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUSER_TYPE(response.data.user[0].USER_TYPE);
      }
    });
  }, []);

  return (
    <div>
      <div>
        {USER_TYPE === "admin" && <Announcement />}
        {USER_TYPE === "member" && <Member />}
      </div>
    </div>
  );
}

export default Main;
