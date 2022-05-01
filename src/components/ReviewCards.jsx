import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewCards(props) {
    const reviews = props.reviews;
    const reviewComponent = [];

    for (let review of reviews) {
        reviewComponent.push(
        <div class='review-card'>
            <ReviewCard review={review} />
            <button>
                <a href={"/articles/" + review.articleId + "/reviews/" + review._id}>View Review</a>
            </button>
        </div>
      )
    }

    return (
        <div>
            {reviewComponent}        
        </div>
    )
}