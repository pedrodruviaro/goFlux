import { BsPersonCircle } from "react-icons/bs";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

export const Profile = () => {
    const { user } = useAuth();

    return (
        <Container>
            <BsPersonCircle />
            <span>{user.name}</span>
        </Container>
    );
};
