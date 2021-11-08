import { useState } from "react";
import { Container } from "./styles";

import { Button } from "../Button";
import { Input } from "../Input";

import { useClickOutside } from "../../hooks/useClickOutside";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

export const RegisterModal = ({ setModalRegisterOpen }) => {
    const [isOpen, setIsOpen] = useState(true);

    const { register } = useAuth();
    const name = useForm("name");
    const email = useForm("email");
    const password = useForm("password");
    const doc = useForm("doc");
    const site = useForm("site");
    const about = useForm("about");

    const onSubmit = (e) => {
        e.preventDefault();
        if (
            name.validate() &&
            email.validate() &&
            password.validate() &&
            doc.validate() &&
            site.validate() &&
            about.validate()
        ) {
            const newUser = {
                name: name.value,
                email: email.value,
                password: password.value,
                doc: doc.value,
                site: site.value,
                about: about.value,
            };

            register(newUser);
        }
    };

    let domNode = useClickOutside(() => {
        setIsOpen(false);
        setModalRegisterOpen(false);
    });

    return (
        <Container active={isOpen} ref={domNode}>
            <h2>Cria sua conta de maneira simples!</h2>
            <form onSubmit={onSubmit}>
                <Input
                    type="text"
                    placeholder="Nome completo"
                    label="Nome"
                    {...name}
                />
                <Input
                    type="email"
                    placeholder="Email de contato"
                    label="Email"
                    {...email}
                />
                <Input
                    type="password"
                    placeholder="Senha para acesso"
                    label="Senha"
                    {...password}
                />
                <Input
                    type="text"
                    placeholder="Ex. 00000-000"
                    label="CPF ou CPNJ"
                    {...doc}
                />
                <Input
                    type="text"
                    placeholder="Site da empresa/pessoal"
                    label="Site"
                    {...site}
                />

                <Input
                    type="text"
                    placeholder="Uma frase sobre a empresa"
                    label="Sobre"
                    {...about}
                />

                <Button type="submit">Cadastrar</Button>
            </form>
        </Container>
    );
};
