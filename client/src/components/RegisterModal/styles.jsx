import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    width: min(30rem, 100%);
    background-color: ${(props) => props.theme.light};
    color: ${(props) => props.theme.dark};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    box-shadow: 0px 0px 100vw 100vw rgba(0, 0, 0, 0.6);
`;
