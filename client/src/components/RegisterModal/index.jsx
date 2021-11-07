import React, { useState } from "react";
import { RegisterModal } from "./styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Button } from "../Button";
import { useAuth } from "../../hooks/useAuth";

// body - email, password, doc, name, site, about, user_type
const formFields = [
    { id: "name" },
    { id: "email" },
    { id: "password" },
    { id: "doc" },
    { id: "site" },
    { id: "about" },
];

export default function Index({ setModalRegisterOpen }) {
    const { register } = useAuth();
    const [isOpen, setIsOpen] = useState(true);
    const [form, setForm] = useState(
        formFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), 0)
    );

    const handleChange = ({ target }) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        register(form);
    };

    let domNode = useClickOutside(() => {
        setIsOpen(false);
        setModalRegisterOpen(false);
    });

    return (
        <RegisterModal active={isOpen} ref={domNode}>
            <h1>Cria sua conta de maneira simples!</h1>
            <form onSubmit={onSubmit}>
                <Button type="submit">Cadastrar</Button>
            </form>
        </RegisterModal>
    );
}
