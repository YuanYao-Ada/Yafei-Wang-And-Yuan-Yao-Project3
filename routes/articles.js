const express = require('express')

const ArticleModel = require('./model/article.model')

const router = express.Router()

// Get all articles
router.get('/', function(request, response) {
    return ArticleModel.getAllArticles()
    .then(allArticles => {
        response.status(200).send(allArticles);
    })
    .catch(err => {
        response.status(400).send(err)
    })
});

router.get('/:articleId', function(request, response) {
    const articleId = request.params.articleId;
    return ArticleModel.getArticleById(articleId)
    .then(article => {
        response.status(200).send(article);
    })
    .catch(err => {
        response.status(400).send(err)
    })
});

router.post('/', function(request, response) {
    const title = request.body.title;
    const description = request.body.description;

    if (!title) {
        response.status(401).send("Missing title")
    }

    const article = {
        title: title,
        description: description,
    }

    return ArticleModel.createArticle(article)
    .then(dbResponse => {
        response.status(200).send(dbResponse)
    })
    .catch(err => {
        response.send(400).send(err)
    })
});

router.delete('/:articleId', function(request, response) {
    const articleId = request.params.articleId;
    const article = {
        _id: articleId,
    }

    return ArticleModel.deleteArticle(article)
    .then(dbResponse => {
        response.status(200).send("Deleted")
    })
    .catch(err => {
        response.send(400).send(err)
    })
});


module.exports = router;


