const express = require("express");

const {
  getImages,
  getImageById,
  saveImage,
  updateImage,
  deleteImage,
} = require("../controllers/ImageController");

const router = express.Router();

router.get("/images", getImages);
router.get("/images/:id", getImageById);
router.post("/images", saveImage);
router.patch("/images/:id", updateImage);
router.delete("/images/:id", deleteImage);

module.exports = router;
