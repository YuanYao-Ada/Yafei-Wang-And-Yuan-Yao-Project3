import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import ArticleCards from "./components/ArticleCards";

function App() {
  const [articles, setArticles] = useState('');
  const [newTitleInput, setNewTitleInput] = useState('');
  const [newDesInput, setNewDesInput] = useState('');

  function getArticles() {
    Axios.get("/articles")
    .then(function(response) {
      setArticles(response.data);
    })
  }

  function createNewArticle() {
    if (!newTitleInput) return;

    Axios.post('/articles', {
      title: newTitleInput,
      description: newDesInput,
    })
    .then(function(response) {
      setNewTitleInput('');
      setNewDesInput('');
      getArticles();
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  useEffect(getArticles, []);

  return (
    <div>
      {/* <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Enter the title" 
                          value={newTitleInput} 
                          onChange={ e => setNewTitleInput(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="Enter the description"
                          value={newDesInput}
                          onChange={ e => setNewDesInput(e.target.value)} />
          </Form.Group>
          <Button type="submit" onClick={createNewArticle} >
            Add new Article
          </Button>
        </Form>
      </div> */}
      <ArticleCards articles={articles} />
    </div>
  );
}

export default App;
