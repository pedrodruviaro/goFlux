import styled from "styled-components";

export const Container = styled.div`
    max-width: 40rem;
    margin: 4rem auto 0;
    padding: 2rem;

    display: flex;
    flex-direction: column;

    > div {
        h1 {
            font-size: clamp(2.25rem, 4vw, 3.75rem);
            line-height: 1;
            margin-bottom: 0.5rem;
        }
        span {
            margin-bottom: 2rem;
            display: block;
            font-size: 1.15rem;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;

            a {
                display: inline-block;
                margin-left: auto;
                text-decoration: underline;
                font-weight: bold;
                /* margin-top: -1rem; */
            }
        }
    }

    > section {
        text-align: center;
        margin-top: 5rem;

        span {
            font-weight: 600;
        }

        button {
            width: 100%;
            margin-top: 1rem;
        }
    }
`;
