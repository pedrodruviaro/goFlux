const OfferValidation = require("../services/OfferValidation");
const Offer = require("../models/Offer");

class OfferController {
    async new(req, res) {
        const { error } = OfferValidation.newOffer(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { userId } = req.user;
        const { from, to, initial_value, amount, amount_type } = req.body;

        const offer = {
            id_customer: userId,
            from,
            to,
            initial_value,
            amount,
            amount_type: req.body.amount_type.toLowerCase(),
        };

        if (amount_type.toLowerCase() === "ton") {
            //ton -> kg
            offer.amount = amount * 1000;
        } else if (amount_type.toLowerCase() === "kg") {
            offer.amount = amount;
        }

        try {
            const newOffer = new Offer(offer);
            const savedOffer = await newOffer.save();
            return res.status(201).json(savedOffer);
        } catch (error) {
            return res.status(500).json({ error: error.response });
        }
    }

    async newBid(req, res) {
        const { error } = OfferValidation.newBid(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { userId } = req.user;
        const { value, amount, id_offer } = req.body;

        try {
            const offer = await Offer.findOne({ _id: id_offer });
            if (!offer) {
                return res.status(400).json({ error: "Offer not found " });
            }

            if (value <= offer.initial_value) {
                return res.status(400).json({
                    error: "The bid must be higher than the initial value",
                });
            }

            const newBid = {
                id_transporter: userId,
                id_offer,
                value,
                amount,
            };

            await Offer.findOneAndUpdate(
                { _id: offer._id },
                { $push: { bids: newBid } }
            );

            return res.status(200).json({ newBid });
        } catch (error) {
            return res.status(500).json({ error: error.response });
        }
    }

    async getFromUser(req, res) {
        const { userId } = req.user;

        try {
            const offers = await Offer.find({ id_customer: userId });
            return res.status(200).json(offers);
        } catch (error) {
            return res.status(500).json({ error: error.response });
        }
    }

    async getById(req, res) {
        const idParams = req.params.id;

        try {
            const offers = await Offer.find({ _id: idParams });
            return res.status(200).json(offers);
        } catch (error) {
            return res.status(500).json({ error: error.response });
        }
    }

    async getAll(req, res) {
        try {
            const offers = await Offer.find();
            return res.status(200).json(offers);
        } catch (error) {
            return res.status(500).json({ error: error.response });
        }
    }
}

module.exports = new OfferController();
