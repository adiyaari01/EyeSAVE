const express = require("express");
const mongoose = require("mongoose");
const AppError = require("./utils/appError");
const cors = require('cors');

const app = express();
const port = 8000;

mongoose.connect("mongodb://localhost:27017/EyeSAVE_DB");
require("./models");

app.use(express.json());
app.use(cors());

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

app.listen(port, ()=>console.log(`Server is running on port ${port}`));

// Todo: autontication, login, register, secure problems
