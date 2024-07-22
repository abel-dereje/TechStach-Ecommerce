const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        console.log("token", token);
        if (!token) {
            return res.status(401).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log("error auth", err);
                return res.status(401).json({
                    message: "Unauthorized",
                    error: true,
                    success: false
                });
            }

            console.log("decoded", decoded);
            req.userId = decoded._id;
            next();
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = authToken;
