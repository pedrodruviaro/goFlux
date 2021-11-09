import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Offer } from "../../components/Offer";
import { api } from "../../services/api";

export const Offers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/offer/all`);
            setOffers(data);
        })();
    }, []);

    return (
        <>
            <Header />
            <main>
                <ul>
                    {offers.map((offer) => (
                        <Offer offer={offer} key={offer.createdAt} />
                    ))}
                </ul>
            </main>
        </>
    );
};
