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

        button {
            margin-right: 1rem;
        }

        h2 {
            font-size: clamp(2rem, 4vw, 2.5rem);
            margin-left: 1rem;
        }

        h4 {
            font-size: 1.25rem;
            margin: 1rem 0;
        }
    }
`;
