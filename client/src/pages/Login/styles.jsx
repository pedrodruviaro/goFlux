import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;

    display: flex;
    align-items: stretch;

    > * {
        flex: 1;
    }

    @media (max-width: 720px) {
        background-image: url(${"/images/home.jpg"});
        background-color: rgba(0, 0, 0, 0.8);
        background-blend-mode: multiply;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        color: white;
    }
`;

export const BannerContainer = styled.div`
    background-image: url(${"/images/home.jpg"});
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    img {
        max-width: 200px;
        margin: 1rem auto;
    }

    @media (max-width: 720px) {
        display: none;
    }
`;

export const RightSide = styled.div`
    max-width: 40rem;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > div {
        h1 {
            font-size: clamp(2rem, 4vw, 3.75rem);
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

        span {
            font-weight: 600;
        }

        button {
            width: 100%;
            margin-top: 1rem;
        }
    }
`;
