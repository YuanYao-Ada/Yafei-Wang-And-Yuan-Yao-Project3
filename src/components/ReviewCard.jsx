import React from "react";
import { Card } from "react-bootstrap";

export default function ReviewCard(props) {
    const review = props.review;
    return (
        <div className="article-card">
            <Card className='w-auto'>
                {/* <Card.Header>ID: {review._id}  Rating: {review.rating}</Card.Header> */}
                <Card.Header>Review Rating: {review.rating}</Card.Header>
                <Card.Body>
                    <Card.Title>{review.username} | Rating: {review.rating} | CreatedAt: {review.createdAt} </Card.Title>
                    <Card.Text>{review.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}