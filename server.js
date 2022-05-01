//  [Finished] 1.An entry is composed of a title, a creation timestamp of when that entry was added and at least 2 other domain specific details
//  [Finished]2.A review is just made up of text  and a creation timestamp
//  [Finished]3.This navbar should contain a link back to the home page and a link to a place where a user can login or register a new account.  
//      If the user is logged in, the navbar should still contain a link to the home page, but also a button to create a new entry, 
//      a button to log out and a slightly stylized reference to their username. 
// 4. When a user submits a new entry, they should be redirected to the entry page that they just created.
// [Finished] 5. When you are on the entry page and you are logged in, there should be a form field below the entry that allows users to create a new review.  When the user submits the review, the page should NOT refresh, but rather the page should dynamically refetch all the existing reviews.
// [Finished] 6.  Reviews should be sorted by oldest on top
// 7. When a user is logged in, they should see an additional button to edit or delete entries and reviews. This button should be visible ONLY to the user that created the entry or review. 
// 8. If a entry is deleted, all associated reviews should be deleted as well.  If you try to access a page with a deleted entry (say you stored the URL somewhere) you should be redirected back to the home page

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

const articleRouter = require('./routes/articles');
const userRouter = require('./routes/user');

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

app.listen(8000, function() {
    console.log("Starting server");
})