import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #eee;

    span:nth-child(2) {
        font-weight: bold;
    }
`;
