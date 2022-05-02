import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Axios from "axios";
import { useParams  } from "react-router-dom";

export default function CreateReview() {
    const [newRatingInput, setNewRatingInput] = useState('');
    const [newDesInput, setNewDesInput] = useState('');
    const [username, setUsername] = useState(undefined);
    const params = useParams();

    function createNewReview() {
        if (!newRatingInput) return;

        Axios.post('/api/articles/' + params.articleId + '/reviews', {
            username: username,
            rating: newRatingInput,
            description: newDesInput,
        })
        .then(function(response) {
        setNewRatingInput('');
        setNewDesInput('');
        })
        .catch(function(err) {
        console.log(err);
        })
    }

    useEffect(()=> { 
        Axios.get('/api/user/isLoggedIn')
        .then(response => setUsername(response.data.username))
        .catch(error => console.log("User is not logged in"));
    }, []);

    return (
        <div>
            <Form className="article-card ">
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control placeholder="Enter the rating" 
                                value={newRatingInput} 
                                onChange={ e => setNewRatingInput(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter the description"
                                value={newDesInput}
                                onChange={ e => setNewDesInput(e.target.value)} />
                </Form.Group>
                <Button size="sm" className="custom-btn" onClick={createNewReview} >
                        Add new Review
                </Button>
            </Form>
        </div>
    );
}