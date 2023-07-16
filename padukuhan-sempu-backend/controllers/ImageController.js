const Images = require("../models/Image");
const path = require("path");
const fs = require("fs");
// GET IMAGES //
const getImages = async (req, res) => {
  try {
    const response = await Images.findAll();
    res.json(response);
  } catch (err) {
    console.log(err.message);
  }
};

// GET IMAGE BY ID //
const getImageById = async (req, res) => {
  try {
    const response = await Images.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!response) return res.status(404).json({ message: "Image not found" });
    res.json(response);
  } catch (err) {
    console.log(err.message);
  }
};

// INSERT IMAGE //
const saveImage = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ message: "No File Uploaded" });
  const name = req.body.title;
  const description = req.body.description;
  const file = req.files.imagePath;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ message: "Invalid Image Extension" });
  if (fileSize > 10000000)
    return res.status(422).json({ message: "Image must be less than 5mb" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ message: err.message });
    try {
      await Images.create({
        name: name,
        description: description,
        image: fileName,
        url: url,
      });
      res.status(201).json({ message: "Image successfully created" });
    } catch (err) {
      console.log(err.message);
    }
  });
};

// UPDATE IMAGE //
const updateImage = (req, res) => {};

// DELETE IMAGE //
const deleteImage = async (req, res) => {
  const image = await Images.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!image) return res.status(404).json({ message: "Image not found" });

  try {
    const filepath = `./public/images/${image.image}`;
    fs.unlinkSync(filepath);
    await Images.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {}
};

const downloadImage = async (req, res) => {
  const image = await Images.findOne({
    where: {
      id: req.params.id,
    },
  });
  const filePath = `./public/images/${image.image}`; // Specify the path to the file you want to download
  const fileName = image.image; // Specify the name you want the downloaded file to have

  // Set the headers to prompt the browser to download the file
  res.setHeader("Content-disposition", `attachment; filename=${fileName}`);
  res.setHeader("Content-type", "application/pdf");

  // Create a read stream from the file and pipe it to the response
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
};

module.exports = {
  getImages,
  getImageById,
  saveImage,
  updateImage,
  deleteImage,
  downloadImage,
};
