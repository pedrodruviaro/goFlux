import styled from "styled-components";

export const Container = styled.article`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 350px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 700px) {
        a {
            flex: 999;
        }
    }

    a {
        cursor: pointer;
        display: inline-block;
        font-size: 1rem;
        outline: none;
        border: none;
        padding: 0.25rem 1rem;
        background-color: ${(props) => props.theme.darkBlue};
        color: ${(props) => props.theme.light};
        font-weight: 600;
    }

    div:first-child {
        display: grid;
        gap: 0.25rem;

        font-weight: 700;

        svg {
            font-size: 2rem;
            margin-inline: auto;
            color: ${(props) => props.theme.darkBlue};
        }
    }

    .date {
        font-weight: 700;
        font-size: 0.9rem;
    }
`;
