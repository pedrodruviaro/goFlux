import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export function useAuth() {
    const values = useContext(AuthContext);
    return values;
}
