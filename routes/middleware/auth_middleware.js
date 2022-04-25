const jwt = require('jsonwebtoken');

module.exports = function(request, response, next) {
    const token = request.cookies.token;  
    if (!token) {
        response.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, "SUPER_SECRET", function(err, decoded) {
            if (err) {
                response.status(401).send('Unauthorized: Invalid token');
            } else {
                request.username = decoded.username;
                next();
            }
        });
    }
}