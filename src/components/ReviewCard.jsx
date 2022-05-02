import React from "react";
import { Card } from "react-bootstrap";

export default function ReviewCard(props) {
    const review = props.review;
    return (
        <div className="review-card article-card">
            <Card className="mt-3 mb-3">
                <Card.Body>
                    <Card.Title>{review.username} | Rating: {review.rating} | CreatedAt: {review.createdAt} </Card.Title>
                    <Card.Text>{review.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}