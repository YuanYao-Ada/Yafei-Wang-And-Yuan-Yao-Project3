import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import { ButtonGroup, Button, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

    const [username, setUsername] = useState(null);

    const navigate = useNavigate();

    useEffect(function() {
        Axios.get('/api/user/isLoggedIn')
            .then(response => setUsername(response.data.username))
            .catch(error => console.log("User is not logged in"));
    })

    function logout() {
        Axios.post('/api/user/logout')
        .then(response => {
            setUsername(null);
            navigate('/');
        })
        .catch(error => console.log("Error logging out"));
    }

    if (!username) {
        return (
            <Navbar sticky="top" expand="sm" bg="myNav">
                <Navbar.Brand as={Link} to="/">
                    Articles
                </Navbar.Brand>
                <ButtonGroup>
                    <Button size="sm" className="custom-btn" variant='secondary' as={Link} to='/login'>Login</Button>
                    <Button size="sm" className="custom-btn" variant='secondary' as={Link} to='/createUser'>Sign Up</Button>
                </ButtonGroup>

            </Navbar>
        )
    } else {
        return (
            <Navbar sticky="top" expand="sm" bg="myNav" variant='light' className='mb-3'>
                <Navbar.Brand as={Link} to="/">
                    Articles
                </Navbar.Brand>
                <Form inline className='mx-3'>
                    <span>{username}  </span>
                    <Button size="sm" className="custom-btn" as={Link} to="/createArticle">Create Article</Button>{' '}
                    <Button size="sm" variant='secondary' onClick={() => logout()}>Logout</Button>
                </Form>
            </Navbar>  
        )
    }
}