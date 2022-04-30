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
            {/* <a href={"/articles/" + article._id}> */}
              {/* <Button>View the article</Button> */}
            {/* </a> */}
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