import React from "react";
import moment from "moment";

export default function Index({ offer }) {
    return (
        <li key={offer.createdAt}>
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
                <a href="/">Ver Oferta</a>
            </div>
        </li>
    );
}
