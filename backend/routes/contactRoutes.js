const express = require("express");
const validateToken = require("../middlewares/validateToken");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// Using ValidateToken to validate all the Private Routes
router.use(validateToken);
router.get("/", getAllContacts);
router.post("/create", createContact);
router.put("/:id", updateContact);
router.get("/:id", getContact);
router.delete("/:id", deleteContact);

module.exports = router;
