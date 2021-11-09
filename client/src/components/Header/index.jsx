import { useState } from "react";
import { Hamburger, Navbar, HeaderHome } from "./styles";
import { Profile } from "../Profile";
import { Link } from "react-router-dom";

export const Header = ({ home }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <HeaderHome>
            <Link to="/">
                <img src="/images/logo.png" alt="" />
            </Link>
            <Hamburger
                active={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <span></span>
            </Hamburger>

            {home ? (
                <Navbar open={navbarOpen}>
                    <a href="/">Serviços</a>
                    <a href="/">Sobre nós</a>
                    <a href="/">Blog</a>
                    <a href="/" className="contact">
                        Contato
                    </a>
                </Navbar>
            ) : (
                <Navbar open={navbarOpen}>
                    <Link to="/dashboard">Minhas Ofertas</Link>
                    <Link to="/offers">Todas as ofertas</Link>
                    <Profile />
                </Navbar>
            )}
        </HeaderHome>
    );
};
