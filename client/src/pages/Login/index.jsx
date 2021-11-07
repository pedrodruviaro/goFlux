import { Container } from "./styles";
import { Header } from "../../components/Header";
import LoginContainer from "../../components/LoginContainer";

export default function Index() {
    return (
        <Container>
            <Header home />
            <LoginContainer />
        </Container>
    );
}
