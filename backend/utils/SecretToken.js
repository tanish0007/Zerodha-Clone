const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const generateRandomToken = () => {
    return crypto.randomBytes(20).toString("hex");
}

module.exports.createSecretToken = (id) => {
    const SECRET_KEY = generateRandomToken();
    return jwt.sign({ id }, SECRET_KEY, { expiresIn: 3 * 24 * 60 * 60, });
}