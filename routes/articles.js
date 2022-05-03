const express = require('express')
const auth_middleware = require('./middleware/auth_middleware');

const ArticleModel = require('./model/article.model')
const ReviewModel = require('./model/review.model')

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

router.get('/', auth_middleware, function(request, response) {
    const username = request.username;

    return ArticleModel.getArticleByUsername(username)
    .then(allArticles => {
        response.status(200).send(allArticles)
    })
    .catch(err => {
        response.status(400).send(error)
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

router.post('/', auth_middleware, function(request, response) {
    const username = request.username;
    const title = request.body.title;
    const description = request.body.description;
    const species = request.body.species;
    const name = request.body.name;

    if (!title) {
        response.status(401).send("Missing title")
    }

    const article = {
        username: username,
        title: title,
        description: description,
        species: species,
        name: name,
    }

    return ArticleModel.createArticle(article)
    .then(dbResponse => {
        response.status(200).send(dbResponse)
    })
    .catch(err => {
        response.send(400).send(err)
    })
});

router.post('/:articleId/reviews', function(request, response) {
    const articleId = request.params.articleId;
    const username = request.body.username;
    const description = request.body.description;
    const rating = request.body.rating;

    const review = {
        articleId: articleId,
        username: username,
        description: description,
        rating: rating
    }

    return ReviewModel.createReview(review)
    .then(dbResponse => {
        response.status(200).send(dbResponse)
    })
    .catch(err => {
        response.send(400).send(err)
    })
});

router.delete('/:articleId/reviews/:reviewId', auth_middleware, function(request, response) {
    // ArticleModel.getArticleById(request.params.articleId);
    return ReviewModel.deleteReviewByReviewId(request.params.reviewId).then(dbResponse => {
            response.status(200).send("Deleted")
        })
        .catch(err => {
            response.sendStatus(400).send(err)
        });
});

// logged in user can update a review by review id
// todo: add auth_middleware
router.put('/:articleId/:reviewId', function(request, response) {
    const reviewId = request.params.reviewId;
    const description = request.body.description;
    const rating = request.body.rating;
    
    const review = {
        _id: reviewId,
    }

    const newReview = {
        description: description,
        rating: rating
    }

    return ReviewModel.updateReviewByReviewId(review, newReview)
        .then(dbResponse => {
            response.status(200).send(dbResponse);
        })
        .catch(err => {
            response.send(400).send(err);
        })
    
})

// get all reviews for an article
router.get('/:articleId/reviews', function(request, response) {
    const articleId = request.params.articleId;
    // const username = request.username;

    return ReviewModel.getReviewsByArticleId(articleId)
    .then(allReviews => {
        response.status(200).send(allReviews)
    })
    .catch(err => {
        response.status(400).send(error)
    })
});

// get a review from a review id
router.get('/:articleId/reviews/:reviewId', function(request, response) {
    // const articleId = request.params.articleId;
    const reviewId = request.params.reviewId;

    return ReviewModel.getReviewByReviewId(reviewId)
    .then(review => {
        response.status(200).send(review)
    })
    .catch(err => {
        response.status(400).send(error)
    })
});

router.delete('/:articleId', auth_middleware, function(request, response) {
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

router.put('/:articleId', function(request, response) {
    const articleId = request.params.articleId;
    const article = {
        _id: articleId,
    }

    const title = request.body.title;
    const description = request.body.description;
    if (description) {
        const newArticle = {
            title: title,
            description: description,
        }
        return ArticleModel.updateArticleById(article, newArticle)
        .then(dbResponse => {
            response.status(200).send(dbResponse);
        })
        .catch(err => {
            response.send(400).send(err);
        })
    }
    return response.send(400).send("Error occurs");
})


module.exports = router;


