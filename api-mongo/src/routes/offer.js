const router = require("express").Router();
const tokenValidation = require("../services/tokenValidation");
const OfferValidation = require("../services/OfferValidation");
const Offer = require("../models/Offer");
/*
    @POST - /api/offer/new
    body - id_embarcador, from, to, initial_value, amount, amount_type, finished
*/
router.post("/new", tokenValidation, async (req, res) => {
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
        amount_type,
    };

    if (amount_type.toLowerCase() === "ton") {
        offer.amount = amount * 1000;
    }

    try {
        const newOffer = new Offer(offer);
        const savedOffer = await newOffer.save();
        return res.status(201).json(savedOffer);
    } catch (error) {
        return res.status(500).json({ error: error.response });
    }
});

/*
    @POST - /api/offer/new
    body - id_transportador, id_offer, value, amount 
*/
router.post("/bid", tokenValidation, async (req, res) => {
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
});

/*
    @GET - /api/offer/all
*/
router.get("/all", async (req, res) => {
    try {
        const offers = await Offer.find({ finished: false });
        return res.status(200).json(offers);
    } catch (error) {
        return res.status(500).json({ error: error.response });
    }
});

/*
    @GET - /api/offer/:id
*/
router.get("/:id", tokenValidation, async (req, res) => {
    const { userId } = req.user;
    const idParams = req.params.id;

    if (userId !== idParams) {
        return res
            .status(403)
            .json({ error: "You can only see your own offers" });
    }

    try {
        const offers = await Offer.find({ id_customer: userId });
        return res.status(200).json(offers);
    } catch (error) {
        return res.status(500).json({ error: error.response });
    }
});

module.exports = router;
