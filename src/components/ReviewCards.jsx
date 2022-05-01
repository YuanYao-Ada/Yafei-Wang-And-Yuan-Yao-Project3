import React from "react";
import { Button } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

export default function ReviewCards(props) {
    const reviews = props.reviews;
    const reviewComponent = [];

    for (let review of reviews) {
        reviewComponent.push(
        <div class='review-card'>
            <ReviewCard review={review} />
            {/* <button >
                <a href={"/articles/" + review.articleId + "/reviews/" + review._id}>View Review</a>
            </button> */}
            <a href={"/articles/" + review.articleId + "/reviews/" + review._id}>
              <Button size="sm" className="custom-btn">View Review</Button>
            </a>
        </div>
      )
    }

    reviewComponent.reverse();

    return (
        <div>
            {reviewComponent}        
        </div>
    )
}