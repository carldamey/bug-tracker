const mongoose = require("mongoose")
const Schema = mongoose.Schema

const noteSchema = new Schema({
	// user
	content: String,
	postDate: Date,
})

const bugSchema = new Schema({
	subject: {type: String, default: "Untitled"},
	body: {type: String, default: "No body provided"},
	ticketNo: Number,
	reportDate: String,
	open: {type: Boolean, default: true},
	response: {type: String, default: "No response was provided."},
	priority: {type: Number, default: null, min: 1, max: 4},
	replyDate: Date,
	notes: [noteSchema],
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
})

module.exports = mongoose.model("Bug", bugSchema)
