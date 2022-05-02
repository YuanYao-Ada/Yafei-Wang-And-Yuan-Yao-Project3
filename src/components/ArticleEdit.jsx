import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export default function ArticleEntry() {
    const [title, setTitle] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const params = useParams();

    useEffect(()=> {
        Axios.get('/api/articles/' + params.articleId)
        .then(function(response) {
            setTitle(response.data.title);
            setDescription(response.data.description);
        })
    }, []);

    if (!title || !description) {
        return (<div>
            Article loading ...
        </div>)
    }

    function editArticle() {
        Axios.put('/api/articles/' + params.articleId, {
            title: title,
            description: description,
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
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title}
                                  onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description}
                                  onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <a href={"/articles/" + params.articleId}>
                    <Button size="sm" className="custom-btn" type="button" onClick={() => editArticle()}>Submit</Button>
                </a>
                <a href={"/articles/" + params.articleId}>
                    <Button size="sm" variant='secondary' type="button">Cancel</Button>
                </a>
            </Form>
        </div>
    )
}