import styled, { css } from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    outline: none;
    border: none;

    padding: 0.5rem 1rem;

    background-color: ${(props) => props.theme.darkBlue};
    color: ${(props) => props.theme.light};
    font-weight: 600;

    transition: filter 200ms ease;

    &:hover {
        filter: brightness(0.8);
    }

    ${(props) =>
        props.secondary &&
        css`
            background-color: ${(props) => props.theme.darkRed};
        `}
`;
