import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';
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
            </div>
        )
    } else {
        return (
            <ArticleCard article={article} />
        )
    }
}