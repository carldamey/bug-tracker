const Bug = require("../models/bug")

module.exports = {
	create,
	delete: deleteNote,
	update,
}

async function create(req, res) {
	const bug = await Bug.findById(req.body._id)
    req.body.postDate = new Date
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
	const bug = await Bug.findById(req.body._id)
	// bug.note
	console.log("deletenote called")
	res.redirect(`../bugs/show/?ticketNo=$`)
	
}

async function update(req, res) {
	console.log("update called")
}