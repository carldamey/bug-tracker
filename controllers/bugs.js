const Bug = require("../models/bug")
const User = require("../models/user")

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
	req.body.ticketNo = new Date().getTime().toString().slice(-8)
	req.body.reportDate = new Date().toLocaleTimeString()
	req.body.user = req.user ? req.user : null
	try {
		const newBug = await Bug.create(req.body)
		if (req.user) {
			const user = await User.findById(req.user._id)
			await user.reports.push(newBug)
			await user.save()
		}
		res.render("bugs/submit", {
			title: "Thank you!",
			ticketNo: req.body.ticketNo,
		})
	} catch (err) {
		res.render("bugs/new", {
			errorMsg: err.message,
			title: "Error",
		})
	}
}

async function show(req, res) {
	const bug = await Bug.findOne({ticketNo: req.query.ticketNo})
	if (bug) {
		res.render("bugs/show", {bug, title: `Report #${req.query.ticketNo}`})
	} else {
		res.render("bugs/status", {title: "Please enter a valid ticket number."})
	}
}

async function deleteBug(req, res) {
	try {
		await Bug.deleteOne({_id: req.body._id})
		res.redirect("../bugs/status")
	} catch (err) {
		res.render("bugs/new", {title: "Error", errorMsg: err})
	}
}

// use dedicated error view
