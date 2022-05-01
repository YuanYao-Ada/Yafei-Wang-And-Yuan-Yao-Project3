import React from "react";
import { Card } from "react-bootstrap";

export default function ReviewCard(props) {
    const review = props.review;
    return (
<<<<<<< HEAD
        <div className="article-card">
            <Card className='w-auto'>
                {/* <Card.Header>ID: {review._id}  Rating: {review.rating}</Card.Header> */}
                <Card.Header>Review Rating: {review.rating}</Card.Header>
=======
        <div className="review-card">
            <Card>
>>>>>>> 1adbf60086665cb4cda66bfe6177657d3b33457a
                <Card.Body>
                    <Card.Title>{review.username} | Rating: {review.rating} | CreatedAt: {review.createdAt} </Card.Title>
                    <Card.Text>{review.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}