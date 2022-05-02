import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import ArticleCards from "./components/ArticleCards";

function App() {
  const [articles, setArticles] = useState('');

  function getArticles() {
    Axios.get("/api/articles")
    .then(function(response) {
      setArticles(response.data);
    })
  }

  useEffect(getArticles, []);

  return (
    <div>
      <ArticleCards articles={articles} />
    </div>
  );
}

export default App;
