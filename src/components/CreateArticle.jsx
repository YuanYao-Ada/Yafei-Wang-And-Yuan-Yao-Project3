import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

export default function CreateArticle() {
    const [newTitleInput, setNewTitleInput] = useState('');
    const [newDesInput, setNewDesInput] = useState('');
    const [newSpecies, setNewSpecies] = useState('');
    const [newName, setNewName] = useState('');
    const [article, setArticle] = useState('');

    function createNewArticle() {
        if (!newTitleInput) return;

        Axios.post('/articles', {
        title: newTitleInput,
        description: newDesInput,
        species: newSpecies,
        name: newName,
        })
        .then(response => {
        setArticle(response.data);
        console.log("article is: " +    article)
        setNewTitleInput('');
        setNewDesInput('');
        getArticle();
        console.log("!!article is: " + article._id)
        })
        .catch(function(err) {
        console.log(err);
        })
    }

    function getArticle() {
        Axios.get("/articles")
        .then(function(response) {
          setArticle(response.data[response.data.length-1]);
        })
    }

    return (
        <div>
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
                <Form.Group className="mb-3">
                    <Form.Label>Species</Form.Label>
                    <Form.Control placeholder="Enter the description"
                                value={newSpecies}
                                onChange={ e => setNewSpecies(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter the description"
                                value={newName}
                                onChange={ e => setNewName(e.target.value)} />
                </Form.Group>
                <Button onClick={createNewArticle} as={Link} to={'/'} >
                    Add new Article
                </Button>
            </Form>
        </div>
    );
}