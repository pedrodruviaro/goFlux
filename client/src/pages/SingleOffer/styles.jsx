import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem;

    section {
        padding-inline: 1rem;

        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 2rem 0;

            h3 {
                font-weight: bold;
                font-size: clamp(1.75rem, 2vw, 2.25rem);
            }
        }
    }

    ul {
        display: grid;
        gap: 1rem;
    }
`;
