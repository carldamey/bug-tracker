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
	req.body.ticketNo = new Date().getTime().toString().slice(-8)
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

function search(req, res) {
    // search by number entered into status page
    // find {ticketNo: entered number}
    // take returned object and return info for show page
}
