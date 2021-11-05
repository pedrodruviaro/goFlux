import React, { useState } from "react";
import { Container, BannerContainer, RightSide } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button } from "../../components/Button";
import { InputWrapper } from "../../components/InputWrapper";

export default function Index() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Container>
            <BannerContainer>
                <img src="/images/logo.png" alt="" />
            </BannerContainer>
            <RightSide>
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
                    <Button secondary>Cadastre-se agora</Button>
                </section>
            </RightSide>
        </Container>
    );
}
