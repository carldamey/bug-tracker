const Bug = require("../models/bug")

module.exports = {
	new: newBug,
	showStatus,
	create,
    show,
    delete: deleteBug,
}

function newBug(req, res) {
	res.render("bugs/new", {
		title: "Report a Bug",
	})
}

function showStatus(req, res) {
	res.render("bugs/status", {
		title: "Check Report Status",
	})
}

async function create(req, res) {
	console.log("create called")
	req.body.ticketNo = new Date().getTime().toString().slice(-8)
	req.body.reportDate = new Date().toLocaleTimeString()
	try {
		await Bug.create(req.body)
		res.render("bugs/submit", {title: "Thank you!", ticketNo: req.body.ticketNo})
	} catch (err) {
		res.render("bugs/new", {
			errorMsg: err.message,
			title: "Error",
		})
	}
}

async function show(req, res) {
    const ticketNo = req.query.ticketNo
    const bug = await Bug.findOne({ticketNo})
    console.log(bug)
    res.render("bugs/show", {bug, title: `Report ${ticketNo}`})
}

function deleteBug(req, res) {
	console.log("deletebug called")
	console.log(req.body)
    Bug.deleteOne(req.params.bug)
    res.redirect("bugs/status")
}