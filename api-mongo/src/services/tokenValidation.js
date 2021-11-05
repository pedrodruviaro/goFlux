const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).json({ error: "Token not provided" });
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2) {
        res.status(400).json({ error: "Token error" });
    }

    const [word, token] = parts;
    if (!/^Bearer$/i.test(word)) {
        res.status(400).json({ error: "Token error" });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(400).json({ error: "Invalid token" });
        }

        req.user = decoded;
        next();
    });
};
