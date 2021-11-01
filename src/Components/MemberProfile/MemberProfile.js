import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberProfile.css";
import { Link } from "react-router-dom";

function MemberProfile() {
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
  return (
    <div className="proBg">
      <div className="contPro">
        {USERNAME_.map((val, key) => {
          return (
            <div className="member_Profile_info_">
              <div className="memproCont">
                <div className="titleMemPro__">
                  <img src="/images/logoIcon.png" alt="" id="logPro" />
                  <h1 className="profileTitle_">Member Profile</h1>
                </div>

                <Link to="/">
                  <p className="backMemberProfile">Back</p>
                </Link>
                <div className="accData">
                  <h2>Account Details</h2>
                  <p>
                    Name:
                    <span> {val.ADMIN_NAME}</span>
                  </p>
                  <p>
                    Username:
                    <span> {val.USERNAME}</span>
                  </p>
                </div>
                <div className="fathersData_">
                  <h2>Father's Information</h2>
                  <p>
                    Father's Name:
                    <span>
                      {" "}
                      {val.FATHER_SURNAME} {val.FATHER_GIVEN_NAME}{" "}
                      {val.FATHER_MIDDLE_NAME}
                    </span>
                  </p>

                  <p>
                    Landline:
                    <span> {val.FATHER_LANDLINE}</span>
                  </p>

                  <p>
                    Contact:
                    <span> {val.FATHER_CONTACT}</span>
                  </p>

                  <p>
                    Email:
                    <span> {val.FATHER_EMAIL}</span>
                  </p>

                  <p>
                    Date of Birth:
                    <span> {val.FATHER_BIRTHDAY}</span>
                  </p>

                  <p>
                    Occupation:
                    <span> {val.FATHER_OCCUPATION}</span>
                  </p>
                </div>
                <div className="mothersData_">
                  <h2>Mother's Information</h2>

                  <p>
                    Name:
                    <span>
                      {" "}
                      {val.MOTHER_SURNAME} {val.MOTHER_GIVEN_NAME}{" "}
                      {val.MOTHER_MIDDLE_NAME}
                    </span>
                  </p>

                  <p>
                    Landline:
                    <span> {val.MOTHER_LANDLINE}</span>
                  </p>

                  <p>
                    Contact:
                    <span> {val.MOTHER_CONTACT}</span>
                  </p>

                  <p>
                    Email:
                    <span> {val.MOTHER_EMAIL}</span>
                  </p>

                  <p>
                    Date of Birth:
                    <span> {val.MOTHER_BIRTHDAY}</span>
                  </p>

                  <p>
                    Occupation:
                    <span> {val.MOTHER_OCCUPATION}</span>
                  </p>
                </div>
                <div className="guardianssData_">
                  <h2>Guardian's Information</h2>
                  <p>
                    Name:
                    <span>
                      {" "}
                      {val.GUARDIAN_SURNAME} {val.GUARDIAN_GIVEN_NAME}{" "}
                      {val.GUARDIAN_MIDDLE_NAME}
                    </span>
                  </p>
                  <p>
                    Contact:
                    <span>{val.GUARDIAN_CONTACT}</span>
                  </p>
                </div>
                <div className="monthlyIncomeData_">
                  <h2>Monthly Income</h2>
                  <p>
                    Monthly Income:
                    <span> {val.MONTHLY_INCOME}</span>
                  </p>

                  <p>
                    Contact:
                    <span> {val.GUARDIAN_CONTACT}</span>
                  </p>
                </div>
                <div className="siblingsData_">
                  <h2>Siblings</h2>
                  <p>
                    Name:
                    <span> {val.FIRST_SIBLING}</span>
                  </p>

                  <p>
                    Name:
                    <span> {val.SECOND_SIBLING}</span>
                  </p>

                  <p>
                    Name:
                    <span> {val.THIRD_SIBLING}</span>
                  </p>
                </div>
                <div className="addressData_">
                  <h2>Address</h2>
                  <p>
                    City:
                    <span> {val.CITY_ADDRESS}</span>
                  </p>

                  <p>
                    Region:
                    <span> {val.REGION_ADDRESS}</span>
                  </p>

                  <p>
                    Province:
                    <span> {val.PROVINCE_ADDRESS}</span>
                  </p>
                </div>
                <div className="childsData_">
                  <h2>Child's Data</h2>
                  <p>
                    Child's Name:
                    <span>
                      {" "}
                      {val.CHILD_SURNAME} {val.CHILD_GIVEN_NAME}{" "}
                      {val.CHILD_MIDDLE_NAME}
                    </span>
                  </p>
                  <p>
                    Date of Birth:
                    <span> {val.CHILD_BIRTHDAY}</span>
                  </p>

                  <p>
                    Gender:
                    <span> {val.SEX}</span>
                  </p>

                  <p>
                    School Name:
                    <span> {val.SCHOOL_NAME}</span>
                  </p>

                  <p>
                    School Address:
                    <span> {val.SCHOOL_ADDRESS}</span>
                  </p>

                  <p>
                    Year/ Grade Level:
                    <span> {val.YEAR_GRADE_LEVEL}</span>
                  </p>

                  <p>
                    Cause of Blindness:
                    <span> {val.CAUSE_OF_BLINDNESS}</span>
                  </p>

                  <p>
                    Totaly Blind Eyes:
                    <span> {val.TOTALY_BLIND_EYES}</span>
                  </p>

                  <p>
                    Totaly Blind with Disability:
                    <span> {val.TB_ADD_DISABILITY}</span>
                  </p>

                  <p>
                    Low Vision Eyes:
                    <span> {val.LOW_VISION_EYES}</span>
                  </p>

                  <p>
                    Low Vision with Disability:
                    <span> {val.LV_ADD_DISABILITY}</span>
                  </p>
                </div>
                <div className="cNeedData_">
                  <h2 className="cNeedData_T">Child Needs</h2>
                  <div className="special_">
                    <h4>Special Needs</h4>
                    <p>
                      Adaptive Lens:
                      <span> {val.ADAPTIVE_LENS}</span>
                    </p>

                    <p>
                      Artficial Eyes:
                      <span> {val.ARTIFICIAL_EYES}</span>
                    </p>

                    <p>
                      White Cane:
                      <span> {val.WHITE_CANE}</span>
                    </p>
                    <p>
                      Hearing Aid
                      <span> {val.HEARING_AID}</span>
                    </p>
                    <p>
                      Wheel Chair
                      <span> {val.WHEEL_CHAIR}</span>
                    </p>
                  </div>

                  <div className="lToolsData_">
                    <h4>Learning Tools</h4>
                    <p>
                      Stylus:
                      <span> {val.STYLUS}</span>
                    </p>

                    <p>
                      Computer w/ screen reading program:
                      <span> {val.COMPUTER_SCREEN}</span>
                    </p>

                    <p>
                      CCTV:
                      <span> {val.CCTV}</span>
                    </p>
                    <p>
                      Large Prints:
                      <span> {val.LARGE_PRINTS}</span>
                    </p>
                    <p>
                      Abacus:
                      <span> {val.ABACUS}</span>
                    </p>
                    <p>
                      Brailler:
                      <span> {val.BRAILLER}</span>
                    </p>
                  </div>

                  <div className="tServiceData_">
                    <h4>Theraphy Service</h4>
                    <p>
                      Physical Theraphy:
                      <span> {val.PHYSICAL_THERAPHY}</span>
                    </p>

                    <p>
                      Occupational Theraphy:
                      <span> {val.OCCUPATIONAL_THERAPHY}</span>
                    </p>

                    <p>
                      Speech Theraphy:
                      <span> {val.SPEECH_THERAPHY}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemberProfile;
