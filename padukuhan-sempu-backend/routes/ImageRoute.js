const express = require("express");
// const verifyToken = require("../middleware/VerifyToken");

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
router.get("/images/:id", getImageById);

router.post("/images", saveImage);
router.patch("/images/:id", updateImage);

router.delete("/images/:id", deleteImage);
router.get("/images/download/:id", downloadImage);

module.exports = router;
