import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import { Button } from 'react-bootstrap';

export default function ReviewEntry() {
    const [review, setReview] = useState(undefined);
    const params = useParams();
    const [username, setUsername] = useState(undefined);

    useEffect(()=> {
        Axios.get('/articles/' + params.articleId + '/reviews/' + params.reviewId)
        .then(function(response) {
            setReview(response.data);
            console.log(response);
        });
        Axios.get('/api/user/isLoggedIn')
        .then(response => setUsername(response.data.username))
        .catch(error => console.log("User is not logged in"));
    }, []);

    if (!review) {
        return (<div>
            Review loading ...
        </div>)
    }

    // todo: add delete review 
    function deleteReview() {
        Axios.delete('/articles/' + params.articleId + '/reviews/' + params.reviewId)
        .then(function(response) {
            setReview('');
        })
    }

    if (username === review.username) {
        return (
            <div>
                <ReviewCard review={review} />
                <a href={"/articles/" + params.articleId + "/edit/" + params.reviewId}>
                    <Button>Edit</Button>
                </a>
                <a href={"/articles/" + params.articleId}>
                    <Button onClick={() => deleteReview() }>Delete</Button>
                </a>
            </div>
        )
    } else {
        return (
            <div>
                <ReviewCard review={review} />
            </div>
            
        )
    }
}