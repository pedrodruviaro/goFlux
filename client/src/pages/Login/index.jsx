import React, { useState } from "react";
import {
    Container,
    Hamburger,
    HeaderHome,
    LoginContainer,
    Navbar,
} from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button } from "../../components/Button";
import { InputWrapper } from "../../components/InputWrapper";
import RegisterModal from "../../components/RegisterModal";

export default function Index() {
    const [showPassword, setShowPassword] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [modalRegisterOpen, setModalRegisterOpen] = useState(false);

    return (
        <Container>
            <HeaderHome>
                <h1>
                    <img src="/images/logo.png" alt="" />
                </h1>
                <Hamburger
                    active={navbarOpen}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <span></span>
                </Hamburger>

                <Navbar open={navbarOpen}>
                    <a href="/">Serviços</a>
                    <a href="/">Sobre nós</a>
                    <a href="/">Blog</a>
                    <a href="/">Contato</a>
                </Navbar>
            </HeaderHome>
            <LoginContainer>
                <div>
                    <h1>Bem vindo à goFlux</h1>
                    <span>Conectamos empresas à prestadores de serviço.</span>

                    <form>
                        <InputWrapper>
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="form__input"
                            />
                            <label htmlFor="email" className="form__label">
                                Email
                            </label>
                        </InputWrapper>

                        <InputWrapper>
                            <input
                                type={!showPassword ? "password" : "text"}
                                id="password"
                                placeholder=" "
                                className="form__input"
                            />
                            <label htmlFor="password" className="form__label">
                                Senha
                            </label>

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {!showPassword ? (
                                    <AiOutlineEye />
                                ) : (
                                    <AiOutlineEyeInvisible />
                                )}
                            </button>
                        </InputWrapper>
                        <a href="/">Esqueceu sua senha?</a>
                        <Button>Login</Button>
                    </form>
                </div>
                <section>
                    <span>Não tem uma conta?</span>
                    <Button
                        secondary
                        onClick={() => setModalRegisterOpen(true)}
                    >
                        Cadastre-se agora
                    </Button>
                </section>

                {modalRegisterOpen && (
                    <RegisterModal
                        setModalRegisterOpen={setModalRegisterOpen}
                    />
                )}
            </LoginContainer>
        </Container>
    );
}
