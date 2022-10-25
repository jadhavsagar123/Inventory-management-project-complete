
const express = require("express");
const cors = require("cors");
const app = express();
const web = require("./routes/web");
const authrouter = require("./routes/auth.routes");
const userrouter = require("./routes/user.routes");
const adminrouter = require("./routes/admin.routes");

app.use(express.json());
app.use(cors());
app.use("/", web);
app.use("/auth", authrouter);
app.use("/user", userrouter);
app.use("/admin", adminrouter);
module.exports = app;

