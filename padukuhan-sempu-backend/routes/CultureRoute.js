const express = require("express");

const {
  getCulture,
  getCultureById,
  createCulture,
  updateCulture,
  deleteCulture,
} = require("../controllers/CultureController");

const router = express.Router();

router.get("/culture", getCulture);
router.get("/culture/:uuid", getCultureById);
router.post("/culture", createCulture);
router.patch("/culture/:uuid", updateCulture);
router.delete("/culture/:uuid", deleteCulture);

module.exports = router;
