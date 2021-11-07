const router = require("express").Router();
const tokenValidation = require("../services/tokenValidation");
const OfferController = require("../controllers/OfferController");

router.use(tokenValidation);

/*
    @POST - /api/offer/new
    body - id_embarcador, from, to, initial_value, amount, amount_type, finished
*/
router.post("/new", OfferController.new);

/*
    @POST - /api/offer/new
    body - id_transportador, id_offer, value, amount 
*/
router.post("/bid", OfferController.newBid);

/*
    @GET - /api/offer/all
*/
router.get("/all", OfferController.getAll);

/*
    @GET - /api/offer/:id
*/
router.get("/:id", OfferController.getById);

module.exports = router;
