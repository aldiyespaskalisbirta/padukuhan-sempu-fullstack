const express = require("express");
const verifyToken = require("../middleware/VerifyToken");

const {
  getImages,
  getImageById,
  saveImage,
  updateImage,
  deleteImage,
  downloadImage,
} = require("../controllers/ImageController");

const router = express.Router();

router.get("/images", verifyToken, getImages);
router.get("/images/:id", getImageById);

router.post("/images", verifyToken, saveImage);
router.patch("/images/:id", verifyToken, updateImage);

router.delete("/images/:id", verifyToken, deleteImage);
router.get("/images/download/:id", downloadImage);

module.exports = router;
