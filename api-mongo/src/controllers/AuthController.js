const AuthValidation = require("../services/AuthValidation");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
    async register(req, res) {
        // validating input
        const { error } = AuthValidation.register(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // checking if user already exists
        try {
            const userExists = await User.findOne({
                $or: [{ email: req.body.email }, { doc: req.body.doc }],
            });

            if (userExists) {
                return res.status(400).json({
                    error: "A account with this credentials already exists",
                });
            }
        } catch (err) {
            return res.json({ error: err.response });
        }

        try {
            // hashing password
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            const newUser = new User({
                email: req.body.email,
                password: hashedPassword,
                doc: req.body.doc,
                name: req.body.name,
                site: req.body.site,
                about: req.body.about,
            });

            // inserting into DB
            const savedUser = await newUser.save();
            const { password, ...rest } = savedUser._doc;
            return res.status(201).json({ ...rest });
        } catch (err) {
            return res.json({ error: err.response });
        }
    }

    async login(req, res) {
        // validating input
        const { error } = AuthValidation.login(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        try {
            // checking if userExists
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ error: "Wrong credentials " });
            }

            // verifying password
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(400).json({ error: "Wrong credentials " });
            }

            // Token
            const token = jwt.sign(
                { userId: user._id },
                process.env.TOKEN_SECRET
            );
            const { password, ...rest } = user._doc;
            return res.status(200).json({ token, ...rest });
        } catch (err) {
            return res.status(500).json(err.response);
        }
    }
}

module.exports = new AuthController();
