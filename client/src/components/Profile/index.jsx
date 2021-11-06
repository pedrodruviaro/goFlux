import { BsPersonCircle } from "react-icons/bs";
import { useAuth } from "../../hooks/useAuth";
import { Profile } from "./styles";

export default function Index() {
    const { user } = useAuth();

    return (
        <Profile>
            <BsPersonCircle />
            <span>{user.name}</span>
        </Profile>
    );
}
