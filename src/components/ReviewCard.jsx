import React from "react";
import { Card } from "react-bootstrap";

export default function ReviewCard(props) {
    const review = props.review;
    return (
        <div className="review-card article-card">
            <Card className="mt-3 mb-3">
            <Card.Header><span>Author: </span> {review.username} | <span>Rating: </span> {review.rating} | <span>CreatedAt: </span> {review.createdAt} </Card.Header>
                <Card.Body>
                    <Card.Text>{review.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}