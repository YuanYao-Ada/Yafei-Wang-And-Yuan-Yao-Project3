import React, {useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router';

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
        <div>
            <h5>
                Username
            </h5>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <h5>
                Password
            </h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={createNewUser}>
                Login
            </button>
        </div>

    )
} 