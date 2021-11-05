import { useState } from "react";
import { Button } from "../Button";
import { InputWrapper } from "../InputWrapper";
import RegisterModal from "../RegisterModal";
import { LoginContainer } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

export default function Index() {
    const [showPassword, setShowPassword] = useState(false);
    const [modalRegisterOpen, setModalRegisterOpen] = useState(false);

    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <LoginContainer>
            <div>
                <h1>Bem vindo à goFlux</h1>
                <span>Conectamos empresas à prestadores de serviço.</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputWrapper>
                        <input
                            type="email"
                            id="email"
                            placeholder=" "
                            className="form__input"
                            {...register("email")}
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
                            {...register("password")}
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
                <Button secondary onClick={() => setModalRegisterOpen(true)}>
                    Cadastre-se agora
                </Button>
            </section>

            {modalRegisterOpen && (
                <RegisterModal setModalRegisterOpen={setModalRegisterOpen} />
            )}
        </LoginContainer>
    );
}
