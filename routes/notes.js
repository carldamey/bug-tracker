const express = require("express")
const router = express.Router()
const passport = require("passport")
const notesCtrl = require("../controllers/notes.js")

router.get("/:id", notesCtrl.show)
router.post("/:id", notesCtrl.create)
router.delete("/:id", notesCtrl.delete)
router.put("/:id", notesCtrl.update)

module.exports = router