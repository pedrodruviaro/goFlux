import { Container } from "./styles";
import HeaderHome from "../../components/HeaderHome";
import LoginContainer from "../../components/LoginContainer";

export default function Index() {
    return (
        <Container>
            <HeaderHome />
            <LoginContainer />
        </Container>
    );
}
