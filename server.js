const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

const articleRouter = require('./routes/articles');
const userRouter = require('./routes/user');

// app.engine('ejs', ejsMate)

mongoose.connect("mongodb+srv://test:test@cluster0.d8re6.mongodb.net/", {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})

const auth_middleware = require('./routes/middleware/auth_middleware');

console.log("Connect to DB Successfully");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/articles', articleRouter);
app.use('/api/user', userRouter);

// app.get('*', function(req, res){
//   res.sendFile(path.join(_dirname, 'build', 'index.html'));
// });

app.listen(8000, function() {
    console.log("Starting server");
})