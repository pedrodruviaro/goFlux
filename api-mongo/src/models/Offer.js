const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
    {
        id_customer: {
            type: String,
            required: true,
        },
        from: {
            type: String,
            required: true,
            min: 6,
            max: 200,
        },
        to: {
            type: String,
            required: true,
            min: 6,
            max: 200,
        },
        initial_value: {
            type: Number,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        amount_type: {
            type: String,
            required: true,
        },
        finished: {
            type: Boolean,
            default: false,
        },
        bids: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("offers", OfferSchema);
