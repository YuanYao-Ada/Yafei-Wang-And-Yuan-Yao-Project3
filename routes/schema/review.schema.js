const Schema = require('mongoose').Schema;

const reviewSchema = new Schema({
	articleId: {
		type: Schema.Types.ObjectId,
	},
    username: String,
    description: String,
    rating: Number,
	createdAt: {
		type: Date,
		default: Date.now
	}},
    {
    collection: 'review',
    })

module.exports = reviewSchema;