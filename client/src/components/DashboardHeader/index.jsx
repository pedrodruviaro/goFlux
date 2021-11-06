import { BsPersonCircle } from "react-icons/bs";
import { DashboardHeader } from "./styles";

export default function Index({ user }) {
    return (
        <DashboardHeader>
            <img src="/images/logo.png" alt="" />
            <div>
                <BsPersonCircle />
                <span>{user.name}</span>
            </div>
        </DashboardHeader>
    );
}
