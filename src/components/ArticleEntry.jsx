import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import ReviewCards from './ReviewCards';
import { Button } from 'react-bootstrap';
import CreateReview from './CreateReview';

export default function ArticleEntry() {
    const [article, setArticle] = useState(undefined);
    const params = useParams();
    const [username, setUsername] = useState(undefined);

    useEffect(()=> {
        Axios.get('/api/articles/' + params.articleId)
        .then(function(response) {
            setArticle(response.data);
        });
        Axios.get('/api/user/isLoggedIn')
        .then(response => setUsername(response.data.username))
        .catch(error => console.log("User is not logged in"));
    }, []);

    const [reviews, setReviews] = useState('');
    
    function getReviews() {
        Axios.get("/api/articles/" + params.articleId + '/reviews')
        .then(function(response) {
            setReviews(response.data);
        })
    }
    
    useEffect(getReviews);

    if (!article) {
        return (
            <div>
                The article does not exist.
                <Button size="sm" className="custom-btn" as={Link} to='/'>
                    Go back to home
                </Button>
            </div>)
    }
    
    function deleteArticle() {
        Axios.delete('/api/articles/' + params.articleId)
        .then(function(response) {
            setArticle('');
        })
    }

    if (username === article.username) {
        return (
            <div>
                <ArticleCard article={article} />
                <a href={"/articles/edit/" + article._id}>
                    <Button size="sm" className="custom-btn">Edit</Button>
                </a>
                {' '}
                <Button size="sm" className="custom-btn" onClick={deleteArticle} as={Link} to="/"> Delete </Button>
                <div>
                    <CreateReview />
                    <ReviewCards reviews={reviews} />
                </div>
            </div>
        )
    }  else if (username) {
        return (
            <div>
                <ArticleCard article={article} />
                <div>
                    <CreateReview />
                    <ReviewCards reviews={reviews} />
                </div>
            </div>
        )

    } else {
        return (
            <div>
                <ArticleCard article={article} />
                <ReviewCards reviews={reviews} />
            </div>
        )
    }
}

