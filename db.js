const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const path = require("path");
const nodemailer = require("nodemailer");

const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../images");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("image"), (req, res) => {
//   res.send("Image Uploaded");
// });
const PORT = process.env.PORT || 57230;
// const PORT = process.env.PORT || 3005;
// const storage = multer.diskStorage({})
// const multer = require({ storage: storage });

const mysql = require("mysql");
// const { Children } = require("react");
// const { request } = require("http");
// const { Redirect } = require("react-router");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "perseeption_db",
// });

// app.use(express.static("public_html"));
const db = mysql.createConnection({
  host: "mysql.stackcp.com",
  port: 57230,
  user: "perseeption_db-36352871",
  password: "WA|K^#,sj2!%",
  database: "perseeption_db-36352871",
});
// const db = mysql.createConnection({
//   host: "perseeption.com",
//   user: "perseeption_db-36376157",
//   password: "OzE&;rqt€%7r",
//   database: "perseeption_db-36376157",
// });

// app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "USER_ID",
    secret: "pavicOrg", //organization
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 1000 * 60 * 60 * 24 },
  })
);
// app.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://db.skidax.com/shareddb-d.hosting.stackcp.net"
//   );
//   res.header("Access-Control-Allow-Origin", "Origin, Content-Type, Accept");
//   next();
// });
// app.use(cors());
app.get("/countGenderFemale", (req, res) => {
  const sqlSelect =
    "SELECT COUNT(Sex) AS NumberOfFemale FROM user WHERE SEX = 'Female'";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

const storage_AddMember = multer.diskStorage({
  destination: path.join(
    __dirname,
    "../perseeption/public/images/",
    "memberGcash"
  ),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.post("/uploadGCash", async (req, res) => {
  try {
    // 'avatar' is the name of our file input field in the HTML form

    let upload = multer({ storage: storage_AddMember }).single("image");

    upload(req, res, async function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields

      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      // console.log(req);
      console.log(req.body.USER_PASSWORD);
      const p = req.body.USER_PASSWORD;
      const bcrypt_pass = await bcrypt.hash(p, saltRounds);
      const event_details = {
        USERNAME: req.body.USERNAME,
        USER_PASSWORD: bcrypt_pass,

        CHILD_SURNAME: req.body.CHILD_SURNAME,
        CHILD_GIVEN_NAME: req.body.CHILD_GIVEN_NAME,
        CHILD_MIDDLE_NAME: req.body.CHILD_MIDDLE_NAME,

        FATHER_SURNAME: req.body.FATHER_SURNAME,
        FATHER_GIVEN_NAME: req.body.FATHER_GIVEN_NAME,
        FATHER_MIDDLE_NAME: req.body.FATHER_MIDDLE_NAME,

        FATHER_CONTACT: req.body.FATHER_CONTACT,
        FATHER_EMAIL: req.body.FATHER_EMAIL,
        FATHER_BIRTHDAY: req.body.FATHER_BIRTHDAY,
        FATHER_OCCUPATION: req.body.FATHER_OCCUPATION,

        MOTHER_SURNAME: req.body.MOTHER_SURNAME,
        MOTHER_GIVEN_NAME: req.body.MOTHER_GIVEN_NAME,
        MOTHER_MIDDLE_NAME: req.body.MOTHER_MIDDLE_NAME,

        MOTHER_CONTACT: req.body.MOTHER_CONTACT,
        MOTHER_EMAIL: req.body.MOTHER_EMAIL,
        MOTHER_BIRTHDAY: req.body.MOTHER_BIRTHDAY,
        MOTHER_OCCUPATION: req.body.MOTHER_OCCUPATION,

        //
        GUARDIAN_SURNAME: req.body.GUARDIAN_SURNAME,
        GUARDIAN_GIVEN_NAME: req.body.GUARDIAN_GIVEN_NAME,
        GUARDIAN_MIDDLE_NAME: req.body.GUARDIAN_MIDDLE_NAME,
        GUARDIAN_CONTACT: req.body.GUARDIAN_CONTACT,

        MOTHER_LANDLINE: req.body.MOTHER_LANDLINE,
        FATHER_LANDLINE: req.body.FATHER_LANDLINE,

        FIRST_SIBLING: req.body.FIRST_SIBLING,
        SECOND_SIBLING: req.body.SECOND_SIBLING,
        THIRD_SIBLING: req.body.THIRD_SIBLING,

        CITY_ADDRESS: req.body.CITY_ADDRESS,
        REGION_ADDRESS: req.body.REGION_ADDRESS,
        PROVINCE_ADDRESS: req.body.PROVINCE_ADDRESS,

        MONTHLY_INCOME: req.body.MONTHLY_INCOME,

        CHILD_BIRTHDAY: req.body.CHILD_BIRTHDAY,
        SEX: req.body.SEX,
        SCHOOL_NAME: req.body.SCHOOL_NAME,
        SCHOOL_ADDRESS: req.body.SCHOOL_ADDRESS,
        YEAR_GRADE_LEVEL: req.body.YEAR_GRADE_LEVEL,
        CAUSE_OF_BLINDNESS: req.body.CAUSE_OF_BLINDNESS,
        TOTALY_BLIND_EYES: req.body.TOTALY_BLIND_EYES,
        TB_ADD_DISABILITY: req.body.TB_ADD_DISABILITY,
        LOW_VISION_EYES: req.body.LOW_VISION_EYES,
        LV_ADD_DISABILITY: req.body.LV_ADD_DISABILITY,
        STYLUS: req.body.STYLUS,
        ARTIFICIAL_EYES: req.body.ARTIFICIAL_EYES,
        COMPUTER_SCREEN: req.body.COMPUTER_SCREEN,
        WHITE_CANE: req.body.WHITE_CANE,
        CCTV: req.body.CCTV,
        WHEEL_CHAIR: req.body.WHEEL_CHAIR,
        LARGE_PRINTS: req.body.LARGE_PRINTS,
        HEARING_AID: req.body.HEARING_AID,
        ABACUS: req.body.ABACUS,
        BRAILLER: req.body.BRAILLER,
        PHYSICAL_THERAPHY: req.body.PHYSICAL_THERAPHY,
        OCCUPATIONAL_THERAPHY: req.body.OCCUPATIONAL_THERAPHY,
        SPEECH_THERAPHY: req.body.SPEECH_THERAPHY,
        OTHER_CONDITION: req.body.OTHER_CONDITION,

        GCASH_IMAGE: "images/eventImage/" + "" + req.file.filename,
      };

      console.log(event_details);
      const sql = "INSERT INTO user SET ?";
      db.query(sql, event_details, (err, results) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
});

const storage_eventImg = multer.diskStorage({
  destination: path.join(
    __dirname,
    "../perseeption/public/images/",
    "eventImage"
  ),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.post("/uploadEvent", async (req, res) => {
  try {
    // 'avatar' is the name of our file input field in the HTML form

    let upload = multer({ storage: storage_eventImg }).single("image");

    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields

      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      // console.log(req);
      const event_details = {
        EVENT_IMAGE: "images/eventImage/" + "" + req.file.filename,
        EVENT_TITLE: req.body.title,
        EVENT_CONTENT: req.body.content,
      };

      console.log(event_details);
      const sql = "INSERT INTO admin_events SET ?";
      db.query(sql, event_details, (err, results) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
});

const storage = multer.diskStorage({
  destination: path.join(
    __dirname,
    "../perseeption/public/images/",
    "announcementImg"
  ),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.post("/imageupload", async (req, res) => {
  try {
    // 'avatar' is the name of our file input field in the HTML form

    let upload = multer({ storage: storage }).single("image");

    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields

      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      // console.log(req);
      const announcement_details = {
        ANNOUNCEMENT_IMAGE: "images/announcementImg/" + "" + req.file.filename,
        ANNOUNCEMENT_TITLE: req.body.title,
        ANNOUNCEMENT_CONTENT: req.body.content,
      };

      console.log(announcement_details);
      const sql = "INSERT INTO admin_announcement SET ?";
      db.query(sql, announcement_details, (err, results) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/insertAnnouncement", (req, res) => {
  const ANNOUNCEMENT_TITLE = req.body.ANNOUNCEMENT_TITLE;
  const ANNOUNCEMENT_CONTENT = req.body.ANNOUNCEMENT_CONTENT;
  const USER_ID = req.body.USER_ID;

  const sqlInsert =
    // "INSERT INTO admin_announcement (ANNOUNCEMENT_TITLE, ANNOUNCEMENT_CONTENT) VALUES (?,?)";
    "INSERT INTO  admin_announcement (ANNOUNCEMENT_TITLE, ANNOUNCEMENT_CONTENT, USER_ID) VALUES (?,?, (SELECT USER_ID FROM user WHERE USER_ID=?))";
  db.query(
    sqlInsert,
    [ANNOUNCEMENT_TITLE, ANNOUNCEMENT_CONTENT, USER_ID],
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/sendtoEmail", (req, res) => {
  const EmailContact = req.body.EmailContact;
  const Subject = req.body.Subject;
  const ContactUsMsg = req.body.ContactUsMsg;

  console.log(EmailContact);
  console.log(Subject);
  console.log(ContactUsMsg);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "perseeption2021@gmail.com",
      pass: "Perseeption2021!",
    },
  });

  const mailOptions = {
    from: "perseeption2021@gmail.com",
    to: EmailContact,
    subject: Subject,
    text: ContactUsMsg,
  };
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
});

app.post("/insertNewAdmin", async (req, res) => {
  const ADMIN_NAME = req.body.ADMIN_NAME;
  const ADMIN_CONTACT = req.body.ADMIN_CONTACT;
  const ADMIN_EMAIL = req.body.ADMIN_EMAIL;
  const ADMIN_ADDRESS = req.body.ADMIN_ADDRESS;
  const USERNAME = req.body.USERNAME;

  const p = req.body.USER_PASSWORD;

  const USER_PASSWORD = await bcrypt.hash(p, saltRounds);

  const USER_TYPE = "Admin";
  const USER_REQUEST = "Approve";

  // const USER_ID = req.body.USER_ID;

  const sqlInsertNewAdmin =
    // "INSERT INTO admin_announcement (ANNOUNCEMENT_TITLE, ANNOUNCEMENT_CONTENT) VALUES (?,?)";
    "INSERT INTO  user (USERNAME, USER_PASSWORD, USER_REQUEST, USER_TYPE, ADMIN_NAME, ADMIN_ADDRESS, ADMIN_CONTACT, ADMIN_EMAIL) VALUES (?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsertNewAdmin,
    [
      USERNAME,
      USER_PASSWORD,
      USER_REQUEST,
      USER_TYPE,
      ADMIN_NAME,
      ADMIN_ADDRESS,
      ADMIN_CONTACT,
      ADMIN_EMAIL,
    ],
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/insertContactUsMsg", (req, res) => {
  const contact_name = req.body.contact_name;
  const contact_number = req.body.contact_number;
  const contact_email = req.body.contact_email;
  const contact_message = req.body.contact_message;

  // const USER_ID = req.body.USER_ID;
  console.log(contact_name);
  console.log(contact_number);
  console.log(contact_email);
  console.log(contact_message);

  const sqlInsertMsg =
    // "INSERT INTO admin_announcement (ANNOUNCEMENT_TITLE, ANNOUNCEMENT_CONTENT) VALUES (?,?)";
    "INSERT INTO contact_us (contact_name, contact_number, contact_email, contact_message) VALUES (?,?,?,?)";
  db.query(
    sqlInsertMsg,
    [contact_name, contact_number, contact_email, contact_message],
    (err, result) => {
      res.send(result);
    }
  );
});

//------

app.post("/insertForum", (req, res) => {
  const FORUM_TITLE = req.body.FORUM_TITLE;
  const FORUM_CONTENT = req.body.FORUM_CONTENT;
  const USER_ID = req.body.USER_ID_;
  console.log(USER_ID);
  const sqlInsert =
    "INSERT INTO  forum_content (FORUM_TITLE, FORUM_CONTENT, USER_ID) VALUES (?,?, ?)";
  db.query(sqlInsert, [FORUM_TITLE, FORUM_CONTENT, USER_ID], (err, result) => {
    res.send(result);
  });
});

app.get("/api/getForum", (req, res) => {
  const sqlSelect =
    "SELECT forum_content.*, forum_content.USER_ID, user.ADMIN_NAME FROM forum_content INNER JOIN user on forum_content.USER_ID=user.USER_ID";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/api/getForumTop", (req, res) => {
  const sqlSelect =
    "SELECT * FROM forum_content ORDER BY FORUM_ID DESC LIMIT 3";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

// ("SELECT FROM forum_content ORDER BY EVENT_ID DESC LIMIT 3");
//DELETE
app.delete("/api/deleteQuestion/:FORUM_ID", (req, res) => {
  const FORUM_ID = req.params.FORUM_ID;
  console.log(FORUM_ID);
  const sqlDelete = "DELETE FROM forum_reply WHERE FORUM_ID = ?";

  db.query(sqlDelete, FORUM_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });

  const sqlDelete_ = "DELETE FROM forum_content WHERE FORUM_ID = ?";

  db.query(sqlDelete_, FORUM_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/insertForumReply/:FORUM_ID", (req, res) => {
  // const FORUM_TITLE = req.body.FORUM_TITLE;
  const FORUM_REPLY_CONTENT = req.body.FORUM_REPLY_CONTENT;
  console.log(FORUM_REPLY_CONTENT);
  const FORUM_ID_ = req.params.FORUM_ID;
  console.log(FORUM_ID_);
  const USER_ID = req.body.USER_ID;
  console.log(USER_ID);
  const sqlInsert =
    // "INSERT INTO admin_announcement (ANNOUNCEMENT_TITLE, ANNOUNCEMENT_CONTENT) VALUES (?,?)";
    "INSERT INTO forum_reply (FORUM_REPLY_CONTENT, FORUM_ID, USER_ID) VALUES (?, ?, ?)";
  db.query(
    sqlInsert,
    [FORUM_REPLY_CONTENT, FORUM_ID_, USER_ID],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
      console.log(result);
    }
  );
});

app.get("/api/getForumReply_/:FORUM_ID", (req, res) => {
  const FORUM_ID = req.params.FORUM_ID;
  console.log(FORUM_ID);
  const sqlSelect =
    "SELECT forum_reply.*, forum_content.FORUM_ID, user.ADMIN_NAME FROM forum_reply JOIN user ON forum_reply.USER_ID=user.USER_ID JOIN forum_content ON forum_content.FORUM_ID=forum_reply.FORUM_ID WHERE forum_reply.FORUM_ID = ?";
  db.query(sqlSelect, FORUM_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/api/getForumReply", (req, res) => {
  const FORUM_ID = req.params.FORUM_ID;
  console.log(FORUM_ID);
  const sqlSelect =
    "SELECT forum_reply.*, user.ADMIN_NAME FROM forum_reply INNER JOIN forum_content ON forum_reply.FORUM_ID=forum_content.FORUM_ID INNER JOIN user ON forum_content.USER_ID=user.USER_ID ";
  db.query(sqlSelect, FORUM_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      console.log(result);
    }
  });
});

//--------------------Main Events-------------------------
app.get("/api/getMainEvent", (req, res) => {
  const sqlSelect =
    "SELECT EVENT_TITLE, EVENT_IMAGE, EVENT_CONTENT, DATE_FORMAT(EVENT_DATE, '%Y-%m-%d') as EVENT_DATE FROM admin_events ORDER BY EVENT_ID DESC LIMIT 3";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

//-----------------

app.get("/api/getMemberAnnouncement", (req, res) => {
  const sqlSelect =
    "SELECT ANNOUNCEMENT_ID, ANNOUNCEMENT_TITLE, ANNOUNCEMENT_IMAGE,ANNOUNCEMENT_CONTENT, DATE_FORMAT(ANNOUNCEMENT_DATE, '%Y-%m-%d') as ANNOUNCEMENT_DATE FROM admin_announcement ORDER BY ANNOUNCEMENT_ID DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.get("/api/getAnnouncement", (req, res) => {
  const sqlSelect =
    "SELECT * FROM  admin_announcement ORDER BY ANNOUNCEMENT_ID DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

//DELETE
app.delete("/api/delete/:ANNOUNCEMENT_ID", (req, res) => {
  const ANNOUNCEMENT_ID = req.params.ANNOUNCEMENT_ID;
  console.log(ANNOUNCEMENT_ID);
  const sqlDelete = "DELETE FROM  admin_announcement WHERE ANNOUNCEMENT_ID = ?";

  db.query(sqlDelete, ANNOUNCEMENT_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// UPDATE
app.put("/api/updateAnnouncementContent", (req, res) => {
  const ANNOUNCEMENT_ID = req.body.ANNOUNCEMENT_ID; // Get the Parameter
  const ANNOUNCEMENT_CONTENT = req.body.ANNOUNCEMENT_CONTENT;
  const sqlUpdate =
    "UPDATE  admin_announcement SET ANNOUNCEMENT_CONTENT = ? WHERE ANNOUNCEMENT_ID = ?";

  db.query(
    sqlUpdate,
    [ANNOUNCEMENT_CONTENT, ANNOUNCEMENT_ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// UPDATE
app.put("/api/updateAnnouncementTitle", (req, res) => {
  const ANNOUNCEMENT_ID = req.body.ANNOUNCEMENT_ID; // Get the Parameter
  const ANNOUNCEMENT_TITLE = req.body.ANNOUNCEMENT_TITLE;
  const sqlUpdate =
    "UPDATE  admin_announcement SET ANNOUNCEMENT_TITLE = ? WHERE ANNOUNCEMENT_ID = ?";

  db.query(sqlUpdate, [ANNOUNCEMENT_TITLE, ANNOUNCEMENT_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// -------------------Events----------------
app.get("/api/getEvent", (req, res) => {
  const sqlSelect = "SELECT * FROM admin_events ORDER BY EVENT_ID DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.get("/api/getMemberEvent", (req, res) => {
  const sqlSelect =
    "SELECT EVENT_ID, EVENT_IMAGE, EVENT_TITLE, EVENT_CONTENT, DATE_FORMAT(EVENT_DATE, '%Y-%m-%d') as EVENT_DATE FROM admin_events ORDER BY EVENT_ID DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.get("/api/getMemberEvent", (req, res) => {
  const sqlSelect =
    "SELECT EVENT_ID, EVENT_TITLE, EVENT_CONTENT, DATE_FORMAT(EVENT_DATE, '%Y-%m-%d') as EVENT_DATE FROM admin_events ORDER BY EVENT_ID DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.get("/api/getMemberEvent", (req, res) => {
  const sqlSelect =
    "SELECT EVENT_ID, EVENT_TITLE, EVENT_CONTENT, DATE_FORMAT(EVENT_DATE, '%Y-%m-%d') as EVENT_DATE FROM admin_events ORDER BY EVENT_ID DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.get("/api/getAdminEvent", (req, res) => {
  const sqlSelect =
    "SELECT EVENT_TITLE, EVENT_CONTENT, DATE_FORMAT(EVENT_DATE, '%Y-%m-%d') as EVENT_DATE FROM admin_events ORDER BY EVENT_ID DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.get("/getContactUsMsg", (req, res) => {
  const sqlSelect = "SELECT * FROM contact_us ORDER BY contact_id DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.get("/getContactUsMsg/:contact_id", (req, res) => {
  const id = req.params.contact_id;
  const sqlSelect = "SELECT * FROM contact_us ORDER BY contact_id =?  DESC";
  db.query(sqlSelect, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.post("/api/insertEvents", (req, res) => {
  const EVENT_TITLE = req.body.EVENT_TITLE;
  const EVENT_CONTENT = req.body.EVENT_CONTENT;
  const USER_ID = req.body.USER_ID;
  console.log(EVENT_TITLE);
  console.log(EVENT_CONTENT);
  console.log(USER_ID);
  const sqlInsert =
    // "INSERT INTO admin_announcement (ANNOUNCEMENT_TITLE, ANNOUNCEMENT_CONTENT) VALUES (?,?)";
    "INSERT INTO admin_events (EVENT_TITLE, EVENT_CONTENT, USER_ID) VALUES (?,?, (SELECT USER_ID FROM user WHERE USER_ID=?))";
  db.query(sqlInsert, [EVENT_TITLE, EVENT_CONTENT, USER_ID], (err, result) => {
    res.send(result);
  });
});

//DELETE
app.delete("/api/deleteEvent/:EVENT_ID", (req, res) => {
  const EVENT_ID = req.params.EVENT_ID;
  console.log(EVENT_ID);
  const sqlDelete = "DELETE FROM admin_events WHERE EVENT_ID = ?";

  db.query(sqlDelete, EVENT_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

//DELETE
app.delete("/deleteAdmin/:USER_ID", (req, res) => {
  const USER_ID = req.params.USER_ID;
  console.log(USER_ID);
  const sqlDelete = "DELETE FROM user WHERE USER_ID = ?";

  db.query(sqlDelete, USER_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

//DELETE
app.delete("/deleteContactUsMsgt/:contact_id", (req, res) => {
  const contact_id = req.params.contact_id;
  console.log(contact_id);
  const sqlDelete = "DELETE FROM contact_us WHERE contact_id = ?";

  db.query(sqlDelete, contact_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

//get info
app.get("/getAdminInformation_/:USER_ID", (req, res) => {
  const USER_ID = req.params.USER_ID;
  console.log(USER_ID);
  const sqlGet = "SELECT * FROM user WHERE USER_ID = ?";

  db.query(sqlGet, USER_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/getAdminInformations_/:contact_id", (req, res) => {
  const contact_id = req.params.contact_id;
  console.log(contact_id);
  const sqlGet = "SELECT * FROM contact_us WHERE contact_id = ?";

  db.query(sqlGet, contact_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/readMoreEvent/:EVENT_ID", (req, res) => {
  const EVENT_ID = req.params.EVENT_ID;
  console.log(EVENT_ID);
  const sqlGet = "SELECT * FROM admin_events WHERE EVENT_ID = ?";

  db.query(sqlGet, EVENT_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/readMoreAnnouncement/:ANNOUNCEMENT_ID", (req, res) => {
  const ANNOUNCEMENT_ID = req.params.ANNOUNCEMENT_ID;
  console.log(ANNOUNCEMENT_ID);
  const sqlGet = "SELECT * FROM admin_announcement WHERE ANNOUNCEMENT_ID = ?";

  db.query(sqlGet, ANNOUNCEMENT_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/readMoreEventBack", (req, res) => {
  const EVENT_ID = req.params.EVENT_ID;
  console.log(EVENT_ID);
  const sqlGet = "SELECT * FROM admin_events";

  db.query(sqlGet, EVENT_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.put("/getAdminInformation_/:USER_ID", (req, res) => {
  const USER_ID = req.body.USER_ID; // Get the Parameter
  const ADMIN_NAME = req.body.ADMIN_NAME;
  const USERNAME = req.body.USERNAME;
  const USER_PASSWORD = req.body.USER_PASSWORD;
  const ADMIN_ADDRESS = req.body.ADMIN_ADDRESS;
  const ADMIN_CONTACT = req.body.ADMIN_CONTACT;
  const ADMIN_EMAIL = req.body.ADMIN_EMAIL;
  console.log(USER_ID);
  // const ADMIN_NAME = req.body.ADMIN_NAME;
  const sqlUpdateInfo = "UPDATE user SET USERNAME = ?  WHERE USER_ID = ?";
  db.query(sqlUpdateInfo, [USERNAME, USER_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

app.get("/getAdminInformation", (req, res) => {
  const sqlSelect = "SELECT * FROM user ORDER BY USER_ID DESC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
    }
  });
});

// UPDATE
app.put("/api/updateEventContent", (req, res) => {
  const EVENT_ID = req.body.EVENT_ID; // Get the Parameter
  const EVENT_CONTENT = req.body.EVENT_CONTENT;
  const sqlUpdate =
    "UPDATE admin_events SET EVENT_CONTENT = ? WHERE EVENT_ID = ?";

  db.query(sqlUpdate, [EVENT_CONTENT, EVENT_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// UPDATE
app.put("/api/updateEventTitle", (req, res) => {
  const EVENT_ID = req.body.EVENT_ID; // Get the Parameter
  const EVENT_TITLE = req.body.EVENT_TITLE;
  const sqlUpdate =
    "UPDATE admin_events SET EVENT_TITLE = ? WHERE EVENT_ID = ?";

  db.query(sqlUpdate, [EVENT_TITLE, EVENT_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// UPDATE
app.put("/api/updateAdminInfo_", async (req, res) => {
  const USER_ID = req.body.USER_ID; // Get the Parameter
  const p = req.body.ADMIN_INFO_PASSWORD;
  console.log(p);
  const ADMIN_INFO_PASSWORD = await bcrypt.hash(p, saltRounds);
  const ADMIN_INFO_USERNAME = req.body.ADMIN_INFO_USERNAME; // Get the Parameter
  const ADMIN_INFO_CONTACT = req.body.ADMIN_INFO_CONTACT;
  const ADMIN_INFO_ADDRESS = req.body.ADMIN_INFO_ADDRESS; // Get the Parameter
  const ADMIN_INFO_NAME = req.body.ADMIN_INFO_NAME;
  const ADMIN_INFO_EMAIL = req.body.ADMIN_INFO_EMAIL; // Get the Parameter
  // "UPDATE admin_events SET USER_PASSWORD =  WHEN USER_PASSWORD IS NOT NULL THEN ? ELSE USER_PASSWORD END, ADMIN_ADDRESS = ?, ADMIN_NAME = ?, ADMIN_CONTACT = ?, ADMIN_EMAIL = ?, USERNAME = ?,  WHERE USER_ID = ?";
  console.log(ADMIN_INFO_NAME);
  console.log(ADMIN_INFO_USERNAME);
  console.log(ADMIN_INFO_ADDRESS);
  console.log(ADMIN_INFO_CONTACT);
  console.log(ADMIN_INFO_NAME);
  console.log(ADMIN_INFO_ADDRESS);
  console.log(ADMIN_INFO_EMAIL);
  const sqlUpdate =
    "UPDATE user SET USER_PASSWORD = ?, USERNAME=?, ADMIN_EMAIL=? , ADMIN_ADDRESS=?, ADMIN_CONTACT=?, ADMIN_NAME=?  WHERE USER_ID = ?";

  db.query(
    sqlUpdate,
    [
      ADMIN_INFO_PASSWORD,
      ADMIN_INFO_USERNAME,
      ADMIN_INFO_EMAIL,
      ADMIN_INFO_ADDRESS,
      ADMIN_INFO_CONTACT,
      ADMIN_INFO_NAME,
      USER_ID,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
});

// INSERT REGISTRATION FORM
app.post("/register", async (req, res) => {
  const USER_ID = req.params.USER_ID;
  const USERNAME = req.body.USERNAME;
  const USER_PASSWORD = req.body.USER_PASSWORD;

  const CHILD_SURNAME = req.body.CHILD_SURNAME;
  const CHILD_GIVEN_NAME = req.body.CHILD_GIVEN_NAME;
  const CHILD_MIDDLE_NAME = req.body.CHILD_MIDDLE_NAME;

  const FATHER_SURNAME = req.body.FATHER_SURNAME;
  const FATHER_GIVEN_NAME = req.body.FATHER_GIVEN_NAME;
  const FATHER_MIDDLE_NAME = req.body.FATHER_MIDDLE_NAME;
  const FATHER_BIRTHDAY = req.body.FATHER_BIRTHDAY;
  //
  console.log(FATHER_BIRTHDAY);
  const MOTHER_SURNAME = req.body.MOTHER_SURNAME;
  const MOTHER_GIVEN_NAME = req.body.MOTHER_GIVEN_NAME;
  const MOTHER_MIDDLE_NAME = req.body.MOTHER_MIDDLE_NAME;
  const MOTHER_BIRTHDAY = req.body.MOTHER_BIRTHDAY;
  //

  const GUARDIAN_SURNAME = req.body.GUARDIAN_SURNAME;
  const GUARDIAN_GIVEN_NAME = req.body.GUARDIAN_GIVEN_NAME;
  const GUARDIAN_MIDDLE_NAME = req.body.GUARDIAN_MIDDLE_NAME;
  const GUARDIAN_CONTACT = req.body.GUARDIAN_CONTACT;
  //

  const FIRST_SIBLING = req.body.FIRST_SIBLING;
  const SECOND_SIBLING = req.body.SECOND_SIBLING;
  const THIRD_SIBLING = req.body.THIRD_SIBLING;

  const CITY_ADDRESS = req.body.CITY_ADDRESS;
  const REGION_ADDRESS = req.body.REGION_ADDRESS;
  const PROVINCE_ADDRESS = req.body.PROVINCE_ADDRESS;

  const FATHER_CONTACT = req.body.FATHER_CONTACT;
  const MOTHER_CONTACT = req.body.MOTHER_CONTACT;
  const FATHER_LANDLINE = req.body.FATHER_LANDLINE;
  const MOTHER_LANDLINE = req.body.MOTHER_LANDLINE;
  const FATHER_EMAIL = req.body.FATHER_EMAIL;
  const MOTHER_EMAIL = req.body.MOTHER_EMAIL;

  const MONTHLY_INCOME = req.body.MONTHLY_INCOME;

  const FATHER_OCCUPATION = req.body.FATHER_OCCUPATION;
  const MOTHER_OCCUPATION = req.body.MOTHER_OCCUPATION;

  const CHILD_BIRTHDAY = req.body.CHILD_BIRTHDAY;
  const SEX = req.body.SEX;

  const SCHOOL_NAME = req.body.SCHOOL_NAME;
  const YEAR_GRADE_LEVEL = req.body.YEAR_GRADE_LEVEL;
  const SCHOOL_ADDRESS = req.body.SCHOOL_ADDRESS;

  const CAUSE_OF_BLINDNESS = req.body.CAUSE_OF_BLINDNESS;

  const TOTALY_BLIND_EYES = req.body.TOTALY_BLIND_EYES;
  const TB_ADD_DISABILITY = req.body.TB_ADD_DISABILITY;
  const LOW_VISION_EYES = req.body.LOW_VISION_EYES;
  const LV_ADD_DISABILITY = req.body.LV_ADD_DISABILITY;

  const ADAPTIVE_LENS = req.body.ADAPTIVE_LENS;
  const STYLUS = req.body.STYLUS;

  const ARTIFICIAL_EYES = req.body.ARTIFICIAL_EYES;
  const COMPUTER_SCREEN = req.body.COMPUTER_SCREEN;

  //
  const WHITE_CANE = req.body.WHITE_CANE;
  const CCTV = req.body.CCTV;

  const WHEEL_CHAIR = req.body.WHEEL_CHAIR;
  const LARGE_PRINTS = req.body.LARGE_PRINTS;

  const HEARING_AID = req.body.HEARING_AID;
  const ABACUS = req.body.ABACUS;

  const BRAILLER = req.body.BRAILLER;

  const PHYSICAL_THERAPHY = req.body.PHYSICAL_THERAPHY;
  const OCCUPATIONAL_THERAPHY = req.body.OCCUPATIONAL_THERAPHY;
  const SPEECH_THERAPHY = req.body.SPEECH_THERAPHY;

  const OTHER_CONDITION = req.body.OTHER_CONDITION;

  const USER_REQUEST = "Pending";
  const USER_TYPE = "Member";
  console.log(OTHER_CONDITION);
  // HASH PASSWORD

  bcrypt.hash(USER_PASSWORD, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    // if (
    //   USERNAME === ""
    // ) {
    //   res.json({
    //     message: "Invalid",
    //   });
    // } else {
    // INSERT QUERY
    const sqlInsertUser =
      "INSERT INTO user ( USERNAME, USER_PASSWORD, CHILD_SURNAME, CHILD_GIVEN_NAME, CHILD_MIDDLE_NAME, FATHER_SURNAME, FATHER_GIVEN_NAME, FATHER_MIDDLE_NAME, FATHER_BIRTHDAY, MOTHER_SURNAME, MOTHER_GIVEN_NAME, MOTHER_MIDDLE_NAME, MOTHER_BIRTHDAY, GUARDIAN_SURNAME, GUARDIAN_GIVEN_NAME,GUARDIAN_MIDDLE_NAME, GUARDIAN_CONTACT, FIRST_SIBLING, SECOND_SIBLING, THIRD_SIBLING, CITY_ADDRESS, REGION_ADDRESS, PROVINCE_ADDRESS, FATHER_CONTACT, MOTHER_CONTACT, FATHER_LANDLINE, MOTHER_LANDLINE, FATHER_EMAIL, MOTHER_EMAIL, MONTHLY_INCOME, FATHER_OCCUPATION, MOTHER_OCCUPATION , CHILD_BIRTHDAY, SEX, SCHOOL_NAME, YEAR_GRADE_LEVEL, SCHOOL_ADDRESS, CAUSE_OF_BLINDNESS, TOTALY_BLIND_EYES, TB_ADD_DISABILITY, LOW_VISION_EYES, LV_ADD_DISABILITY, ADAPTIVE_LENS, STYLUS, ARTIFICIAL_EYES, COMPUTER_SCREEN, WHITE_CANE, CCTV, WHEEL_CHAIR, LARGE_PRINTS, HEARING_AID, ABACUS, BRAILLER, PHYSICAL_THERAPHY, OCCUPATIONAL_THERAPHY, SPEECH_THERAPHY, OTHER_CONDITION, USER_REQUEST, USER_TYPE)" +
      "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(
      sqlInsertUser,
      [
        USERNAME,
        hash,
        CHILD_SURNAME,
        CHILD_GIVEN_NAME,
        CHILD_MIDDLE_NAME,
        FATHER_SURNAME,
        FATHER_GIVEN_NAME,
        FATHER_MIDDLE_NAME,
        FATHER_BIRTHDAY,
        MOTHER_SURNAME,
        MOTHER_GIVEN_NAME,
        MOTHER_MIDDLE_NAME,
        MOTHER_BIRTHDAY,
        GUARDIAN_SURNAME,
        GUARDIAN_GIVEN_NAME,
        GUARDIAN_MIDDLE_NAME,
        GUARDIAN_CONTACT,
        FIRST_SIBLING,
        SECOND_SIBLING,
        THIRD_SIBLING,
        CITY_ADDRESS,
        REGION_ADDRESS,
        PROVINCE_ADDRESS,
        FATHER_CONTACT,
        MOTHER_CONTACT,
        FATHER_LANDLINE,
        MOTHER_LANDLINE,
        FATHER_EMAIL,
        MOTHER_EMAIL,
        MONTHLY_INCOME,
        FATHER_OCCUPATION,
        MOTHER_OCCUPATION,
        CHILD_BIRTHDAY,
        SEX,
        SCHOOL_NAME,
        YEAR_GRADE_LEVEL,
        SCHOOL_ADDRESS,
        CAUSE_OF_BLINDNESS,
        TOTALY_BLIND_EYES,
        TB_ADD_DISABILITY,
        LOW_VISION_EYES,
        LV_ADD_DISABILITY,
        ADAPTIVE_LENS,
        STYLUS,
        ARTIFICIAL_EYES,
        COMPUTER_SCREEN,
        WHITE_CANE,
        CCTV,
        WHEEL_CHAIR,
        LARGE_PRINTS,
        HEARING_AID,
        ABACUS,
        BRAILLER,
        PHYSICAL_THERAPHY,
        OCCUPATIONAL_THERAPHY,
        SPEECH_THERAPHY,
        OTHER_CONDITION,
        USER_REQUEST,
        USER_TYPE,
      ],
      (err, result) => {
        res.send(err);
      }
    );
    // }
  });
});

app.get("/api/getLastMember", (req, res) => {
  const sqlSelect =
    "SELECT * FROM user WHERE USER_ID = (SELECT max(USER_ID) FROM user)";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      console.log(result);
    }
  });
});
// SELECT PENDING USER
app.get("/api/getUpdatedMemberList", (req, res) => {
  const sqlSelect =
    "SELECT USER_ID, USERNAME, CONCAT( FATHER_GIVEN_NAME,' ', FATHER_MIDDLE_NAME,' ',  FATHER_SURNAME ) as FATHER_NAME, CONCAT(MOTHER_GIVEN_NAME,' ', MOTHER_MIDDLE_NAME, ' ', MOTHER_SURNAME ) as MOTHER_NAME,  MOTHER_CONTACT, FATHER_CONTACT, CONCAT(CITY_ADDRESS, ' ', REGION_ADDRESS, ' ', PROVINCE_ADDRESS ) as ADDRESS, DATE_FORMAT(REGISTRATION_DATE, '%Y-%m-%d') as REGISTRATION_DATE,  USER_REQUEST FROM user WHERE USER_REQUEST = 'Pending'";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/api/getUpdatedApproveMemberList", (req, res) => {
  const sqlSelect =
    "SELECT USER_ID, USERNAME, CONCAT( FATHER_GIVEN_NAME,' ', FATHER_MIDDLE_NAME,' ',  FATHER_SURNAME ) as FATHER_NAME, CONCAT(MOTHER_GIVEN_NAME,' ', MOTHER_MIDDLE_NAME, ' ', MOTHER_SURNAME ) as MOTHER_NAME,  MOTHER_CONTACT, FATHER_CONTACT, CONCAT(CITY_ADDRESS, ' ', REGION_ADDRESS, ' ', PROVINCE_ADDRESS ) as ADDRESS, DATE_FORMAT(REGISTRATION_DATE, '%Y-%m-%d') as REGISTRATION_DATE,  USER_REQUEST FROM user WHERE USER_REQUEST = 'Approve' AND USER_TYPE='Member'";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      // console.log(result);
    }
  });
});

// SELECT PENDING USER
app.get("/api/getUser", (req, res) => {
  const sqlSelect =
    "SELECT USER_ID, USERNAME, CONCAT( FATHER_GIVEN_NAME,' ', FATHER_MIDDLE_NAME,' ',  FATHER_SURNAME ) as FATHER_NAME, CONCAT(MOTHER_GIVEN_NAME,' ', MOTHER_MIDDLE_NAME, ' ', MOTHER_SURNAME ) as MOTHER_NAME,  MOTHER_CONTACT, FATHER_CONTACT, CONCAT(CITY_ADDRESS, ' ', REGION_ADDRESS, ' ', PROVINCE_ADDRESS ) as ADDRESS, DATE_FORMAT(REGISTRATION_DATE, '%Y-%m-%d') as REGISTRATION_DATE,  USER_REQUEST FROM user WHERE USER_REQUEST = 'Pending'";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      // console.log(result);
    }
  });
});

// COUNT PENDOING MEMBER
app.get("/api/countReqMember", (req, res) => {
  const sqlSelectPending =
    "SELECT COUNT(*) as Mem FROM user WHERE USER_REQUEST = 'Pending'";
  db.query(sqlSelectPending, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(err);
      res.send(result);
      // console.log(result);
    }
  });
});

//DELETE
app.delete("/api/deleteMemberPending/:USER_ID", (req, res) => {
  const USER_ID = req.params.USER_ID;
  console.log(USER_ID);
  const sqlDelete = "DELETE FROM user WHERE USER_ID = ?";

  db.query(sqlDelete, USER_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// SELECT PENDING USER
app.get("/api/countApproveMember", (req, res) => {
  const sqlSelectPending =
    "SELECT COUNT(*) as Approve FROM user WHERE USER_REQUEST = 'Approve'";
  db.query(sqlSelectPending, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      // console.log(result);
    }
  });
});

// SELECT PENDING USER
app.get("/api/ApprovedMember", (req, res) => {
  const sqlSelectPending =
    "SELECT USER_ID, USERNAME, CONCAT( FATHER_GIVEN_NAME,' ', FATHER_MIDDLE_NAME,' ',  FATHER_SURNAME ) as FATHER_NAME, CONCAT(MOTHER_GIVEN_NAME,' ', MOTHER_MIDDLE_NAME, ' ', MOTHER_SURNAME ) as MOTHER_NAME,  MOTHER_CONTACT, FATHER_CONTACT, CONCAT(CITY_ADDRESS, ', ', REGION_ADDRESS, ', ', PROVINCE_ADDRESS ) as ADDRESS, DATE_FORMAT(REGISTRATION_DATE, '%Y-%m-%d') as REGISTRATION_DATE,  USER_REQUEST FROM user WHERE USER_REQUEST = 'Approve' AND USER_TYPE = 'Member'";
  db.query(sqlSelectPending, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      // console.log(result);
    }
  });
});

//DELETE
app.delete("/api/deleteMemberApprove/:USER_ID", (req, res) => {
  const USER_ID = req.params.USER_ID;
  console.log(USER_ID);
  const sqlDeleteApprove = "DELETE FROM user WHERE USER_ID = ?";

  db.query(sqlDeleteApprove, USER_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// UPDATE PENDING
app.put("/api/approvePendingMember", (req, res) => {
  const USER_ID = req.body.USER_ID; // Get the Parameter
  const USER_REQUEST = "Approve";
  const sqlUpdate = "UPDATE user SET USER_REQUEST = ? WHERE USER_ID = ?";

  console.log(USER_ID);
  db.query(sqlUpdate, [USER_REQUEST, USER_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// SELECT ADMIN
app.get("/api/AdminList", (req, res) => {
  const sqlSelectPending =
    "SELECT USER_ID, USERNAME, CONCAT( FATHER_GIVEN_NAME,' ', FATHER_MIDDLE_NAME,' ',  FATHER_SURNAME ) as FATHER_NAME, CONCAT(MOTHER_GIVEN_NAME,' ', MOTHER_MIDDLE_NAME, ' ', MOTHER_SURNAME ) as MOTHER_NAME,  MOTHER_CONTACT, FATHER_CONTACT, CONCAT(CITY_ADDRESS, ', ', REGION_ADDRESS, ', ', PROVINCE_ADDRESS ) as ADDRESS, DATE_FORMAT(REGISTRATION_DATE, '%Y-%m-%d') as REGISTRATION_DATE,  USER_REQUEST FROM user WHERE USER_TYPE = 'Admin'";
  db.query(sqlSelectPending, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      // console.log(result);
    }
  });
});

// SELECT ADMIN
app.get("/AdminList", (req, res) => {
  const sqlSelectPending =
    "SELECT USER_ID, USERNAME,ADMIN_ADDRESS, ADMIN_CONTACT,  USER_REQUEST, ADMIN_EMAIL, DATE_FORMAT(REGISTRATION_DATE, '%Y-%m-%d') as REGISTRATION_DATE FROM user WHERE USER_TYPE = 'Admin'";
  db.query(sqlSelectPending, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(err);
      res.send(result);
      // console.log(result);
    }
  });
});

app.get("/loginForum", (req, res) => {
  if (req.session.user) {
    const sqlInsert =
      // "INSERT INTO admin_announcement (ANNOUNCEMENT_TITLE, ANNOUNCEMENT_CONTENT) VALUES (?,?)";
      "INSERT INTO forum_content (FORUM_TITLE, FORUM_CONTENT, USER_ID) VALUES (?,?, (SELECT USER_ID FROM user WHERE USER_ID=?))";
    db.query(
      sqlInsert,
      [FORUM_TITLE, EVENT_CONTENT, USER_ID],
      (err, result) => {
        res.send(result);
      }
    );
    console.log(res);
  } else {
    res.send({ loggedIn: false });
    // return res.redirect("/");
  }
});

// VERIFY
app.get("/login", (req, res) => {
  // console.log(res);
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
    console.log(req.session.user);
  } else {
    res.send({ loggedIn: false });
    // return res.redirect("/");
  }
});

// VERYFY TOKEN
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("Dont have token");
  } else {
    jwt.verify(token, "pavicOrg", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "u failed to authenticate" });
      } else {
        req.mainId = decoded.USER_ID;
        next();
      }
    });
  }
};

// LOGOUT;
// app.get("/logout", (req, res) => {
//   // if (req.session.user) {
//   //   res.send({ loggedIn: false, user: req.session.user });
//   // }
//   // jwt.sign();
//   res.clearCookie("USER_ID");
//   console.log(req);

//   // const token = jwt.sign("USER_ID", "pavicOrg", { expiresIn: 10 * 100 }); //5mins
//   // const token = req.cookies.token;
//   // res.clearCookie("USER_ID");
//   // res.clearCookie(cookie, "");
//   // const token = jwt.sign({ USER_ID }, "pavicOrg", { expiresIn: 300 }); //5mins
//   req.session.destroy();
//   // const USER_ID = res[0].USER_ID;
//   // const token = jwt.sign({ USER_ID }, "pavicOrg", { expiresIn: 0 });
//   // res.send({ loggedIn: false, user: req.session.user });
//   res.send("log out!");
//   // res.clearCookie("USER_ID");
//   // res.redirect("https://google.com");
//   // const cookie = req.cookies;

//   // console.log(cookie);
//   // res.cookie(prop, "", { expires: new Date(0) });
//   // return res.redirect("/");
// });

app.get("/logout", async (req, res) => {
  console.log(req.session.user);
  if (req.session.user) {
    res.send({ loggedIn: false });
    req.session.destroy();
    // console.log(req.session.user);
  } else {
    res.json({ res: "ERROR", message: "User is not logged in." });
  }
});

// app.put("/api/logout", authToken, (req, res) => {
//   const token = req.headers["x-access-token"];
//   jwt.sign({ USER_ID }, "", { expiresIn: 1 }, (logout, err) => {
//     if (logout) {
//       res.send({ msg: "You have been Logged Out" });
//     } else {
//       res.send({ msg: "Error" });
//     }
//   });
// });

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("Authenticated");
});

// SELECT LOGIN
app.post("/login", async (req, res) => {
  const USERNAME = req.body.USERNAME;
  const USER_PASSWORD = req.body.USER_PASSWORD;

  const sqlInsertUser = `SELECT * FROM user WHERE USERNAME = ? AND USER_REQUEST = "Approve"`;
  db.query(sqlInsertUser, USERNAME, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(
        USER_PASSWORD,
        result[0].USER_PASSWORD,
        (error, response) => {
          if (response) {
            // req.session.user = result;
            // console.log(req.session.user);

            const USER_ID = result[0].USER_ID;
            // console.log(USERNAME);
            const token = jwt.sign({ USER_ID }, "pavicOrg", {
              expiresIn: 24 * 60 * 60 * 1000,
            }); //5mins
            // console.log(USER_PASSWORD);
            req.session.user = result;
            // console.log(USER_PASSWORD);
            res.json({
              auth: true,
              token: token,
              result: result,
              message: "You're Logged In!",
            });
            // console.log(result[0].USER_PASSWORD);
            // res.send(result);
          } else {
            res.json({
              auth: false,
              message: "Wrong username and password combination",
            });

            // res.send({ message: "Wrong username and password combination" });
          }
        }
      );
    } else {
      res.json({ auth: false, message: "No user exist!" });
      // res.send({ message: "User doesn't exist" });
    }
  });
});

function sendEmail(email, token, USER_ID) {
  var email = email;
  var USER_ID = USER_ID;
  var token = token;
  console.log(token);
  console.log(USER_ID);
  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "perseeption2021@gmail.com", // Your email id
      pass: "Perseeption2021!", // Your password
    },
  });
  var mailOptions = {
    from: "perseeption2021@gmail.com",
    to: email,
    subject: "Reset Password Link - Perseeption.com",
    html:
      '<p>You requested for reset password, kindly use this <a href="http://perseeption.com/resetpassword/' +
      USER_ID +
      "/" +
      token +
      '">link</a> to reset your password</p>',
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
}

app.post("/resetPassword", (req, resu) => {
  const email = req.body.ForgotEmail;

  console.log(email);

  const sqlSelectUser = `SELECT * FROM user WHERE MOTHER_EMAIL =? AND USER_REQUEST = "Approve"`;

  db.query(sqlSelectUser, email, (err, res) => {
    if (err) {
      console.log(err);
    }

    if (res.length > 0) {
      const USER_ID = res[0].USER_ID;
      const MOTHER_EMAIL = res[0].MOTHER_EMAIL;
      var token = jwt.sign({ USER_ID }, "pavicOrg", { expiresIn: "1s" }); //5mins
      var sent = sendEmail(email, token, USER_ID);
      console.log(token);

      if (sent !== "0") {
        var data = {
          TOKEN: token,
        };
        console.log(data);
        console.log(USER_ID);
        const sqlUpdate = "UPDATE user SET ? WHERE MOTHER_EMAIL = ? ";
        db.query(sqlUpdate, [data, MOTHER_EMAIL], (err, result) => {
          if (err) {
            console.log(err);
          } else {
            resu.send({
              message:
                "The reset password link has been sent to your email address",
            });
          }
        });
      }
    } else {
      resu.send({ message: "Email not found" });
      console.log("hehehe");
    }
  });
});

app.get("/resetpassword/:USER_ID/:TOKEN", (req, res) => {
  const TOKEN = req.params.TOKEN;
  // res.send(req.params);
  console.log("hi" + TOKEN);
});

// app.get("/resetpassword", function (req, res, next) {
//   res.render("reset-password", {
//     title: "Reset Password Page",
//     token: req.params.token,
//   });
//   console.log(req.params.token);
// });

app.post("/resetpassword/:USER_ID/:TOKEN", (req, res) => {
  var USER_ID = req.params.USER_ID;
  var TOKEN = req.params.TOKEN;
  var forgotPass = req.body.forgotPass;
  console.log(USER_ID);
  console.log(TOKEN);
  console.log(forgotPass);

  const sqlSelect = "SELECT * FROM user WHERE USER_ID =?";

  db.query(sqlSelect, USER_ID, async (err, res) => {
    if (err) {
      console.log(err);
    }

    if (res.length > 0) {
      // const pass = res[0].USER_PASSWORD;
      var p = await bcrypt.hash(forgotPass, saltRounds);
      var data = {
        USER_PASSWORD: p,
        // TOKEN: TOKEN,
      };

      const updatePass = "UPDATE user SET ? WHERE USER_ID=?";
      db.query(updatePass, [data, USER_ID], (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Your password has been updated successfully");
        }
      });
    } else {
      console.log("go");
    }
  });
});

// function sendEmail(email, token) {
//   var email = email;
//   var token = token;
//   var mail = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "", // Your email id
//       pass: "", // Your password
//     },
//   });
//   var mailOptions = {
//     from: "tutsmake@gmail.com",
//     to: email,
//     subject: "Reset Password Link - Tutsmake.com",
//     html:
//       '<p>You requested for reset password, kindly use this <a href="http://localhost:4000/reset-password?token=' +
//       token +
//       '">link</a> to reset your password</p>',
//   };
//   mail.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(1);
//     } else {
//       console.log(0);
//     }
//   });
// }

// app.post("/reset-password-email", function (req, res, next) {
//   var email = req.body.email;
//   //console.log(sendEmail(email, fullUrl));
//   connection.query(
//     'SELECT * FROM users WHERE email ="' + email + '"',
//     function (err, result) {
//       if (err) throw err;
//       var type = "";
//       var msg = "";
//       console.log(result[0]);
//       if (result[0].email.length > 0) {
//         var token = randtoken.generate(20);
//         var sent = sendEmail(email, token);
//         if (sent != "0") {
//           var data = {
//             token: token,
//           };
//           connection.query(
//             'UPDATE users SET ? WHERE email ="' + email + '"',
//             data,
//             function (err, result) {
//               if (err) throw err;
//             }
//           );
//           type = "success";
//           msg = "The reset password link has been sent to your email address";
//         } else {
//           type = "error";
//           msg = "Something goes to wrong. Please try again";
//         }
//       } else {
//         console.log("2");
//         type = "error";
//         msg = "The Email is not registered with us";
//       }
//       // req.flash(type, msg);
//       res.redirect("/");
//     }
//   );
// });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     req.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`); //localhost:3001
});
