module.exports = {
    index,
}

function index(req, res) {
    res.render("account-reports/index", {title: "My reports", user: req.user})
}