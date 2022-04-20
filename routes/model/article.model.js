const mongoose = require('mongoose');

const ArticleSchema = require('../schema/article.schema');

const ArticleModel = mongoose.model.Article || mongoose.model("Article", ArticleSchema);

function createArticle(article) {
    return ArticleModel.create(article);
}

function getAllArticles() {
    return ArticleModel.find().exec();
}

module.exports = {
    createArticle,
    getAllArticles,
}