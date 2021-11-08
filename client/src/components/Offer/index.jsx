import React from "react";
import moment from "moment";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Offer = ({ offer, bid = true }) => {
    return (
        <Container className="animate-up">
            <div>
                <span>De: {offer.from}</span>
                <AiOutlineArrowDown />
                <span>Para: {offer.to}</span>
            </div>
            <div>
                Carga:{" "}
                <strong>
                    {offer.amount_type === "TON"
                        ? offer.amount / 1000
                        : offer.amount}{" "}
                    TON
                </strong>
            </div>
            <div>
                <p>
                    Valor Inicial:{" "}
                    <strong>R$ {offer.initial_value} / TON</strong>
                </p>
                <span>Lances: {offer.bids.length}</span>
            </div>
            <span className="date">
                {moment(offer.createdAt).format("DD/MM/YYYY")}
            </span>
            {bid && (
                <Link className="animate-pop" to={`/offer/${offer._id}`}>
                    Ver Oferta
                </Link>
            )}
        </Container>
    );
};
