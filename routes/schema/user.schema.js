const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
}, {
    collection: 'users',
})

module.exports = UserSchema;