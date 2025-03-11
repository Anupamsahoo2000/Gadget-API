const express = require("express");
const {
  getGadgets,
  createGadget,
  updateGadget,
  deleteGadget,
  getGadgetByStatus,
  selfDestructGadget,
} = require("../controllers/gadgetController");
const router = express.Router();

router.get("/", getGadgets);
router.get("/status/:status", getGadgetByStatus);
router.post("/", createGadget);
router.patch("/:id", updateGadget);
router.delete("/:id", deleteGadget);
router.post("/:id/self-destruct", selfDestructGadget);

module.exports = router;
