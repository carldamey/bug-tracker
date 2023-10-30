module.exports = {
  index
}

function index(req, res) {
  res.render("bugs/report", {
    title: "Homepage"
  });
}
