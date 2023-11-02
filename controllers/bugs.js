module.exports = {
	showReport,
	showStatus,
}

function showReport(req, res) {
    res.render("bugs/report", {
        title: "Report a Bug",
    })
}

function showStatus(req, res) {
	res.render("bugs/status", {
        title: "Check Bug Status", 
    })
}
