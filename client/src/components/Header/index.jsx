import { useState } from "react";
import { Hamburger, Navbar, HeaderHome } from "./styles";
import Profile from "../Profile";
import { Link } from "react-router-dom";

export function Header(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <HeaderHome>
            <h1>
                <img src="/images/logo.png" alt="" />
            </h1>
            <Hamburger
                active={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <span></span>
            </Hamburger>

            {props.home ? (
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
}
