const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const articleRouter = require('./routes/articles');

// app.engine('ejs', ejsMate)

mongoose.connect("mongodb+srv://test:test@cluster0.d8re6.mongodb.net/", {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})

console.log("Connect to DB Successfully");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/articles', articleRouter);

app.get('*', function(req, res){
  res.sendFile(path.join(_dirname, 'build', 'index.html'));
});

app.listen(8000, function() {
    console.log("Starting server");
})