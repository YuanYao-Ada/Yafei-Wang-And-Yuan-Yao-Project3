import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import ReviewCards from './ReviewCards';
import { Button } from 'react-bootstrap';

export default function ArticleEntry() {
    const [article, setArticle] = useState(undefined);
    const params = useParams();
    const [username, setUsername] = useState(undefined);

    useEffect(()=> {
        Axios.get('/articles/' + params.articleId)
        .then(function(response) {
            setArticle(response.data);
        });
        Axios.get('/api/user/isLoggedIn')
        .then(response => setUsername(response.data.username))
        .catch(error => console.log("User is not logged in"));
    }, []);

    const [reviews, setReviews] = useState('');
    
    function getReviews() {
        Axios.get("/articles/" + params.articleId + '/reviews')
        .then(function(response) {
            setReviews(response.data);
        })
    }
    
    useEffect(getReviews, []);

    if (!article) {
        return (<div>
            Article loading ...
        </div>)
    }
    
    function deleteArticle() {
        Axios.delete('/articles/' + params.articleId)
        .then(function(response) {
            setArticle('');
        })
    }

    if (username === article.username) {
        return (
            <div>
                <ArticleCard article={article} />
                <a href={"/articles/edit/" + article._id}>
                    <Button>Edit</Button>
                </a>
                <a href={"/"}>
                    <Button onClick={() => deleteArticle()}> Delete </Button>
                </a>
                <div>
                    <a href={"/articles/" + article._id + "/createReview"}>
                        <Button> Create a Review </Button>
                    </a>
                    <ReviewCards reviews={reviews} />
                </div>
                

            </div>
        )
    } else {
        return (
            <ArticleCard article={article} />
        )
    }
}

