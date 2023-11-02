const Bug = require("../models/bug")

module.exports = {
	new: newBug,
	showStatus,
	create,
	showSubmit,
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
	req.body.ticketNo = new Date().getTime().toString().slice(-8)
	console.log(req.body.ticketNo)
	try {
		await Bug.create(req.body)
		res.redirect("bugs/submit")
	} catch (err) {
		res.render("bugs/new", {
			errorMsg: err.message,
			title: "Error",
		})
	}
}

function showSubmit(req, res) {
	res.render("bugs/submit", {title: "Thank you!", ticketNo: req.body.ticketNo})
}
