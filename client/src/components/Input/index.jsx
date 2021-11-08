import React from "react";
import { Container } from "./styles";

export const Input = ({
    label,
    value,
    onChange,
    onBlur,
    type,
    placeholder,
    error,
}) => {
    return (
        <Container>
            {label}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />

            {error && <p>{error}</p>}
        </Container>
    );
};
