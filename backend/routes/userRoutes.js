const express = require("express")
const router = express.Router()
const {loginUser,currentUser,registerUser} = require("../controllers/userController")
const validateToken = require("../middlewares/validateToken")

router.post("/login", loginUser)
router.post("/register", registerUser)
router.get("/current", validateToken, currentUser)



module.exports =  router