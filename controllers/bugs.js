const Bug = require("../models/bug")

module.exports = {
	new: newBug,
	showStatus,
    create,
}

function newBug(req, res) {
    res.render("bugs/new", {
        title: "Report a Bug",
    })
}

function showStatus(req, res) {
	res.render("bugs/status", {
        title: "Check Bug Status", 
    })
}

async function create(req, res) {
    console.log("create called")
    try {
        await Bug.create(req.body)
        res.redirect("bugs/submit")
    } catch(err) {
        res.render("bugs/new", {errorMsg: err.message, title: "Error"})
    }
}