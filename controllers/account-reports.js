const Bug = require("../models/bug")

module.exports = {
	index,
}

async function index(req, res) {
	try {
		if (req.user) {
			// const reports = await Bug.find({user._id: req.user._id})
		} else {
			const reports = null
		}
		res.render("account-reports/index", {title: "My reports", user: req.user})
	} catch (error) {
		res.render("error", {title: "Error", error})
	}
}
