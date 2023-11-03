const express = require("express")
const router = express.Router()
const passport = require("passport")
const bugsCtrl = require("../controllers/bugs.js")


router.delete("/status", bugsCtrl.delete)
router.get("/report", bugsCtrl.new)
router.get("/status", bugsCtrl.showStatus)
router.get("/show", bugsCtrl.show)
router.post("/", bugsCtrl.create)

module.exports = router
