const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: { type: String, required: [true, "Your email address is required"], unique: true },
    username: { type: String, required: [true, "Your username is required"], },
    password: { type: String, required: [true, "Your password is required"] }
});

userSchema.pre("save", async function () {
    try{
        if (this.isModified("password")) {
            // console.log("I'm hashing the password from userModel");
            const hashedPassword = await bcrypt.hash(this.password, 10);
            // console.log("HashedPassword: ",hashedPassword);
            this.password = hashedPassword;
        }
    } catch(error){
        console.log(error);
    }
});

module.exports = mongoose.model("User", userSchema);