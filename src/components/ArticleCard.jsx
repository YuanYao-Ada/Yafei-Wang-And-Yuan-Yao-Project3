import React from "react";
import { Card } from "react-bootstrap";

export default function ArticleCard(props) {
    const article = props.article;
    const review = props.review
    return (
        <div className="article-card">
            <Card>
                <Card.Header>ID: {article._id}  Created At: {article.createdAt}</Card.Header>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Header>ID: {review._id} </Card.Header>
            <Card.Body>
                    <Card.Title>{review.username} Rating: {review.rating}</Card.Title>
                    <Card.Text>{review.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}