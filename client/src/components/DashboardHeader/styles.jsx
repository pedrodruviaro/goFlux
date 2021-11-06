import styled from "styled-components";

export const DashboardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
    height: 4rem;

    background-color: ${(props) => props.theme.darkBlue};
    color: ${(props) => props.theme.light};

    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

    img {
        max-width: 100px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        font-size: 120%;
        cursor: pointer;
    }
`;
