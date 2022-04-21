const mongoose = require('mongoose');

const ArticleSchema = require('../schema/article.schema');

const ArticleModel = mongoose.model.Article || mongoose.model("Article", ArticleSchema);

function createArticle(article) {
    return ArticleModel.create(article);
}

function getAllArticles() {
    return ArticleModel.find().exec();
}

function deleteArticle(article) {
    return ArticleModel.findOneAndDelete(article).exec();
}

function getArticleById(id) {
    return ArticleModel.findById(id).exec();
}

module.exports = {
    createArticle,
    getAllArticles,
    deleteArticle,
    getArticleById,
}