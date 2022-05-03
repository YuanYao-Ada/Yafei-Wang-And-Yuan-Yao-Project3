import React, {useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import { Card, Button } from "react-bootstrap";

export default function CreateUser(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function createNewUser() {
        Axios.post('/api/user/', {username, password})
            .then(response => {
                console.log("Created user");
                console.log(response.data);
                navigate('/');

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="article-card">
            <Card className='w-auto'>
                <Card.Header>Create an Account</Card.Header>
                <Card.Body>
                <h5>Username</h5>
                    <input value={username} onChange={e => setUsername(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />                  
                </Card.Body>
            </Card>
            <Button size="lg" className="custom-btn mt-3" onClick={()=>createNewUser()} >
                    Create
            </Button>
        </div>
    )
} 