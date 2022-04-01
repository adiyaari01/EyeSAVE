const express = require("express");
const mongoose = require("mongoose");
const AppError = require("./utils/appError");
const cors = require('cors');
const { exec } = require("child_process")

const app = express();
const port = process.env.PORT || 8000 

// mongoose.connect("mongodb://localhost:27017/EyeSAVE_DB");
require("./models");

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "public")));
}

// Routes
app.use("/children",require("./routes/children.routes"));
app.use("/escorts",require("./routes/escorts.routes"));
app.use("/staff",require("./routes/staff.routes"));
app.use("/kindergartens",require("./routes/kindergartens.routes"));
app.use("/events",require("./routes/events.routes"));
app.use("/staffAttendance",require("./routes/staffAttendance.routes"));
app.use("/childrenAttendance",require("./routes/childrenAttendance.routes"));

app.all("*",(req,res,next)=>next(new AppError("request is not found", 404)));
// middleware erros manager
app.use(require("./controllers/error.controller"));

// exec("python ./EyeSAVE_attendance_python/main.py", (err, stdout, stderr) => {
//     if (err) {
//         console.error(`exec error: ${err}`);
//         return;
//     }
//     console.log(`${stdout}`);
// });

app.get("/**", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  
app.listen(port, ()=>console.log(`Server is running on port ${port}`));

// Todo: autontication, login, register, secure problems
