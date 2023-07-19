const express = require("express");

const {
  getImages,
  getImageById,
  saveImage,
  updateImage,
  deleteImage,
  downloadImage,
} = require("../controllers/ImageController");

const router = express.Router();

router.get("/images", getImages);
router.get("/images/:uuid", getImageById);
router.post("/images", saveImage);
router.patch("/images/:uuid", updateImage);
router.delete("/images/:uuid", deleteImage);
router.get("/images/download/:uuid", downloadImage);

module.exports = router;
