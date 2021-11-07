import { useState } from "react";
import { Button } from "../Button";
import { RegisterModal } from "../RegisterModal";
import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export const LoginContainer = () => {
    const { login } = useAuth();
    const [modalRegisterOpen, setModalRegisterOpen] = useState(false);
    const [form, setForm] = useState({
        email: "pedro@gmail.com",
        password: "pedro1",
    });

    const handleChange = ({ target }) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        login(form);
    };

    return (
        <Container>
            <div>
                <h1>Bem vindo à goFlux</h1>
                <span>Conectamos empresas à prestadores de serviço.</span>
                <form onSubmit={onSubmit}>
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
