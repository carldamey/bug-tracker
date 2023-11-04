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
    res.redirect(`/bugs/${bug.id}`)
}

function deleteNote(req, res) {
	return
}

function update(req, res) {
	return
}