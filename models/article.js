const mongoose = require('mongoose')
const slugify = require('slugify')
// const Review = require('./review')
// const Schema = mongoose.Schema


const articleSchema = new mongoose.Schema({
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
    slug: {
        type: String,
        required: true,
        unique: true
    },
    // reviews: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Review'
    //     }
    // ]
})

articleSchema.pre('validate', function(next){
    if (this.title) {
        this. slug = slugify(this.title, { lower: true, strict: true })
    }
    next()
})


// const imageSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });
  
// //Image is a model which has a schema imageSchema
  
// module.exports = new mongoose.model('Image', imageSchema);

module.exports = mongoose.model("Article", articleSchema)