import React from "react";
import { Button } from "react-bootstrap";
import ArticleCard from "./ArticleCard";

export default function ArticleCards(props) {
    const articles = props.articles;
    const articleComponent = [];

    for (let article of articles) {
      articleComponent.push(
        <div class='article-card'>
            <ArticleCard article={article} />
            <a href={"/articles/" + article._id}>
              <Button size="sm" className="custom-btn">View the article</Button>
            </a>
        </div>
      )
    }

    articleComponent.reverse();

    return (
        <div>
            {articleComponent}
        </div>
    )
}