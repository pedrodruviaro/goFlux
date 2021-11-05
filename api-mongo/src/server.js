const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 5000;

// middlewares
server.use(express.json());
server.use(cors({ origin: "*" }));

// routes
server.use("/api/auth", require("./routes/auth"));
server.use("/api/offer", require("./routes/offer"));

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        server.listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)
        );
    } catch (err) {
        throw new Error("Something wrong happened");
    }
})();
