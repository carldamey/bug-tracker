const Bug = require("../models/bug")

module.exports = {
	new: newBug,
	showStatus,
	create,
    show,
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

async function show(req, res) {
    const ticketNo = req.query.ticketNo
    const bug = await Bug.findOne({ticketNo})
    console.log(bug)
    res.render("bugs/show", {bug, title: `Report ${ticketNo}`})
    // search by number entered into status page
    // find {ticketNo: entered number}
    // take returned object and return info for show page
}
