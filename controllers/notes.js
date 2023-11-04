const Bug = require("../models/bug")

module.exports = {
	create,
	delete: deleteNote,
	update,
}

async function create(req, res) {
	const bug = await Bug.findById(req.body.bugId)
	req.body.postDate = new Date()
	bug.notes.push(req.body)
	try {
		await bug.save()
	} catch (err) {
		console.log(err)
	}
	res.redirect(`../bugs/show/?ticketNo=${bug.ticketNo}`)
	// res.render("/bugs/show",{bug, title: `Report ${req.query.ticketNo}`})
}

async function deleteNote(req, res) {
	//replace bug with note
	const note = await Bug.findById(req.params.id)
	console.log(req.body)
	try {
		notes.deleteOne({_id: req.params.id})
		res.redirect(`../bugs/show/?ticketNo=${bug.ticketNo}`)
	} catch (error) {
		res.render("error", {title: "Error", error})
	}
}

async function update(req, res) {
	console.log("update called")
}
