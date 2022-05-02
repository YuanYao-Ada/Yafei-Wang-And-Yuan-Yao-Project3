import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export default function ReviewEdit() {
    const [username, setUsername] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [rating, setRating] = useState(undefined);
    const params = useParams();

    useEffect(()=> {
        Axios.get('/articles/' + params.articleId + '/reviews/' + params.reviewId)
        .then(function(response) {
            setUsername(response.data.username);
            setDescription(response.data.description);
            setRating(response.data.rating);
        })
    }, []);

    if (!username || !description || !rating) {
        return (<div>
            Review loading ...
        </div>)
    }

    function edit() {
        Axios.put('/articles/' + params.articleId + '/' + params.reviewId, {
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
                    <Form.Label>User</Form.Label>
                    <Form.Control value={username}
                                  onChange={e => setUsername(e.target.value)} />
                </Form.Group>
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
                <a href={"/articles/" + params.articleId + '/reviews/' + params.reviewId}>
                    <Button size="sm" className="custom-btn" onClick={() => edit()}>Submit</Button>
                </a>
                <a href={"/articles/" + params.articleId + '/reviews/' + params.reviewId}>
                    <Button size="sm" className="custom-btn" type="button">Cancel</Button>
                </a>
            </Form>
        </div>
    )
}