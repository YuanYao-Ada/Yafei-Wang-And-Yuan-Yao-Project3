import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

export default function CreateReview() {
    const [newRatingInput, setNewRatingInput] = useState('');
    const [newDesInput, setNewDesInput] = useState('');
    const navigate = useNavigate();

    function createNewReview() {
        if (!newRatingInput) return;

        Axios.post('/articles/' + params.articleId + '/reviews', {
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

    return (
        <div>
            <Form>
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
                <Button onClick={createNewReview} as={Link} to='/params.articleId' >
                    Add new Review
                </Button>
            </Form>
        </div>
    );
}