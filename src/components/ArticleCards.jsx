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
              <Button>View the article</Button>
            </a>
        </div>
      )
    }

    return (
        <div>
            {articleComponent}
        </div>
    )
}