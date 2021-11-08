import { useState, useEffect } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useForm } from "../../hooks/useForm";

import { Container } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { Radio } from "../Radio";
import { api } from "../../services/api";

export const NewOfferModal = ({ setModalOpen }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [amountType, setAmountType] = useState("TON");

    const domNode = useClickOutside(() => {
        setIsOpen(false);
        setModalOpen(false);
    });

    const from = useForm("from");
    const to = useForm("to");
    const initial_value = useForm("initial_value");
    const amount = useForm("amount");

    const onSubmit = async (e) => {
        e.preventDefault();
        if (
            from.validate() &&
            to.validate() &&
            initial_value.validate() &&
            amount.validate()
        ) {
            // from, to, initial_value, amount, amount_type
            const newOffer = {
                from: from.value,
                to: to.value,
                initial_value: initial_value.value,
                amount: amount.value,
                amount_type: amountType,
            };
            await api.post("/offer/new", newOffer);
            console.log("oferta criada");
        }
    };

    useEffect(() => {
        (async () => {
            // const {data} = await api.get('/offer/')
        })();
    }, []);

    return (
        <Container active={isOpen} ref={domNode}>
            <h2>Cria sua conta de maneira simples!</h2>
            <form onSubmit={onSubmit}>
                <Input
                    type="text"
                    placeholder="Ex.: Rio de Janeiro - RJ"
                    label="Origem"
                    {...from}
                />
                <Input
                    type="text"
                    placeholder="Ex.: Rio Branco - AC"
                    label="Destino"
                    {...to}
                />
                <Input
                    type="number"
                    placeholder="Valor inicial"
                    label="Valor Inicial"
                    {...initial_value}
                />

                <Input
                    type="number"
                    placeholder="Ex.: 1000"
                    label="Tamanho da carga"
                    {...amount}
                />

                <Radio
                    options={["TON", "Kg"]}
                    value={amountType}
                    setValue={setAmountType}
                />

                <Button type="submit" secondary>
                    Cadastrar Oferta
                </Button>
            </form>
        </Container>
    );
};
