import React from "react";
import { Card } from "react-bootstrap";

export default function ArticleCard(props) {
    const article = props.article;

    return (
        <div className="article-card">
            <Card className='w-auto'>
                <Card.Header>Species: {article.species} | Name: {article.name} | Author: {article.username} | Created At: {article.createdAt} </Card.Header>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}