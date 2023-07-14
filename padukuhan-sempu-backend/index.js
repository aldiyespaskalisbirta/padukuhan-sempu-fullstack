const express = require("express");
const FileUpload = require("express-fileupload");
const cors = require("cors");
const imageRoute = require("./routes/ImageRoute");
const userRoute = require("./routes/UserRoute");
const cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000/gallery/add-image",
//   })
// );
app.use(cookieParser());
app.use(FileUpload());

// server static files
app.use(express.static("public"));
app.use(imageRoute);
app.use(userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listen to port ${port}`));
