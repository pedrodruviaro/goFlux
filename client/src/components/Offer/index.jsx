import React from "react";
import moment from "moment";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Offer({ offer }) {
    return (
        <Container>
            <div>
                <span>De: {offer.from}</span>
                <span>Para: {offer.to}</span>
            </div>
            <div>
                Carga:{" "}
                {offer.amount_type === "TON"
                    ? offer.amount / 1000
                    : offer.amount}
            </div>
            <p>Valor Inicial: {offer.initial_value}</p>
            <div>
                <span>Lances: {offer.bids.length}</span>
                <span>{moment(offer.createdAt).format("DD/MM/YYYY")}</span>
                <Link to={`/offer/${offer._id}`}>Ver Oferta</Link>
            </div>
        </Container>
    );
}
