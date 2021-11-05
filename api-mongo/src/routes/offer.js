const router = require("express").Router();
const tokenValidation = require("../services/tokenValidation");
/*
    @POST - /api/offer/new
    body - id_embarcador, from, to, initial_value, amount, amount_type, finished
*/
router.post("/new", tokenValidation, async (req, res) => {
    res.json({ msg: "Hello from private" });
});

/*
    @POST - /api/offer/new
    body - id_transportador, id_offer, value, amount 
*/
router.post("/lance", tokenValidation, async (req, res) => {
    res.json({ msg: "Hello from private" });
});

/*
    @GET - /api/offer/all
*/
router.get("/all", async (req, res) => {
    res.json({ msg: "Hello from private offers" });
});

module.exports = router;
