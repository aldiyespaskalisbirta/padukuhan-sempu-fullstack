const express = require("express");
const FileUpload = require("express-fileupload");
const cors = require("cors");
const api = require("./routes/api");
const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(api);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server listen to port ${port}`));
