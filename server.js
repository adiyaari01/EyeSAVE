const express = require("express");
const AppError = require("./utils/appError");
const cors = require('cors');
const path = require("path");

const app = express();
const port = process.env.PORT || 8000 
const corsOptions = {
    origin: [
      "http://127.0.0.1:8001",
      "http://localhost:8001",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "https://eye-save-notifications.herokuapp.com",
      "https://eyesave.herokuapp.com" ,
      "https://eyesave.netlify.app",
    ],
    credentials: true,
  };

  
require("./models");

app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/forms",require("./routes/forms.routes"));
app.use("/recordings",require("./routes/recordings.routes"));
app.use("/children",require("./routes/children.routes"));
app.use("/escorts",require("./routes/escorts.routes"));
app.use("/staff",require("./routes/staff.routes"));
app.use("/kindergartens",require("./routes/kindergartens.routes"));
app.use("/events",require("./routes/events.routes"));
app.use("/staffAttendance",require("./routes/staffAttendance.routes"));
app.use("/childrenAttendance",require("./routes/childrenAttendance.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/settings", require("./routes/settings.routes"));

app.all("*",(req,res,next)=>next(new AppError("request is not found", 404)));
// middleware erros manager
app.use(require("./controllers/error.controller"));

app.get("/**", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  
app.listen(port, ()=>console.log(`Server is running on port ${port}`));
