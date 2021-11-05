const router = require("express").Router();
const AuthController = require("../controllers/AuthController");

/*
    @POST - /api/auth/register
    body - email, password, doc, name, site, about, user_type
*/
router.post("/register", AuthController.register);

/*
    @POST - /api/auth/login
    body - email, password
*/
router.post("/login", AuthController.login);

module.exports = router;
