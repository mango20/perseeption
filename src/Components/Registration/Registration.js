import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Registration.css";
import { Link } from "react-router-dom";

function Registration() {
  const [LastMember, setLastMember] = useState([]);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [CHILD_SURNAME, setCHILD_SURNAME] = useState("");
  const [CHILD_GIVEN_NAME, setCHILD_GIVEN_NAME] = useState("");
  const [CHILD_MIDDLE_NAME, setCHILD_MIDDLE_NAME] = useState("");

  const [FATHER_SURNAME, setFATHER_SURNAME] = useState("");
  const [FATHER_GIVEN_NAME, setFATHER_GIVEN_NAME] = useState("");
  const [FATHER_MIDDLE_NAME, setFATHER_MIDDLE_NAME] = useState("");
  const [FATHER_BIRTHDAY, setFATHER_BIRTHDAY] = useState("");
  //

  const [MOTHER_SURNAME, setMOTHER_SURNAME] = useState("");
  const [MOTHER_GIVEN_NAME, setMOTHER_GIVEN_NAME] = useState("");
  const [MOTHER_MIDDLE_NAME, setMOTHER_MIDDLE_NAME] = useState("");
  const [MOTHER_BIRTHDAY, setMOTHER_BIRTHDAY] = useState("");
  //

  const [GUARDIAN_SURNAME, setGUARDIAN_SURNAME] = useState("");
  const [GUARDIAN_GIVEN_NAME, setGUARDIAN_GIVEN_NAME] = useState("");
  const [GUARDIAN_MIDDLE_NAME, setGUARDIAN_MIDDLE_NAME] = useState("");
  const [GUARDIAN_CONTACT, setGUARDIAN_CONTACT] = useState("");
  //

  const [FIRST_SIBLING, setFIRST_SIBLING] = useState("");
  const [SECOND_SIBLING, setSECOND_SIBLING] = useState("");
  const [THIRD_SIBLING, setTHIRD_SIBLING] = useState("");
  //

  const [CITY_ADDRESS, setCITY_ADDRESS] = useState("");
  const [REGION_ADDRESS, setREGION_ADDRESS] = useState("");
  const [PROVINCE_ADDRESS, setPROVINCE_ADDRESS] = useState("");
  //

  const [FATHER_CONTACT, setFATHER_CONTACT] = useState("");
  const [MOTHER_CONTACT, setMOTHER_CONTACT] = useState("");

  const [FATHER_LANDLINE, setFATHER_LANDLINE] = useState("");
  const [MOTHER_LANDLINE, setMOTHER_LANDLINE] = useState("");

  const [FATHER_EMAIL, setFATHER_EMAIL] = useState("");
  const [MOTHER_EMAIL, setMOTHER_EMAIL] = useState("");
  //
  const [MONTHLY_INCOME, setMONTHLY_INCOME] = useState("");

  const [FATHER_OCCUPATION, setFATHER_OCCUPATION] = useState("");
  const [MOTHER_OCCUPATION, setMOTHER_OCCUPATION] = useState("");

  const [CHILD_BIRTHDAY, setCHILD_BIRTHDAY] = useState("");

  //
  const [SEX, setSEX] = useState("");

  const [SCHOOL_NAME, setSCHOOL_NAME] = useState("");
  const [YEAR_GRADE_LEVEL, setYEAR_GRADE_LEVEL] = useState("");
  const [SCHOOL_ADDRESS, setSCHOOL_ADDRESS] = useState("");

  //

  const [CAUSE_OF_BLINDNESS, setCAUSE_OF_BLINDNESS] = useState("");

  const [TOTALY_BLIND_EYES, setTOTALY_BLIND_EYES] = useState("");
  const [TB_ADD_DISABILITY, setTB_ADD_DISABILITY] = useState("");

  const [LOW_VISION_EYES, setLOW_VISION_EYES] = useState("");
  const [LV_ADD_DISABILITY, setLV_ADD_DISABILITY] = useState("");

  const [ADAPTIVE_LENS, setADAPTIVE_LENS] = useState("");
  const [STYLUS, setSTYLUS] = useState("");

  const [ARTIFICIAL_EYES, setARTIFICIAL_EYES] = useState("");
  const [COMPUTER_SCREEN, setCOMPUTER_SCREEN] = useState("");
  //
  const [WHITE_CANE, setWHITE_CANE] = useState("");
  const [CCTV, setCCTV] = useState("");

  const [WHEEL_CHAIR, setWHEEL_CHAIR] = useState("");
  const [LARGE_PRINTS, setLARGE_PRINTS] = useState("");

  const [HEARING_AID, setHEARING_AID] = useState("");
  const [ABACUS, setABACUS] = useState("");

  const [BRAILLER, setBRAILLER] = useState("");

  const [PHYSICAL_THERAPHY, setPHYSICAL_THERAPHY] = useState("");
  const [OCCUPATIONAL_THERAPHY, setOCCUPATIONAL_THERAPHY] = useState("");
  const [SPEECH_THERAPHY, setSPEECH_THERAPHY] = useState("");

  const [OTHER_CONDITION, setOTHER_CONDITION] = useState("");

  const [Msg, setMsg] = useState("");
  Axios.defaults.withCredentials = true;

  // REGISTER
  const Register = () => {
    var borderUserName = document.getElementById("regUsername");
    var borderRegUserId = document.getElementById("regPass");
    var letters = /^[A-Za-z]+$/;
    // Username Regex
    const inputUsername = document.getElementById("regUsername").value;

    const usernameRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,30}$)"
    );

    // Password Regex
    const inputPassword = document.getElementById("regPass").value;
    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );
    //
    const Childsurname = document.getElementById("inputChildSurname").value;
    const Childsurname1 = document.getElementById("inputChildSurname");
    //
    var childName = document.getElementById("inputChildGivenNameId").value;
    var childName1 = document.getElementById("inputChildGivenNameId");

    //
    var city = document.getElementById("city").value;
    var city1 = document.getElementById("city");

    //
    var region = document.getElementById("region").value;
    var region1 = document.getElementById("region");

    //
    var province = document.getElementById("province").value;
    var province1 = document.getElementById("province");

    //
    var income = document.getElementsByName("income");

    //
    var childsDOB = document.getElementById("childsDOB").value;
    var childsDOB1 = document.getElementById("childsDOB");

    //
    var sex = document.getElementsByName("sex");

    //
    var causeBlindness = document.getElementById("causeBlindness").value;
    var causeBlindness1 = document.getElementById("causeBlindness");

    // console.log(surnameChild);

    //
    var adaptiveLens = document.getElementsByName("adaptiveLens");
    var stylus = document.getElementsByName("stylus");
    var artificialEyes = document.getElementsByName("artificialEyes");
    var computerScreen = document.getElementsByName("computerScreen");

    var whiteCane = document.getElementsByName("whiteCane");
    var cctvs = document.getElementsByName("CCTV");
    var wheelChair = document.getElementsByName("wheelChair");
    var largePrints = document.getElementsByName("largePrints");
    var hearingAid = document.getElementsByName("hearingAid");
    var abacus = document.getElementsByName("abacus");
    var brailler = document.getElementsByName("brailler");

    var physicalTheraphy = document.getElementsByName("physicalTheraphy");
    var ocupationalTheraphy = document.getElementsByName("ocupationalTheraphy");
    var speechTherapy = document.getElementsByName("speechTherapy");

    // Validation Username
    if (inputUsername === "" || !usernameRegex.test(inputUsername)) {
      borderUserName.style.borderColor = "red";
    } else {
      borderUserName.style.borderColor = "#dddddd";
    }

    // Validation Pass
    if (inputPassword === "" || !passwordRegex.test(inputPassword)) {
      borderRegUserId.style.borderColor = "red";
    } else {
      borderRegUserId.style.borderColor = "#dddddd";
    }

    if (Childsurname === "" || !Childsurname.match(letters)) {
      Childsurname1.style.borderColor = "red";
      document.getElementById("invalidchildSurname").style.display = "block";
    } else {
      Childsurname1.style.borderColor = "#dddddd";
      document.getElementById("invalidchildSurname").style.display = "none";
    }

    if (childName === "" || !childName.match(letters)) {
      childName1.style.borderColor = "red";
    } else {
      childName1.style.borderColor = "#dddddd";
    }

    if (city === "") {
      city1.style.borderColor = "red";
    } else {
      city1.style.borderColor = "#dddddd";
    }

    if (region === "") {
      region1.style.borderColor = "red";
    } else {
      region1.style.borderColor = "#dddddd";
    }

    if (province === "") {
      province1.style.borderColor = "red";
    } else {
      province1.style.borderColor = "#dddddd";
    }

    if (childsDOB === "") {
      childsDOB1.style.borderColor = "red";
      // document.getElementById("childBdayMsg").style.display = "block";
    } else {
      childsDOB1.style.borderColor = "#dddddd";
      // document.getElementById("childBdayMsg").style.display = "none";
    }

    if (causeBlindness === "" || !causeBlindness.match(letters)) {
      causeBlindness1.style.borderColor = "red";
      // document.getElementById("invalidchildSurname").style.display = "block";
    } else {
      causeBlindness1.style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
    }

    if (!(sex[0].checked === true || sex[1].checked === true)) {
      document.getElementById("sexMsg").style.display = "block";
    } else {
      document.getElementById("sexMsg").style.display = "none";
    }

    if (
      !(
        income[0].checked === true ||
        income[1].checked === true ||
        income[2].checked === true ||
        income[3].checked === true
      )
    ) {
      document.getElementById("monthlyIncomeTitle").style.color = "red";
      document.getElementById("monthlyIncomeTitle").style.display = "block";
    } else {
      document.getElementById("monthlyIncomeTitle").style.display = "none";
    }

    if (
      !(
        physicalTheraphy[0].checked === true ||
        physicalTheraphy[1].checked === true ||
        physicalTheraphy[2].checked === true
      ) ||
      !(
        ocupationalTheraphy[0].checked === true ||
        ocupationalTheraphy[1].checked === true ||
        ocupationalTheraphy[2].checked === true
      ) ||
      !(
        speechTherapy[0].checked === true ||
        speechTherapy[1].checked === true ||
        speechTherapy[2].checked === true
      )
    ) {
      document.getElementById("tableMessageTheraphy").style.display = "block";
      document.getElementById("tableService").style.borderStyle = "solid";
      document.getElementById("tableService").style.borderColor = "red";
    } else {
      document.getElementById("tableMessageTheraphy").style.display = "none";
      document.getElementById("tableService").style.borderStyle = "none";
    }

    if (
      !(adaptiveLens[0].checked === true || adaptiveLens[1].checked === true) ||
      !(stylus[0].checked === true || stylus[1].checked === true) ||
      !(
        artificialEyes[0].checked === true || artificialEyes[1].checked === true
      ) ||
      !(
        computerScreen[0].checked === true || computerScreen[1].checked === true
      ) ||
      !(whiteCane[0].checked === true || whiteCane[1].checked === true) ||
      !(cctvs[0].checked === true || cctvs[1].checked === true) ||
      !(wheelChair[0].checked === true || wheelChair[1].checked === true) ||
      !(largePrints[0].checked === true || largePrints[1].checked === true) ||
      !(hearingAid[0].checked === true || hearingAid[1].checked === true) ||
      !(abacus[0].checked === true || abacus[1].checked === true) ||
      !(brailler[0].checked === true || brailler[1].checked === true)
    ) {
      document.getElementById("tableMessage").style.display = "block";
      document.getElementById("tableNeed").style.borderStyle = "solid";
      document.getElementById("tableNeed").style.borderColor = "red";
    } else {
      document.getElementById("tableMessage").style.display = "none";
      document.getElementById("tableNeed").style.borderStyle = "none";
    }

    //  Get condition
    if (
      passwordRegex.test(inputPassword) &&
      usernameRegex.test(inputUsername) &&
      (!Childsurname === "" || Childsurname.match(letters)) &&
      (!childName === "" || childName.match(letters)) &&
      !(city === "") &&
      !(region === "") &&
      !(province === "") &&
      !(childsDOB === "") &&
      (!causeBlindness === "" || causeBlindness.match(letters)) &&
      (sex[0].checked === true || sex[1].checked === true) &&
      (income[0].checked === true ||
        income[1].checked === true ||
        income[2].checked === true ||
        income[3].checked === true) &&
      (physicalTheraphy[0].checked === true ||
        physicalTheraphy[1].checked === true ||
        physicalTheraphy[2].checked === true) &&
      (ocupationalTheraphy[0].checked === true ||
        ocupationalTheraphy[1].checked === true ||
        ocupationalTheraphy[2].checked === true) &&
      (speechTherapy[0].checked === true ||
        speechTherapy[1].checked === true ||
        speechTherapy[2].checked === true) &&
      (adaptiveLens[0].checked === true || adaptiveLens[1].checked === true) &&
      (stylus[0].checked === true || stylus[1].checked === true) &&
      (artificialEyes[0].checked === true ||
        artificialEyes[1].checked === true) &&
      (computerScreen[0].checked === true ||
        computerScreen[1].checked === true) &&
      (whiteCane[0].checked === true || whiteCane[1].checked === true) &&
      (cctvs[0].checked === true || cctvs[1].checked === true) &&
      (wheelChair[0].checked === true || wheelChair[1].checked === true) &&
      (largePrints[0].checked === true || largePrints[1].checked === true) &&
      (hearingAid[0].checked === true || hearingAid[1].checked === true) &&
      (abacus[0].checked === true || abacus[1].checked === true) &&
      (brailler[0].checked === true || brailler[1].checked === true)
    ) {
      Axios.post("http://localhost:57230/register", {
        USERNAME: usernameReg,
        USER_PASSWORD: passwordReg,

        CHILD_SURNAME: CHILD_SURNAME,
        CHILD_GIVEN_NAME: CHILD_GIVEN_NAME,
        CHILD_MIDDLE_NAME: CHILD_MIDDLE_NAME,

        FATHER_SURNAME: FATHER_SURNAME,
        FATHER_GIVEN_NAME: FATHER_GIVEN_NAME,
        FATHER_MIDDLE_NAME: FATHER_MIDDLE_NAME,
        FATHER_BIRTHDAY: FATHER_BIRTHDAY,

        MOTHER_SURNAME: MOTHER_SURNAME,
        MOTHER_GIVEN_NAME: MOTHER_GIVEN_NAME,
        MOTHER_MIDDLE_NAME: MOTHER_MIDDLE_NAME,
        MOTHER_BIRTHDAY: MOTHER_BIRTHDAY,

        GUARDIAN_SURNAME: GUARDIAN_SURNAME,
        GUARDIAN_GIVEN_NAME: GUARDIAN_GIVEN_NAME,
        GUARDIAN_MIDDLE_NAME: GUARDIAN_MIDDLE_NAME,
        GUARDIAN_CONTACT: GUARDIAN_CONTACT,
        //Guardian Num

        FIRST_SIBLING: FIRST_SIBLING,
        SECOND_SIBLING: SECOND_SIBLING,
        THIRD_SIBLING: THIRD_SIBLING,

        CITY_ADDRESS: CITY_ADDRESS,
        REGION_ADDRESS: REGION_ADDRESS,
        PROVINCE_ADDRESS: PROVINCE_ADDRESS,

        FATHER_CONTACT: FATHER_CONTACT,
        MOTHER_CONTACT: MOTHER_CONTACT,
        FATHER_LANDLINE: FATHER_LANDLINE,
        MOTHER_LANDLINE: MOTHER_LANDLINE,

        FATHER_EMAIL: FATHER_EMAIL,
        MOTHER_EMAIL: MOTHER_EMAIL,

        MONTHLY_INCOME: MONTHLY_INCOME,

        FATHER_OCCUPATION: FATHER_OCCUPATION,
        MOTHER_OCCUPATION: MOTHER_OCCUPATION,

        CHILD_BIRTHDAY: CHILD_BIRTHDAY,
        SEX: SEX,

        SCHOOL_NAME: SCHOOL_NAME,
        YEAR_GRADE_LEVEL: YEAR_GRADE_LEVEL,
        SCHOOL_ADDRESS: SCHOOL_ADDRESS,

        CAUSE_OF_BLINDNESS: CAUSE_OF_BLINDNESS,

        TOTALY_BLIND_EYES: TOTALY_BLIND_EYES,
        TB_ADD_DISABILITY: TB_ADD_DISABILITY,

        LOW_VISION_EYES: LOW_VISION_EYES,
        LV_ADD_DISABILITY: LV_ADD_DISABILITY,

        ADAPTIVE_LENS: ADAPTIVE_LENS,
        STYLUS: STYLUS,

        ARTIFICIAL_EYES: ARTIFICIAL_EYES,
        COMPUTER_SCREEN: COMPUTER_SCREEN,

        WHITE_CANE: WHITE_CANE,
        CCTV: CCTV,

        WHEEL_CHAIR: WHEEL_CHAIR,
        LARGE_PRINTS: LARGE_PRINTS,

        HEARING_AID: HEARING_AID,
        ABACUS: ABACUS,

        BRAILLER: BRAILLER,

        PHYSICAL_THERAPHY: PHYSICAL_THERAPHY,
        OCCUPATIONAL_THERAPHY: OCCUPATIONAL_THERAPHY,
        SPEECH_THERAPHY: SPEECH_THERAPHY,

        OTHER_CONDITION: OTHER_CONDITION,
      });

      document.getElementById("Registered_MemberOuter").style.display = "block";
      document.getElementById("Registered_Member").style.display = "block";
    } else {
      document.getElementById("InvalidOuter").style.display = "block";
      document.getElementById("Invalid_Content").style.display = "block";

      setTimeout(function () {
        document.getElementById("InvalidOuter").style.display = "none";
      }, 2000);

      setTimeout(function () {
        document.getElementById("Invalid_Content").style.display = "none";
      }, 2000);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Validation Typing
  const passKeyUp = () => {
    const inputRegPass = document.getElementById("regPass").value;

    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );

    // const specialChar = /[!@#$%^&*]/g;
    if (passwordRegex.test(inputRegPass)) {
      document.getElementById("strongPass").style.display = "block";
      document.getElementById("weakPass").style.display = "none";
      document.getElementById("regPass").style.borderColor = "#dddddd";
    } else {
      document.getElementById("strongPass").style.display = "none";
      document.getElementById("weakPass").style.display = "block";
    }
  };

  // When Password is Click

  const usernameKeyUp = () => {
    const inputUsernamePass = document.getElementById("regUsername").value;
    const usernameRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,30}$)"
    );
    if (usernameRegex.test(inputUsernamePass)) {
      document.getElementById("validUsername").style.display = "block";
      document.getElementById("invalidUserName").style.display = "none";
      document.getElementById("regUsername").style.borderColor = "#dddddd";
    } else {
      document.getElementById("validUsername").style.display = "none";
      document.getElementById("invalidUserName").style.display = "block";
    }
  };

  // When Password is Click

  const passChildSur = () => {
    const Childsurname = document.getElementById("inputChildSurname").value;
    var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (Childsurname === "" || !Childsurname.match(letters)) {
      document.getElementById("inputChildSurname").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("inputChildSurname").style.borderColor =
        "#dddddd";
      document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const childNameKey = () => {
    const ChildName = document.getElementById("inputChildGivenNameId").value;
    var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ChildName === "" || !ChildName.match(letters)) {
      document.getElementById("inputChildGivenNameId").style.borderColor =
        "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("inputChildGivenNameId").style.borderColor =
        "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const cityKey = () => {
    const id = document.getElementById("city").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (id === "") {
      document.getElementById("city").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("city").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const specialNeedKey = () => {
    var adaptiveLens = document.getElementsByName("adaptiveLens");
    var stylus = document.getElementsByName("stylus");
    var artificialEyes = document.getElementsByName("artificialEyes");
    var computerScreen = document.getElementsByName("computerScreen");

    var whiteCane = document.getElementsByName("whiteCane");
    var cctvs = document.getElementsByName("CCTV");
    var wheelChair = document.getElementsByName("wheelChair");
    var largePrints = document.getElementsByName("largePrints");
    var hearingAid = document.getElementsByName("hearingAid");
    var abacus = document.getElementsByName("abacus");
    var brailler = document.getElementsByName("brailler");

    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (
      !(adaptiveLens[0].checked === true || adaptiveLens[1].checked === true) ||
      !(stylus[0].checked === true || stylus[1].checked === true) ||
      !(
        artificialEyes[0].checked === true || artificialEyes[1].checked === true
      ) ||
      !(
        computerScreen[0].checked === true || computerScreen[1].checked === true
      ) ||
      !(whiteCane[0].checked === true || whiteCane[1].checked === true) ||
      !(cctvs[0].checked === true || cctvs[1].checked === true) ||
      !(wheelChair[0].checked === true || wheelChair[1].checked === true) ||
      !(largePrints[0].checked === true || largePrints[1].checked === true) ||
      !(hearingAid[0].checked === true || hearingAid[1].checked === true) ||
      !(abacus[0].checked === true || abacus[1].checked === true) ||
      !(brailler[0].checked === true || brailler[1].checked === true)
    ) {
      // document.getElementById("tableMessage").style.display = "block";
      // document.getElementById("tableNeed").style.borderStyle = "solid";
      // document.getElementById("tableNeed").style.borderColor = "red";
    } else {
      document.getElementById("tableMessage").style.display = "none";
      document.getElementById("tableNeed").style.borderStyle = "none";
    }
  };

  const TheraphyKey = () => {
    var physicalTheraphy = document.getElementsByName("physicalTheraphy");
    var ocupationalTheraphy = document.getElementsByName("ocupationalTheraphy");
    var speechTherapy = document.getElementsByName("speechTherapy");

    if (
      !(
        physicalTheraphy[0].checked === true ||
        physicalTheraphy[1].checked === true ||
        physicalTheraphy[2].checked === true
      ) ||
      !(
        ocupationalTheraphy[0].checked === true ||
        ocupationalTheraphy[1].checked === true ||
        ocupationalTheraphy[2].checked === true
      ) ||
      !(
        speechTherapy[0].checked === true ||
        speechTherapy[1].checked === true ||
        speechTherapy[2].checked === true
      )
    ) {
      // document.getElementById("tableMessageTheraphy").style.display = "block";
      // document.getElementById("tableService").style.borderStyle = "solid";
      // document.getElementById("tableService").style.borderColor = "red";
    } else {
      document.getElementById("tableMessageTheraphy").style.display = "none";
      document.getElementById("tableService").style.borderStyle = "none";
    }
  };

  const regionKey = () => {
    const ids = document.getElementById("region").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ids === "") {
      document.getElementById("region").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("region").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const provinceKey = () => {
    const ids = document.getElementById("province").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ids === "") {
      document.getElementById("province").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("province").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const causeBlindness = () => {
    const ids = document.getElementById("causeBlindness").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ids === "") {
      document.getElementById("causeBlindness").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("causeBlindness").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const DOBKey = () => {
    const ids = document.getElementById("childsDOB").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ids === "") {
      document.getElementById("childsDOB").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("childsDOB").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };
  //   useEffect(() => {
  //     Axios.get("http://localhost:57230/login").then((response) => {
  //       console.log(response);
  //     });
  //   }, []);

  const scrollCreateAcc = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollChildFam = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  const scrollChildData = () => {
    // window.scrollTo(0, 1335);
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  };

  const scrollChildNeed = () => {
    // window.scrollTo(0, 1745);
    window.scrollTo({
      top: 2780,
      behavior: "smooth",
    });
  };

  const scrollSubmit = () => {
    // window.scrollTo(0, 2545);
    window.scrollTo({
      top: 3500,
      behavior: "smooth",
    });
  };

  const hideDisclaimer = () => {
    document.getElementById("disclaimer").style.display = "none";
    document.getElementById("disclaimerOuter").style.display = "none";
    document.getElementById("beforeCont").style.display = "block";
  };

  const checkForm = () => {
    Axios.get("http://localhost:57230/api/getLastMember").then((response) => {
      setLastMember(response.data);
    });
    document.getElementById("Registered_MemberOuter").style.display = "none";
    document.getElementById("Registered_Member").style.display = "none";
    document.getElementById("floatReg_form").style.display = "block";
    document.getElementById("Reg_formContent").style.display = "block";
  };
  return (
    <div className="registrationBg" id="registrationBg">
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
      <div className="floatDisclaimer" id="disclaimerOuter">
        <div className="disclaimerContent" id="disclaimer">
          <p className="dTitle">Disclaimer</p>
          <p>
            By proceeding with accomplishing this Form, you give consent to the
            processing of your personal information. All of the given data will
            not be shared to anyone. PLEASE REMEMBER that accomplishing this
            online form DOES NOT mean that you are already a member of
            Perseeption please wait to approve your request within 24hrs.
          </p>
          <button className="disclaimerBtn" onClick={hideDisclaimer}>
            Proceed
          </button>
        </div>
      </div>

      <div className="floatRegistered_Member" id="Registered_MemberOuter">
        <div className="RegisteredMember_Content" id="Registered_Member">
          <p className="RegisteredMember_Title">You Submitted Your Form!</p>
          <p>
            Thank you for signing up in our organization! PLEASE REMEMBER that
            accomplishing this online form DOES NOT mean that you are already a
            member of Perseeption please wait to approve your request within
            24hrs.
          </p>
          <div className="btn_display">
            <Link to="/" className="back_reg_form_Btn">
              Back to Homepage
            </Link>
            <p className="registeredMember_Btn" onClick={checkForm}>
              Check my form
            </p>
          </div>
        </div>
      </div>

      <div className="floatInvalid" id="InvalidOuter">
        <div className="Invalid_Content" id="Invalid_Content">
          <p className="Invalid_Title">Alert!</p>
          <p className="invalid_reg_msg">Please Complete the Form!</p>
          {/* <div className="btn_display">
            <p className="invalid_Btn" onClick={checkForm}>
              Check my form
            </p>
          </div> */}
        </div>
      </div>

      <div className="floatReg_form" id="floatReg_form">
        <div className="Reg_formContent" id="Reg_formContent">
          <p className="title_reg_form_">Check Your Form</p>
          {LastMember.map((val, key) => {
            return (
              <div key={key} className="reg_form_Cont">
                {/* <p className="reg_info_title">Check Your Form</p> */}
                <p className="reg_form_list_info">Username:</p>
                <p className="rf_data">{val.USERNAME}</p>
                <p className="reg_form_list_info">Child's Name:</p>
                <p className="rf_data">
                  {val.CHILD_GIVEN_NAME} {val.CHILD_MIDDLE_NAME}{" "}
                  {val.CHILD_SURNAME}
                </p>
                <p className="reg_form_list_info">Father's Name:</p>
                <p className="rf_data">
                  {val.FATHER_GIVEN_NAME} {val.FATHER_MIDDLE_NAME}{" "}
                  {val.FATHER_SURNAME}
                </p>
                <p className="reg_form_list_info">Father's Birthday:</p>
                <p className="rf_data">{val.FATHER_BIRTHDAY}</p>

                <p className="reg_form_list_info">Father's Birthday:</p>
                <p className="rf_data">
                  {val.MOTHER_GIVEN_NAME} {val.MOTHER_MIDDLE_NAME}{" "}
                  {val.MOTHER_SURNAME}
                </p>
                <p className="reg_form_list_info">Father's Birthday:</p>
                <p className="rf_data">{val.FATHER_BIRTHDAY}</p>
                <p className="reg_form_list_info">Guardian's Name:</p>
                <p className="rf_data">
                  {val.GUARDIAN_GIVEN_NAME} {val.GUARDIAN_MIDDLE_NAME}{" "}
                  {val.GUARDIAN_SURNAME}
                </p>
                <p className="reg_form_list_info">Guardian Contact:</p>
                <p className="rf_data">{val.GUARDIAN_CONTACT}</p>
                <p className="reg_form_list_info">First Sibling:</p>
                <p className="rf_data">{val.FIRST_SIBLING}</p>
                <p className="reg_form_list_info">Second Sibling:</p>
                <p className="rf_data">{val.SECOND_SIBLING}</p>
                <p className="reg_form_list_info">Third Sibling:</p>
                <p className="rf_data">{val.THIRD_SIBLING}</p>
                <p className="reg_form_list_info">Address:</p>
                <p className="rf_data">
                  {val.CITY_ADDRESS} {val.REGION_ADDRESS} {val.PROVINCE_ADDRESS}
                </p>
                <p className="reg_form_list_info">
                  Father's Contact/ Landline:
                </p>
                <p className="rf_data">
                  {val.FATHER_CONTACT} {val.FATHER_LANDLINE}
                </p>
                <p className="reg_form_list_info">
                  Mother's Contact/ Landline:
                </p>
                <p className="rf_data">
                  {val.MOTHER_CONTACT} {val.MOTHER_LANDLINE}
                </p>
                <p className="reg_form_list_info">Father's Email:</p>
                <p className="rf_data">{val.FATHER_EMAIL}</p>
                <p className="reg_form_list_info">Mother's Email:</p>
                <p className="rf_data">{val.MOTHER_EMAIL}</p>
                <p className="reg_form_list_info">Monthly Income:</p>
                <p className="rf_data">{val.MONTHLY_INCOME}</p>
                <p className="reg_form_list_info">Father's Occupation:</p>
                <p className="rf_data">{val.FATHER_OCCUPATION}</p>
                <p className="reg_form_list_info">Mother Occupation:</p>
                <p className="rf_data">{val.MOTHER_OCCUPATION}</p>
                <p className="reg_form_list_info">Childs's Birthday:</p>
                <p className="rf_data">{val.CHILD_BIRTHDAY}</p>
                <p className="reg_form_list_info">Sex:</p>
                <p className="rf_data">{val.SEX}</p>
                <p className="reg_form_list_info">School Name:</p>
                <p className="rf_data">{val.SCHOOL_NAME}</p>
                <p className="reg_form_list_info">Year/ Grade Level:</p>
                <p className="rf_data">{val.YEAR_GRADE_LEVEL}</p>
                <p className="reg_form_list_info">School Address:</p>
                <p className="rf_data">{val.SCHOOL_ADDRESS}</p>
                <p className="reg_form_list_info">Cause of Blindness:</p>
                <p className="rf_data">{val.CAUSE_OF_BLINDNESS}</p>
                <p className="reg_form_list_info">Totaly Blind Eyes:</p>
                <p className="rf_data">{val.TOTALY_BLIND_EYES}</p>
                <p className="reg_form_list_info">
                  Totally Blind Additional Disability:
                </p>
                <p className="rf_data">{val.TB_ADD_DISABILITY}</p>
                <p className="reg_form_list_info">Low Vision Eyes:</p>
                <p className="rf_data">{val.LOW_VISION_EYES}</p>
                <p className="reg_form_list_info">
                  Low Vision Additional Disability:
                </p>
                <p className="rf_data">{val.LV_ADD_DISABILITY}</p>
                <p className="reg_form_list_info">Adaptive Lens:</p>
                <p className="rf_data">{val.ADAPTIVE_LENS}</p>
                <p className="reg_form_list_info">Stylus:</p>
                <p className="rf_data">{val.STYLUS}</p>
                <p className="reg_form_list_info">Artificial Eyes:</p>
                <p className="rf_data">{val.ARTIFICIAL_EYES}</p>
                <p className="reg_form_list_info">Computer Screen:</p>
                <p className="rf_data">{val.COMPUTER_SCREEN}</p>
                <p className="reg_form_list_info">White Cane:</p>
                <p className="rf_data">{val.WHITE_CANE}</p>
                <p className="reg_form_list_info">CCTV:</p>
                <p className="rf_data">{val.CCTV}</p>
                <p className="reg_form_list_info">Wheel Chair:</p>
                <p className="rf_data">{val.WHEEL_CHAIR}</p>
                <p className="reg_form_list_info">Large Prints:</p>
                <p className="rf_data">{val.LARGE_PRINTS}</p>
                <p className="reg_form_list_info">Hearing Aid:</p>
                <p className="rf_data">{val.HEARING_AID}</p>
                <p className="reg_form_list_info">Abacus:</p>
                <p className="rf_data">{val.ABACUS}</p>
                <p className="reg_form_list_info">Brailler:</p>
                <p className="rf_data">{val.BRAILLER}</p>
                <p className="reg_form_list_info">Physical Theraphy:</p>
                <p className="rf_data">{val.PHYSICAL_THERAPHY}</p>
                <p className="reg_form_list_info">Otccupational Theraphy:</p>
                <p className="rf_data">{val.OCCUPATIONAL_THERAPHY}</p>
                <p className="reg_form_list_info">Speech Theraphy:</p>
                <p className="rf_data">{val.SPEECH_THERAPHY}</p>
                <p className="reg_form_list_info">Other Condition:</p>
                <p className="rf_data">{val.OTHER_CONDITION}</p>
              </div>
            );
          })}
          <Link to="/" className="form_reg_btn">
            Go Back to Homepage
          </Link>
        </div>
      </div>
      <div className="beforeCont" id="beforeCont">
        <div className="regOuter">
          <div className="formRegContent">
            <div className="regBox">
              <div className="regCont">
                {/* <p className="regTitle">Registration</p> */}
                <div className="regUserData" id="regUserId">
                  <p className="registrationTitleAccount">Create Account</p>
                  <p className="registrationSubtitleAccount">
                    (Gumawa ng account)
                  </p>
                  <div className="userInpPassUser">
                    <div className="inputUsernameBox">
                      <p className="usernameTxt">Username:</p>
                      <input
                        type="text"
                        id="regUsername"
                        className="regInputUsername"
                        placeholder="Enter username"
                        onKeyUp={usernameKeyUp}
                        onChange={(e) => {
                          setUsernameReg(e.target.value);
                        }}
                        required
                      />
                      <p className="instructions">
                        (Consist of letters and numbers)
                      </p>
                      <div className="usernameMessages">
                        <p id="validUsername" className="validUsername">
                          Valid Username
                        </p>
                        <p id="invalidUserName" className="invalidUserName">
                          Sorry, your username must be between 6-30 characters
                          long
                        </p>
                      </div>
                    </div>
                    <div className="inputPassBox">
                      <p className="passwordTxt">Password:</p>
                      <input
                        type="password"
                        id="regPass"
                        className="inputRegPass"
                        placeholder="Enter password"
                        onKeyUp={passKeyUp}
                        onChange={(e) => {
                          setPasswordReg(e.target.value);
                        }}
                      />
                      <p className="passInstructions">
                        (Consist of letters, numbers, and special characters
                        (!@#$%^&*) 8 to 16 characters only)
                      </p>
                      <div className="regPassMessages">
                        <p id="weakPass" className="invalidPass">
                          Weak Password
                        </p>
                        <p id="strongPass" className="validPass">
                          Strong Password
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------------------------------------------------- */}
                <div className="ChildFamilyBox" id="childFamId">
                  <div className="ChildDataCont">
                    <p className="registrationTitleAccount">
                      Child & Family Personal Data
                    </p>
                    <p className="registrationSubtitleAccount">
                      (Personal na Datos ng Bata at ng Pamilya)
                    </p>
                    <div className="childFamOuter">
                      <div className="childsName">
                        <div className="childSurnameBox">
                          <p className="childNameLabel">Child's Surname: </p>
                          <input
                            type="text"
                            placeholder="Enter Family Name"
                            className="inputChildSurname"
                            id="inputChildSurname"
                            onKeyUp={passChildSur}
                            onChange={(e) => {
                              setCHILD_SURNAME(e.target.value);
                            }}
                          />

                          <div className="usernameMsg" id="usernameMsg">
                            <p
                              id="invalidchildSurname"
                              className="invalidchildSurname"
                            >
                              Please enter surname
                            </p>
                          </div>
                        </div>

                        <div className="childNameBox">
                          <p className="childNameLabel">Child's Name: </p>
                          <input
                            type="text"
                            placeholder="Enter Given Name"
                            className="inputChildGivenName"
                            id="inputChildGivenNameId"
                            onKeyUp={childNameKey}
                            onChange={(e) => {
                              setCHILD_GIVEN_NAME(e.target.value);
                            }}
                          />
                          <div className="usernameNameMsg">
                            <p
                              id="invalidchildName"
                              className="invalidchildName"
                            >
                              Please enter name
                            </p>
                          </div>
                        </div>

                        <div className="childMiddleNameBox">
                          <p className="childNameLabel">Child's Middlename: </p>
                          <input
                            type="text"
                            placeholder="Enter Middle Name"
                            className="inputChildMiddleName"
                            onChange={(e) => {
                              setCHILD_MIDDLE_NAME(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="fatherSec">
                      <div className="fatherSurnameBox">
                        <p className="fatherLabel">Father's Surname: </p>
                        <input
                          type="text"
                          placeholder="Enter Family Name"
                          className="inputFatherSurname"
                          onChange={(e) => {
                            setFATHER_SURNAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="fatherNameBox">
                        <p className="fatherLabel">Father's Name: </p>
                        <input
                          type="text"
                          placeholder="Enter Given Name"
                          className="inputFatherGivenName"
                          onChange={(e) => {
                            setFATHER_GIVEN_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="fatherMiddlenameBox">
                        <p className="fatherLabel">Father's Middlename: </p>
                        <input
                          type="text"
                          placeholder="Enter Middle Name"
                          className="inputFatherMiddleName"
                          onChange={(e) => {
                            setFATHER_MIDDLE_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="fatherBirthdayBox">
                        <p className="fatherLabel">Father's Birthday: </p>
                        <input
                          type="date"
                          className="inputFatherBirthday"
                          id="fBirthday"
                          onChange={(e) => {
                            setFATHER_BIRTHDAY(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="motherCont">
                      <div className="motherSurnameBox">
                        <p className="motherLabel">Mother's Surname: </p>
                        <input
                          type="text"
                          placeholder="Enter Family Name"
                          className="inputMotherSurname"
                          onChange={(e) => {
                            setMOTHER_SURNAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mothernameBox">
                        <p className="motherLabel">Mother's Name: </p>
                        <input
                          type="text"
                          placeholder="Enter Given Name"
                          className="inputMotherfirst"
                          onChange={(e) => {
                            setMOTHER_GIVEN_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="motherMiddlenameBox">
                        <p className="motherLabel">Mother's Middlename: </p>
                        <input
                          type="text"
                          placeholder="Enter Middle Name"
                          className="inputMotherMiddle"
                          onChange={(e) => {
                            setMOTHER_MIDDLE_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="motherBirthdayBox">
                        <p className="motherLabel">Mother's Birthday: </p>
                        <input
                          type="date"
                          id="mBirthday"
                          className="inputMotherBday"
                          onChange={(e) => {
                            setMOTHER_BIRTHDAY(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="guardianInfo">
                      <div className="guardianSurnameBox">
                        <p className="guardianLabel">Guardian Surname</p>
                        <input
                          type="text"
                          placeholder="Enter Family Name"
                          className="guardianFam"
                          onChange={(e) => {
                            setGUARDIAN_SURNAME(e.target.value);
                          }}
                        />
                      </div>

                      <div className="guardiannameBox">
                        <p className="guardianLabel">Guardian Name</p>
                        <input
                          type="text"
                          placeholder="Enter Given Name"
                          className="guardianGivenName"
                          onChange={(e) => {
                            setGUARDIAN_GIVEN_NAME(e.target.value);
                          }}
                        />
                      </div>

                      <div className="guardianMiddlenameBox">
                        <p className="guardianLabel">Guardian Middlename</p>
                        <input
                          type="text"
                          placeholder="Enter Middle Name"
                          className="guardianMiddle"
                          onChange={(e) => {
                            setGUARDIAN_MIDDLE_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="guardianContactBox">
                        <p className="guardianLabel">Guardian Number</p>
                        <input
                          type="tel"
                          placeholder="Enter Contact Number"
                          className="guardianContact"
                          pattern="[0-9]{11}"
                          onChange={(e) => {
                            setGUARDIAN_CONTACT(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="siblingContainer">
                      <div className="firstSibBox">
                        <p className="sibLabel">Sibling Name</p>
                        <input
                          type="text"
                          className="firstSib"
                          placeholder="Enter Full Name"
                          onChange={(e) => {
                            setFIRST_SIBLING(e.target.value);
                          }}
                        />
                      </div>

                      <div className="secSibBox">
                        <p className="sibLabel">Sibling Name</p>
                        <input
                          type="text"
                          className="secSib"
                          placeholder="Enter Full Name"
                          onChange={(e) => {
                            setSECOND_SIBLING(e.target.value);
                          }}
                        />
                      </div>
                      <div className="thirdSibBox">
                        <p className="sibLabel">Sibling Name</p>
                        <input
                          type="text"
                          className="thirdSib"
                          placeholder="Enter Full Name"
                          onChange={(e) => {
                            setTHIRD_SIBLING(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="addressCont">
                      <div className="cityBox">
                        <p className="addressLable">City</p>
                        <input
                          type="text"
                          className="city"
                          id="city"
                          onKeyUp={cityKey}
                          placeholder="Enter City"
                          onChange={(e) => {
                            setCITY_ADDRESS(e.target.value);
                          }}
                        />
                      </div>
                      <div className="regionBox">
                        <p className="addressLable">Region</p>
                        <input
                          type="text"
                          className="region"
                          id="region"
                          onKeyUp={regionKey}
                          placeholder="Enter Region"
                          onChange={(e) => {
                            setREGION_ADDRESS(e.target.value);
                          }}
                        />
                      </div>
                      <div className="provinceBox">
                        <p className="addressLable">Province</p>
                        <input
                          type="text"
                          className="province"
                          id="province"
                          onKeyUp={provinceKey}
                          placeholder="Enter Province"
                          onChange={(e) => {
                            setPROVINCE_ADDRESS(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="contactDetails">
                      <div className="fContactNumBox">
                        <p className="contactLable">Father's Contact: </p>
                        <input
                          type="tel"
                          className="fcontact"
                          placeholder="Father's Contact Number"
                          onChange={(e) => {
                            setFATHER_CONTACT(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mContactNumBox">
                        <p className="contactLable">Mother's Contact: </p>
                        <input
                          type="tel"
                          className="mcontact"
                          placeholder="Mother's Contact Number"
                          onChange={(e) => {
                            setMOTHER_CONTACT(e.target.value);
                          }}
                        />
                      </div>
                      <div className="flContactNumBox">
                        <p className="contactLable">Father's Landline: </p>
                        <input
                          type="tel"
                          className="fland"
                          placeholder="Father's Landline Number"
                          onChange={(e) => {
                            setFATHER_LANDLINE(e.target.value);
                          }}
                        />{" "}
                      </div>
                      <div className="mlContactNumBox">
                        <p className="contactLable">Mother's Landline: </p>
                        <input
                          type="tel"
                          className="mland"
                          placeholder="Mother's Landline Number"
                          onChange={(e) => {
                            setMOTHER_LANDLINE(e.target.value);
                          }}
                        />
                      </div>
                      <div className="fEmailBox">
                        <p className="contactLable">Father's Email: </p>
                        <input
                          className="femail"
                          type="email"
                          placeholder="Father's Email Address"
                          onChange={(e) => {
                            setFATHER_EMAIL(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mEmailBox">
                        <p className="contactLable">Mother's Email: </p>
                        <input
                          className="memail"
                          type="email"
                          placeholder="Mother's Email Address"
                          onChange={(e) => {
                            setMOTHER_EMAIL(e.target.value);
                          }}
                        />
                      </div>
                    </div>{" "}
                    <p className="monthlyIncomeTitle">
                      Combined Monthly Income of Father and Mother
                    </p>
                    <div className="monthlyInfo">
                      <input
                        type="radio"
                        name="income"
                        className="below12"
                        value="Below Ph12,000"
                        onChange={(e) => {
                          setMONTHLY_INCOME(e.target.value);
                        }}
                      />
                      <label className="monthlyIncome">Below Ph12,000</label>
                      <input
                        type="radio"
                        className="thirty"
                        name="income"
                        value="Ph12,000-30,000"
                        onChange={(e) => {
                          setMONTHLY_INCOME(e.target.value);
                        }}
                      />
                      <label className="monthlyIncome">Ph12,000-30,000</label>
                      <input
                        type="radio"
                        name="income"
                        className="fifty"
                        value="Ph30,000-50,000"
                        onChange={(e) => {
                          setMONTHLY_INCOME(e.target.value);
                        }}
                      />
                      <label className="monthlyIncome">Ph30,000-50,000</label>
                      <input
                        type="radio"
                        name="income"
                        className="above"
                        value="Above Ph50,000"
                        onChange={(e) => {
                          setMONTHLY_INCOME(e.target.value);
                        }}
                      />
                      <label className="monthlyIncome">Above Ph50,000</label>
                    </div>
                    <div id="monthlyIncomeTitle">
                      Please fill out this field!
                    </div>
                    <div className="occupation">
                      <div className="fOccuBox">
                        <p className="occuLabel">Father's Occupation:</p>
                        <input
                          type="text"
                          className="focc"
                          placeholder="Father's Occupation"
                          onChange={(e) => {
                            setFATHER_OCCUPATION(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mOccuBox">
                        <p className="occuLabel">Mother's Occupation:</p>
                        <input
                          type="text"
                          className="mocc"
                          placeholder="Mother's Occupation"
                          onChange={(e) => {
                            setMOTHER_OCCUPATION(e.target.value);
                          }}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Childs Data */}
                <div className="childsDataBox">
                  <p className="registrationTitleChildsData">Child's Data</p>
                  <p className="registrationSubtitleChildsData">
                    (Datos ng Bata)
                  </p>
                  <div className="cont9">
                    <div className="childBirthdayBox">
                      <p className="childDataLabel">Date of Birth</p>
                      <input
                        type="date"
                        id="childsDOB"
                        onInput={DOBKey}
                        className="inputDobChild"
                        onChange={(e) => {
                          setCHILD_BIRTHDAY(e.target.value);
                        }}
                      />
                    </div>
                    {/* <div id="childBdayMsg">Please fill out this field</div> */}
                    <div className="childSex">
                      <p className="childDataLabel1">Sex:</p>
                      <input
                        type="radio"
                        name="sex"
                        value="Male"
                        className="inputMale"
                        onChange={(e) => {
                          setSEX(e.target.value);
                        }}
                      />

                      <label className="maleTxt">Male</label>
                      <input
                        type="radio"
                        className="inpFem"
                        name="sex"
                        value="Female"
                        onChange={(e) => {
                          setSEX(e.target.value);
                        }}
                      />
                      <label className="femTxt">Female</label>
                    </div>
                    <div id="sexMsg">Please fill out this field</div>
                    <div className="cont10">
                      <div className="schoolBoc">
                        <p className="childDataLabel">School</p>
                        <input
                          className="inpSch"
                          type="text"
                          placeholder="Enter School"
                          onChange={(e) => {
                            setSCHOOL_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="yrLevelBox">
                        <p className="childDataLabel">Year/ Grade Level:</p>
                        <input
                          className="inpYGL"
                          type="text"
                          placeholder="Enter Yr/Grade Level"
                          onChange={(e) => {
                            setYEAR_GRADE_LEVEL(e.target.value);
                          }}
                        />
                      </div>
                      <div className="schoolAddressBox">
                        <p className="childDataLabel">Schoold Address</p>
                        <input
                          type="text"
                          className="inpuSchAdd"
                          placeholder="Enter School Address"
                          onChange={(e) => {
                            setSCHOOL_ADDRESS(e.target.value);
                          }}
                        />
                      </div>
                      <div className="causeBlindnessBox">
                        <p className="childDataLabel">Cause of Blindness</p>
                        <input
                          type="text"
                          className="inpCause"
                          id="causeBlindness"
                          placeholder="Enter Cause of Blindness"
                          onKeyUp={causeBlindness}
                          onChange={(e) => {
                            setCAUSE_OF_BLINDNESS(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="vTitle">Vision</p>
                  <div className="cont12">
                    <p className="visionLabel">Totally Blind</p>
                    <div className="tbOptionBox">
                      <input
                        type="radio"
                        name="tb_option"
                        className=" tbLeft"
                        value="Left"
                        onChange={(e) => {
                          setTOTALY_BLIND_EYES(e.target.value);
                        }}
                      />
                      <label className="leftTbTxt">Left</label>
                      <input
                        type="radio"
                        className="tbRight"
                        name="tb_option"
                        value="Right"
                        onChange={(e) => {
                          setTOTALY_BLIND_EYES(e.target.value);
                        }}
                      />
                      <label className="rightTbTxt">Right</label>
                      <input
                        type="radio"
                        className="bothEyeTb"
                        name="tb_option"
                        value="Both"
                        onChange={(e) => {
                          setTOTALY_BLIND_EYES(e.target.value);
                        }}
                      />

                      <label className="bothTxt">Both: left and Right</label>
                    </div>

                    <p className="visionLabel">
                      Totally Blind with Additional Disabilities:
                    </p>
                    <input
                      type="text"
                      className="inpDisTb"
                      placeholder="Enter Additional Disabilities"
                      onChange={(e) => {
                        setTB_ADD_DISABILITY(e.target.value);
                      }}
                    />
                  </div>
                  <div className="lvBox">
                    <label className="visionLabel">Low Vision</label>
                    <div className="lbOptionBox">
                      <input
                        type="radio"
                        className="lvLeft"
                        name="lv_option"
                        value="Left"
                        onChange={(e) => {
                          setLOW_VISION_EYES(e.target.value);
                        }}
                      />
                      <label className="lvLeftTxt">Left</label>
                      <input
                        type="radio"
                        name="lv_option"
                        className="lvRight"
                        value="Right"
                        onChange={(e) => {
                          setLOW_VISION_EYES(e.target.value);
                        }}
                      />
                      <label className="lvRightTxt">Right</label>
                      <input
                        type="radio"
                        name="lv_option"
                        className="lvBoth"
                        value="Both"
                        onChange={(e) => {
                          setLOW_VISION_EYES(e.target.value);
                        }}
                      />
                      <label className="lvBothTxt">Both: left and Right</label>
                    </div>

                    <label className="visionLabel">
                      Low Vision with Additional Disabilities
                    </label>
                    <input
                      type="text"
                      className="inpAddDislv"
                      placeholder="Enter Additional Disabilities"
                      onChange={(e) => {
                        setLV_ADD_DISABILITY(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* Needs of the child */}
                <div className="needsChildBox" id="needChildId">
                  <div className="NeedsOftheChild">
                    <p className="registrationTitleNeeds ">Child Needs</p>
                    <p className="registrationSubtitleNeeds ">
                      (Pangangailangan ng bata)
                    </p>
                    <div className="arrange">
                      <table
                        className="table1"
                        id="tableNeed"
                        onInput={specialNeedKey}
                      >
                        <tbody>
                          <tr>
                            <th className="NeedsTitle">Special Needs</th>
                            <th className="NeedsTitle">Yes</th>
                            <th className="NeedsTitle">No</th>
                            <th className="NeedsTitle">Learning Tools</th>
                            <th className="NeedsTitle">Yes</th>
                            <th className="NeedsTitle">No</th>
                          </tr>
                          <tr>
                            <td>Adaptive Lens</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="adaptiveLens"
                                onChange={(e) => {
                                  setADAPTIVE_LENS(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="adaptiveLens"
                                onChange={(e) => {
                                  setADAPTIVE_LENS(e.target.value);
                                }}
                              />
                            </td>
                            <td>Stylus</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="stylus"
                                onChange={(e) => {
                                  setSTYLUS(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="stylus"
                                onChange={(e) => {
                                  setSTYLUS(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Artficial Eyes</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="artificialEyes"
                                onChange={(e) => {
                                  setARTIFICIAL_EYES(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="artificialEyes"
                                onChange={(e) => {
                                  setARTIFICIAL_EYES(e.target.value);
                                }}
                              />
                            </td>
                            <td>Computer w/ screen reading program</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="computerScreen"
                                onChange={(e) => {
                                  setCOMPUTER_SCREEN(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="computerScreen"
                                onChange={(e) => {
                                  setCOMPUTER_SCREEN(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>White Cane</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="whiteCane"
                                onChange={(e) => {
                                  setWHITE_CANE(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="whiteCane"
                                onChange={(e) => {
                                  setWHITE_CANE(e.target.value);
                                }}
                              />
                            </td>
                            <td>CCTV</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="CCTV"
                                onChange={(e) => {
                                  setCCTV(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="CCTV"
                                onChange={(e) => {
                                  setCCTV(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Wheel Chair</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="wheelChair"
                                onChange={(e) => {
                                  setWHEEL_CHAIR(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="wheelChair"
                                onChange={(e) => {
                                  setWHEEL_CHAIR(e.target.value);
                                }}
                              />
                            </td>
                            <td>Large Prints</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="largePrints"
                                onChange={(e) => {
                                  setLARGE_PRINTS(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="largePrints"
                                onChange={(e) => {
                                  setLARGE_PRINTS(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Hearing Aid</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="hearingAid"
                                onChange={(e) => {
                                  setHEARING_AID(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="hearingAid"
                                onChange={(e) => {
                                  setHEARING_AID(e.target.value);
                                }}
                              />
                            </td>
                            <td>Abacus</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="abacus"
                                onChange={(e) => {
                                  setABACUS(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="abacus"
                                onChange={(e) => {
                                  setABACUS(e.target.value);
                                }}
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
                                value="Yes"
                                name="brailler"
                                onChange={(e) => {
                                  setBRAILLER(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="brailler"
                                onChange={(e) => {
                                  setBRAILLER(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p id="tableMessage">Please check the form</p>
                      <table
                        className="tableService"
                        id="tableService"
                        onInput={TheraphyKey}
                      >
                        <tbody>
                          <tr>
                            <th className="theraphyService">
                              Theraphy Service
                            </th>
                            <th className="theraphyService">PAVIC Program</th>
                            <th className="theraphyService">Self Pay</th>
                            <th className="theraphyService">No Theraphy</th>
                          </tr>
                          <tr>
                            <td>Physical Theraphy</td>
                            <td>
                              <input
                                type="radio"
                                value="Pavic Program"
                                name="physicalTheraphy"
                                onChange={(e) => {
                                  setPHYSICAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="Self Pay"
                                name="physicalTheraphy"
                                onChange={(e) => {
                                  setPHYSICAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No Theraphy"
                                name="physicalTheraphy"
                                onChange={(e) => {
                                  setPHYSICAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Occupational Theraphy</td>
                            <td>
                              <input
                                type="radio"
                                value="Pavic Program"
                                name="ocupationalTheraphy"
                                onChange={(e) => {
                                  setOCCUPATIONAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="Self Pay"
                                name="ocupationalTheraphy"
                                onChange={(e) => {
                                  setOCCUPATIONAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No Theraphy"
                                name="ocupationalTheraphy"
                                onChange={(e) => {
                                  setOCCUPATIONAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Speech Theraphy</td>
                            <td>
                              <input
                                type="radio"
                                value="Pavic Program"
                                name="speechTherapy"
                                onChange={(e) => {
                                  setSPEECH_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="Self Pay"
                                name="speechTherapy"
                                onChange={(e) => {
                                  setSPEECH_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No Theraphy"
                                name="speechTherapy"
                                onChange={(e) => {
                                  setSPEECH_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p id="tableMessageTheraphy">Please check the form</p>
                      <div className="row">
                        <p className="otherConNeeds">
                          Other Conditions and Needs
                        </p>
                        <textarea
                          className="conditionTxtArea"
                          placeholder="Please Type Here"
                          onChange={(e) => {
                            setOTHER_CONDITION(e.target.value);
                          }}
                        ></textarea>
                        <p className="proofPaymentTxt">
                          Upload proof of Payment
                        </p>
                        <input type="file" className="uploadPayment" />
                        <p className="uploadMessage">
                          Please Upload a Proof of Payment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="registrationBox">
                  <p className="registrationTitleB">
                    Submit Your Registration Form
                  </p>
                  <p className="registrationSubtitle">
                    (Isumite ang Iyong Form sa Pagrehistro)
                  </p>

                  <p onClick={Register} className="RegBtnReg">
                    Register
                  </p>
                  <p className="signinBtn">
                    Have an account?
                    <Link to="/Login" className="loginLink">
                      {" "}
                      Signin
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixedRegNav">
            <div className="regNavCont">
              <p className="titleNavReg">Registration Content</p>
              <p id="regUserIdBtn" onClick={scrollCreateAcc}>
                {/* Child & Family Personal Data */}
                Create Account
              </p>
              <p onClick={scrollChildFam}>Child & Family Personal Data</p>
              <p onClick={scrollChildData}>Child's Data</p>
              <p onClick={scrollChildNeed}>Child Needs</p>
              <p onClick={scrollSubmit}>Submit Form</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footIcon">
            <img
              src="/images/logoIcon.png"
              alt="img"
              className="imgfooterIcon"
            />
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
    </div>
  );
}

export default Registration;
