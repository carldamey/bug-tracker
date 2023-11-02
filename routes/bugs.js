const express = require("express")
const router = express.Router()
const passport = require("passport")
const bugsCtrl = require("../controllers/bugs.js")

router.get("/report", bugsCtrl.showReport)
router.get("/status", bugsCtrl.showStatus)

module.exports = router
