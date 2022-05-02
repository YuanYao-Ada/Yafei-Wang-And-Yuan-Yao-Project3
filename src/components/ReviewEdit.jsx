import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export default function ReviewEdit() {
    const [username, setUsername] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [rating, setRating] = useState(undefined);
    const params = useParams();

    useEffect(()=> {
        Axios.get('/api/articles/' + params.articleId + '/reviews/' + params.reviewId)
        .then(function(response) {
            setUsername(response.data.username);
            setDescription(response.data.description);
            setRating(response.data.rating);
        })
    }, []);

    function edit() {
        Axios.put('/api/articles/' + params.articleId + '/' + params.reviewId, {
            description: description,
            rating: rating
        })
        .then(function(response){
            response.send(200).send("Edited");
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control value={rating}
                                  onChange={e => setRating(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description}
                                  onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Button size="sm" className="custom-btn" onClick={() => edit()} as={Link} to={"/articles/" + params.articleId}>Submit</Button>
                <Button size="sm" className="custom-btn" type="button" as={Link} to={"/articles/" + params.articleId}>Cancel</Button>
            </Form>
        </div>
    )
}