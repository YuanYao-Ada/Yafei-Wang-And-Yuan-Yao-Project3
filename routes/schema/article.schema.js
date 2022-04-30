const Schema = require('mongoose').Schema;

const articleSchema = new Schema({
    username: String,
    title: {
        required: true,
        type: String
    },
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