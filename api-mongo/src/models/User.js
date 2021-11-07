const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            min: 6,
            max: 150,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 1000,
        },
        doc: {
            type: String,
            required: true,
            min: 6,
            max: 30,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            min: 6,
            max: 255,
        },
        site: {
            type: String,
            required: true,
            min: 10,
            max: 255,
        },
        about: {
            type: String,
            required: true,
            min: 10,
            max: 255,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
