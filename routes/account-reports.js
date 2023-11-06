const express = require("express")
const router = express.Router()
const passport = require("passport")
const accRepCtrl = require("../controllers/account-reports.js")

router.get("/", accRepCtrl.index)

module.exports = router