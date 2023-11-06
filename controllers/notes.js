const Bug = require("../models/bug")

module.exports = {
	create,
	delete: deleteNote,
	update,
	show,
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
}

async function deleteNote(req, res) {
	try {
		const bug = await Bug.findById(req.body.bugId)
		bug.notes = bug.notes.filter(note => note._id.toString() !== req.params.id)
		await bug.save()
		res.redirect(`../bugs/show/?ticketNo=${bug.ticketNo}`)
	} catch (error) {
		res.render("error", {title: "Error", error})
	}
}

async function update(req, res) {
	try {
		const bug = await Bug.findById(req.body.bugId)
		let noteIdx = bug.notes.findIndex(
			note => note._id.toString() === req.params.id,
		)
		bug.notes[noteIdx].content = req.body.content
		await bug.save()
		res.redirect(`../bugs/show/?ticketNo=${bug.ticketNo}`)
	} catch (error) {
		res.render("error", {title: "Error", error})
	}
}

async function show(req, res) {
	try {
		const bug = await Bug.findById(req.body.bugId)
		const note = bug.notes.filter(note => note._id.toString() === req.params.id)
		res.render("notes/show", {title: "Update Note", bug, note})
	} catch (error) {
		res.render("error", {title: "Error", error})
	}
}
