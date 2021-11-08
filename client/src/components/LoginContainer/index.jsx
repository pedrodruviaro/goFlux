import { useState } from "react";
import { Container } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";
import { RegisterModal } from "../RegisterModal";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

export const LoginContainer = () => {
    const [modalRegisterOpen, setModalRegisterOpen] = useState(false);

    const { login } = useAuth();
    const email = useForm("email");
    const password = useForm("password");

    const onSubmit = (e) => {
        e.preventDefault();

        if (email.validate() && password.validate()) {
            login({ email: email.value, password: password.value });
        }
    };

    return (
        <Container>
            <div>
                <h1>Bem vindo à goFlux</h1>
                <span>Conectamos empresas à prestadores de serviço.</span>
                <form onSubmit={onSubmit}>
                    <Input
                        type="email"
                        placeholder="Email de cadastro"
                        label="Email"
                        {...email}
                    />

                    <Input
                        type="password"
                        placeholder="Senha de cadastro"
                        label="Senha"
                        {...password}
                    />

                    <a href="/">Esqueceu sua senha?</a>
                    <Button>Login</Button>
                </form>
            </div>
            <section>
                <span>Não tem uma conta?</span>
                <Button secondary onClick={() => setModalRegisterOpen(true)}>
                    Cadastre-se agora
                </Button>
            </section>

            {modalRegisterOpen && (
                <RegisterModal setModalRegisterOpen={setModalRegisterOpen} />
            )}
        </Container>
    );
};
