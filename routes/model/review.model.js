const mongoose = require('mongoose');

const reviewSchema = require('../schema/review.schema');

const ReviewModel = mongoose.model("Review", reviewSchema);

function createReview(review) {
    return ReviewModel.create(review);
}

function getReviewsByArticleId(articleId) {
    return ReviewModel.find({
        articleId: articleId
    }).exec();
}

function getReviewByReviewId(reviewId) {
    return ReviewModel.findOne({
        _id: reviewId
    }).exec();
}

function deleteReviewByReviewId(reviewId) {
    return ReviewModel.findByIdAndDelete(reviewId).exec()
}

function updateReviewByReviewId(review, newReview) {
    return ReviewModel.findOneAndUpdate(
        review,
        newReview,
        {new: true}
    );
}


module.exports = {
    createReview,
    deleteReviewByReviewId,
    getReviewsByArticleId,
    updateReviewByReviewId,
    getReviewByReviewId
}