import React, { useState } from "react";
import { Input } from "../Input";
import { useForm } from "../../hooks/useForm";
import { Button } from "../Button";
import { Container } from "./styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import { api } from "../../services/api";

export const NewBidModal = ({ setBidModalOpen, offer }) => {
    const value = useForm("value");
    const amount = useForm("amount");
    const [isOpen, setIsOpen] = useState(true);

    let domNode = useClickOutside(() => {
        setIsOpen(false);
        setBidModalOpen(false);
    });

    async function sendNewBid(newBid) {
        await api.post("/offer/bid", newBid);
    }

    function handleSubmit(e) {
        e.preventDefault();

        try {
            if (value.validate() && amount.validate()) {
                const newBid = {
                    value: Number(value.value),
                    amount: Number(amount.value),
                };
                console.log(newBid);
                sendNewBid(newBid);
            }
        } catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <Container active={isOpen} ref={domNode}>
            <form onSubmit={handleSubmit}>
                <Input
                    type="number"
                    {...value}
                    label="Valor"
                    placeholder="Ex.: R$ 120"
                />
                <Input
                    type="number"
                    {...amount}
                    label="Carga"
                    placeholder="Ex.: 1000 TON"
                />
                <Button secondary>Dar Lance</Button>
            </form>
        </Container>
    );
};
