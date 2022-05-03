import React, {useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';
import { Card, Button } from "react-bootstrap";

export default function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function createNewUser() {
        Axios.post('/api/user/authenticate', {username, password})
            .then(response => {
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="article-card">
            <Card className='w-auto'>
                <Card.Header>Enter Username and Password</Card.Header>
                <Card.Body>
                    <h5>Username</h5>   
                    <input value={username} onChange={e => setUsername(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </Card.Body>
            </Card>
            <Button size="lg" className="custom-btn mt-3" onClick={()=>createNewUser()} >
                    Login
            </Button>
        </div>
    )
} 