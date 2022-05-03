import React from "react";
import { Card } from "react-bootstrap";

export default function ArticleCard(props) {
    const article = props.article;

    return (
        <div className="article-card">
            <Card className='w-auto'>
                <Card.Header>
                    <span>Species: </span> {article.species} | <span>Name: </span> {article.name} | <span>Author: </span> {article.username} | <span>Created At: </span>{article.createdAt} </Card.Header>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}