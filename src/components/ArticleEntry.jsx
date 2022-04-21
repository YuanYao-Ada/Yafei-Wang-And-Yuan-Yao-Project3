import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { Button } from 'react-bootstrap';

export default function ArticleEntry() {
    const [article, setArticle] = useState(undefined);
    const params = useParams();

    useEffect(()=> {
        Axios.get('/articles/' + params.articleId)
        .then(function(response) {
            setArticle(response.data);
        })
    }, []);

    if (!article) {
        return (<div>
            Article loading ...
        </div>)
    }

    return (
        <div>
            <ArticleCard article={article} />
            <Button> Delete the article </Button>
        </div>
    )
}