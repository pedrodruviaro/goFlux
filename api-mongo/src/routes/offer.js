const router = require("express").Router();
const tokenValidation = require("../services/tokenValidation");
const OfferController = require("../controllers/OfferController");

router.use(tokenValidation);

/*
    @POST - /api/offer/new
    body - id_embarcador, from, to, initial_value, amount, amount_type
*/
router.post("/new", OfferController.new);

/*
    @POST - /api/offer/new
    body - id_transportador, id_offer, value, amount 
*/
router.post("/bid", OfferController.newBid);

/*
    @GET - /api/offer/all
    - all from a user
*/
router.get("/all", OfferController.getFromUser);

/*
    @GET - /api/offer/:id
    - single offer
*/
router.get("/:id", OfferController.getById);

/*
    @GET - /api/offer
    - all offers in db
*/
router.get("/", OfferController.getAll);

module.exports = router;
