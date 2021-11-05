import React, { useState } from "react";
import { RegisterModal } from "./styles";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function Index({ setModalRegisterOpen }) {
    const [isOpen, setIsOpen] = useState(true);

    let domNode = useClickOutside(() => {
        setIsOpen(false);
        setModalRegisterOpen(false);
    });

    return (
        <RegisterModal active={isOpen} ref={domNode}>
            <h1>Cria sua conta de maneira simples!</h1>
            <p>lorem asheuihsaeiu </p>
        </RegisterModal>
    );
}
