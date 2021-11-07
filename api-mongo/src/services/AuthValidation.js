const Joi = require("joi");

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,72}$/;
const docPattern =
    /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

class AuthValidation {
    register(data) {
        const schema = Joi.object({
            email: Joi.string().email().min(6).max(150).required(),
            password: Joi.string()
                .min(6)
                .max(72)
                .required()
                .regex(passwordPattern),
            doc: Joi.string().required().regex(docPattern),
            name: Joi.string().min(6).max(150).required(),
            site: Joi.string().min(10).max(255).required(),
            about: Joi.string().min(10).max(255).required(),
        });

        return schema.validate(data);
    }

    login(data) {
        const schema = Joi.object({
            email: Joi.string().email().min(6).max(150).required(),
            password: Joi.string()
                .min(6)
                .max(72)
                .required()
                .regex(passwordPattern),
        });

        return schema.validate(data);
    }
}

module.exports = new AuthValidation();
