import styled, { css } from "styled-components";

export const HeaderHome = styled.header`
    background-color: ${(props) => props.theme.darkBlue};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;

    position: relative;

    h1 {
        max-width: 150px;
    }
`;

export const Hamburger = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0.5rem 0 0.5rem;

    display: none;

    @media (max-width: 720px) {
        display: flex;
    }

    &:after,
    &:before {
        content: "";
        background-color: #fff;
        display: block;
        width: 30px;
        height: 2px;
        position: relative;

        transition: all 200ms;
    }

    span {
        background-color: #fff;
        display: block;
        width: 30px;
        height: 2px;
    }

    ${(props) =>
        props.active &&
        css`
            > span {
                display: none;
            }

            &:after {
                transform: rotate(45deg);
                top: -4px;
            }

            &:before {
                transform: rotate(-45deg);
                top: 4px;
            }
        `}
`;

export const Navbar = styled.nav`
    color: ${(props) => props.theme.light};
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;

    a:hover {
        filter: brightness(0.8);
    }

    a:last-child {
        background-color: ${(props) => props.theme.darkRed};
        padding: 0.25rem 1rem;
        border-radius: 20px;
    }

    @media (max-width: 720px) {
        position: fixed;
        background-color: ${(props) => props.theme.dark};
        right: 0;

        flex-direction: column;
        align-items: center;
        gap: 2rem;
        bottom: 0;
        top: 59px;
        padding-top: 2rem;
        width: 70%;
        max-width: 20rem;
        z-index: 2;

        transition: transform 300ms ease;
        transform: translateX(100%);

        ${(props) =>
            props.open &&
            css`
                transform: translateX(0);
            `}
    }
`;
