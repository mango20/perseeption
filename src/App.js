import AdminAnnouncement from "./Components/AdminAnnouncement/AdminAnnouncement";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./Components/AdminEvents/Events";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Main from "./Components/Login/Main";
import Member from "./Components/MemberAdminPage/Member";
import MemberAnnouncement from "./Components/MemberAnnouncement/MemberAnnouncement";
import MemberEvents from "./Components/MemberEvents/MemberEvents";
import AdminMemberList from "./Components/AdminMembersList/AdminMemberList";
import AdminAdminList from "./Components/AdminAdminList/AdminAdminList";
import MainPage from "./Components/MainPage/MainPage";
import MemberAbout from "./Components/MemberAbout/MemberAbout";
import ContactUs from "./Components/ContactUs/ContactUs";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import AdminProfile from "./Components/AdminProfile/AdminProfile";
import MemberForum from "./Components/MemberForum/MemberForum";
import TermsCondition from "./Components/TermsCondition/TermsCondition";
import ReadMoreAnnouncement from "./Components/MemberAnnouncement/ReadMoreAnnouncement";
import ReadMoreEvent from "./Components/MemberEvents/ReadMoreEvent";
import AdminContactUs from "./Components/AdminContactUs/AdminContactUs";
import MemberProfile from "./Components/MemberProfile/MemberProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/AdminAnnouncement"
          exact
          component={AdminAnnouncement}
        ></Route>
        <Route path="/" exact component={MainPage}></Route>
        <Route
          path="/ReadMoreAnnouncement"
          exact
          component={ReadMoreAnnouncement}
        ></Route>
        <Route path="/ReadMoreEvent" exact component={ReadMoreEvent}></Route>
        <Route path="/MemberProfile" exact component={MemberProfile}></Route>
        <Route path="/AdminContactUs" exact component={AdminContactUs}></Route>
        <Route path="/TermsCondition" exact component={TermsCondition}></Route>
        <Route path="/MemberForum" exact component={MemberForum}></Route>
        <Route path="/Events" exact component={Events}></Route>
        <Route path="/AdminProfile" exact component={AdminProfile}></Route>
        <Route path="/Login" exact component={Login}></Route>
        <Route path="/Main" exact component={Main}></Route>
        <Route path="/MemberAbout" exact component={MemberAbout}></Route>
        <Route path="/ContactUs" exact component={ContactUs}></Route>
        <Route path="/AdminDashboard" exact component={AdminDashboard}></Route>
        <Route
          path="/MemberAnnouncement"
          exact
          component={MemberAnnouncement}
        ></Route>
        <Route
          path="/AdminMemberList"
          exact
          component={AdminMemberList}
        ></Route>
        <Route path="/AdminAdminList" exact component={AdminAdminList}></Route>
        <Route path="/MemberEvents" exact component={MemberEvents}></Route>
        <Route path="/Member" exact component={Member}></Route>
        <Route path="/Registration" exact component={Registration}></Route>
      </Switch>
    </Router>
  );
}

export default App;
