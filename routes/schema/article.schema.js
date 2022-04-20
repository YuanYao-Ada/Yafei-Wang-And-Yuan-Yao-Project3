const Schema = require('mongoose').Schema;

const articleSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    // image: String,
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    collection: 'article',
})

module.exports = articleSchema;