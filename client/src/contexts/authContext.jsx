import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext();
AuthContext.displayName = "Auth Context";

export default function AuthContextProvider({ children }) {
    const history = useHistory();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authorized, setAuthorized] = useState(false);

    // LOGIN
    async function login(credentials) {
        setLoading(true);
        try {
            const { data } = await api.post("/auth/login", credentials);
            if (!data) return;

            setUser(data);
            setAuthorized(true);
            api.defaults.headers.authorization = `Bearer ${data.token}`;
            setLoading(false);
            history.push("/dashboard");
        } catch (err) {
            setAuthorized(false);
            console.error(err.response.data);
        }
    }

    // REGISTER
    async function register(userData) {
        setLoading(true);
        try {
            const { data } = await api.post("/auth/register", userData);
            if (!data) throw Error("Something went wrong");

            const { email, password } = userData;
            login({ email, password });
        } catch (err) {
            setAuthorized(false);
            console.error(err.response.data);
        }
    }

    // LOGOUT
    async function logout() {
        setUser(null);
        setAuthorized(false);
        api.defaults.headers.authorization = undefined;
        history.push("/login");
    }

    return (
        <AuthContext.Provider
            value={{ login, register, logout, authorized, loading, user }}
        >
            {children}
        </AuthContext.Provider>
    );
}
