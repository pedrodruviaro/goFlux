import React from "react";
import { Offer } from "../Offer";
import { Container } from "./styles";

export const OffersList = ({ offers }) => {
    return (
        <Container>
            {offers.map((offer) => (
                <Offer offer={offer} key={offer.createdAt} />
            ))}
        </Container>
    );
};
