import React, { useState } from "react";
import { Hamburger, Navbar, HeaderHome } from "./styles";

export default function Index() {
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

            <Navbar open={navbarOpen}>
                <a href="/">Serviços</a>
                <a href="/">Sobre nós</a>
                <a href="/">Blog</a>
                <a href="/">Contato</a>
            </Navbar>
        </HeaderHome>
    );
}
