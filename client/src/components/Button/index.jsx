import React from "react";
import { Container } from "./styles";

export const Button = ({ children, ...rest }) => {
    return (
        <Container className="animate-pop delay-1" {...rest}>
            {children}
        </Container>
    );
};
