const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

const Signup = async (req, res, next) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // console.log("I'm hashing the password from AuthController");
        // const hashedPassword = await bcrypt.hash(password, 10);
        // console.log("HashedPassword: ",hashedPassword);
        const user = await User.create({ email, password, username });

        const token = createSecretToken(user._id);
        
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 3 * 24 * 60 * 60 * 1000,
        });
        res.status(201).json({ message: "User signed in successfully", success: true, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};


const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not Found", success: false });
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(400).json({ message: "Error in hashing resolve", success: false });
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", 
            maxAge: 3 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "User logged in successfully", success: true });
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

module.exports = { Signup, Login }