const Joi = require("joi");

class OfferValidation {
    newOffer(data) {
        const schema = Joi.object({
            from: Joi.string().required(),
            to: Joi.string().required(),
            initial_value: Joi.number().required().min(1),
            amount: Joi.number().required().min(1),
            amount_type: Joi.string().required(),
        });

        return schema.validate(data);
    }

    newBid(data) {
        const schema = Joi.object({
            value: Joi.number().required().min(1),
            amount: Joi.number().required().min(1),
            id_offer: Joi.string().required(true),
        });

        return schema.validate(data);
    }
}

module.exports = new OfferValidation();
