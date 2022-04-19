// const express = require('express');
// const app = express();
// const path = require('path');

// const postRouter = require('./routes/posts');

// app.use(express.static(path.join(__dirname, 'build')));


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(process.env.PORT || 8000, () => {
//   console.log('Starting server');
// });


const express = require('express')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

app.engine('ejs', ejsMate)

mongoose.connect("mongodb+srv://test:test@cluster0.d8re6.mongodb.net/", {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})

console.log("Successfully");

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// for images in public folder
// app.use(methodOverride('_method'))
// app.use(express.static('public'))

app.get('/', async (req, res) => {
    // sort and newly created will show up at the top
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(8000)