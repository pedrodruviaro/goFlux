import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 2rem 1rem;

    > div {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;

        align-items: center;

        h2 {
            font-size: clamp(2rem, 4vw, 2.5rem);
        }
    }
`;
