import { Container } from "./styles";
import { Header } from "../../components/Header";
import { LoginContainer } from "../../components/LoginContainer";

export const Login = () => {
    return (
        <Container>
            <Header home />
            <LoginContainer />
        </Container>
    );
};
