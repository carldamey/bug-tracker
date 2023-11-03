const express = require("express")
const router = express.Router()
const passport = require("passport")
const notesCtrl = require("../controllers/notes.js")

router.post("/", notesCtrl.create)
router.delete("/", notesCtrl.delete)
router.put("/", notesCtrl.update)

module.exports = router