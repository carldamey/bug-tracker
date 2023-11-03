const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bugSchema = new Schema({
	subject: {type: String, default: "Untitled"},
	body: {type: String, default: "No body provided"},
	reportDate: String,
})

const issueSchema = new Schema({
    bug: bugSchema,
	ticketNo: Number,
	open: {type: Boolean, default: true},
	response: {type: String, default: "No response provided."},
	priority: {type: Number, default: null, min: 1, max: 4},
	replyDate: Date,
})

module.exports = mongoose.model("Issue", issueSchema)
