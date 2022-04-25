const express = require('express');

const UserModel = require('./model/user.model');
const jwt = require('jsonwebtoken');
const auth_middleware = require('./middleware/auth_middleware');
const router = express.Router();

router.post('/authenticate', function(request, response) {
    const {username, password} = request.body;

    return UserModel.getUserByUserName(username)
        .then(user => {
            if (user.password === password) {
                const payload = {
                    username: username,
                };
                const token = jwt.sign(payload, "SUPER_SECRET", {
                    expiresIn: '14d'
                });
                return response.cookie('token', token, {httpOnly: true})
                    .status(200).send({username});
            } 

            return response.status(401).send("Invalid password");
        })
        .catch(error => {
            response.status(400).send("There was an error");
        })
})

router.post('/logout', auth_middleware, function(request, response) {
    const token = jwt.sign({}, "SUPER_SECRET", {
        expiresIn: '0d'
    });
    return response.cookie('token', token, {httpOnly: true})
        .status(200).send();
})

router.get('/isLoggedIn', auth_middleware, function(request, response) {
    return response.status(200).send({username: request.username});
})

router.get('/:username', function(request, response) {

    const username = request.params.username

    return UserModel.getUserByUserName(username)
        .then(user => {
                response.status(200).send(user);
        })
        .catch(error => {
            response.status(400).send(error);
        })
})

router.post('/', function(request, response) {
    const {username, password} = request.body;

    if (!username || !password) {
        response.status(401).send("Missing username or password argument")
    }

    const user = {
        username,
        password 
    }

    return UserModel.createUser(user)
        .then(dbResponse => {

            if (dbResponse.password === password) {
                const payload = {
                    username: username,
                };
                const token = jwt.sign(payload, "SUPER_SECRET", {
                    expiresIn: '14d'
                });
                return response.cookie('token', token, {httpOnly: true})
                    .status(200).send({username});
            } 

            return response.status(401).send("Invalid password");
        })
        .catch(error => {
            response.status(400).send(error)
        })
});

module.exports = router;