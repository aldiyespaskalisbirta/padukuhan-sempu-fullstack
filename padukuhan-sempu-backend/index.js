const express = require("express");
const FileUpload = require("express-fileupload");
const cors = require("cors");
const imageRoute = require("./routes/ImageRoute");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/UserRoute");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use(cookieParser());
app.use(FileUpload());

app.use(express.static("public"));
app.use(userRoute);
app.use(imageRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listen to port ${port}`));
