const Bug = require("../models/bug")

module.exports = {
	index,
}

async function index(req, res) {
	try {
		if (req.user) {
		} else {
			const reports = null
		}
		res.render("account-reports/index", {title: "My reports", user: req.user})
	} catch (error) {
		res.render("error", {title: "Error", error})
	}
}
