import React from "react";
import { Card } from "react-bootstrap";

export default function ReviewCard(props) {
    const review = props.review;
    return (
        <div className="review-card">
            <Card>
                <Card.Header>ID: {review._id}  Rating: {review.rating}</Card.Header>
                <Card.Body>
                    <Card.Title>{review.username}</Card.Title>
                    <Card.Text>{review.description}</Card.Text>
                </Card.Body>
                <button>
                    <a href={"/articles/" + review.articleId + "/reviews/" + review._id}>View Review</a>
                </button>
            </Card>
        </div>
    )
}