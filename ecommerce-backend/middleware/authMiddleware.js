const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    const token = req.header("Authorrization")?.spli(" ")[1];
    if (!token) return res.status(401).json({error:"Not authorized!"});

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch {
        res.status(401).json(error:"Invalid Token");
    }
};
module.exports = protect;