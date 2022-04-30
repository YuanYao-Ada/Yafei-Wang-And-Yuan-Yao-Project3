const mongoose = require('mongoose');

const reviewSchema = require('../schema/review.schema');

const reviewModel = mongoose.model("Review", reviewSchema);

function createReview(review) {
    return reviewModel.create(review);
}

function getReviewByArticleId(article) {
    return ReviewModel.find({
        article: article
    }).exec();
}

function deleteReviewByReviewId(reviewId) {
    return reviewModel.findByIdAndDelete(reviewId).exec()
}

function updateReviewByReviewId(review, newReview) {
    return reviewModel.findOneAndUpdate(
        review,
        newReview,
        {new: true}
    );
}


module.exports = {
    createReview,
    deleteReviewByReviewId,
    getReviewByArticleId,
    updateReviewByReviewId
}