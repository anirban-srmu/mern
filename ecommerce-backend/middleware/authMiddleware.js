const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorrization")?.spli(" ")[1];
    if (!token) return res.status(401).json({error:"Not authorized!"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch {
        res.status(401).json(error:"Invalid Token");
    }
};
module.exports = authMiddleware;