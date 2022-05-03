import React,  {useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function ReviewCards(props) {
    const reviews = props.reviews;
    const reviewComponent = [];
    const [username, setUsername] = useState(undefined);
    const params = useParams();

    useEffect(()=> {
        Axios.get('/api/user/isLoggedIn')
        .then(response => setUsername(response.data.username))
        .catch(error => console.log("User is not logged in"));
    }, []);

    function deleteReview(review) {
        Axios.delete('/api/articles/' + params.articleId + '/reviews/' + review._id)
        .then(function(response) {
        })
    }

    for (let review of reviews) {
        if (review.username === username) {
            reviewComponent.push(
                <div class='review-card'>
                <ReviewCard review={review} />
                <Button size="sm" className="custom-btn review-btn" as={Link} to={"/articles/" + params.articleId + "/edit/" + review._id}>Edit</Button>{' '}
                <Button size="sm" className="custom-btn" onClick={() => deleteReview(review)} as={Link} to={"/articles/" + params.articleId}>Delete</Button>
            </div>
            )
        } else {
            reviewComponent.push(
                <div class='review-card'>
                <ReviewCard review={review} />
            </div>
            )
        }
    }

    return (
        <div>
            <p className="review-para">Reviews</p>
            {reviewComponent}        
        </div>
    )
}