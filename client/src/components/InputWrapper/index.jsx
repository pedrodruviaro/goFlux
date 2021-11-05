import styled from "styled-components";

export const InputWrapper = styled.div`
    position: relative;

    .form__input {
        font-size: 1rem;
        padding: 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.5);
        width: 100%;
        background-color: ${(props) => props.theme.light};

        &:focus {
            outline: 2px solid ${(props) => props.theme.darkBlue};
            outline-offset: -1px;
        }
    }

    .form__label {
        position: absolute;
        left: 0.5rem;
        top: 0.8rem;
        padding: 0 0.5rem;
        cursor: text;
        transition: top 200ms ease-in, left 200ms ease-in,
            font-size 200ms ease-in;
        background-color: ${(props) => props.theme.bodyBg};

        @media (max-width: 720px) {
            background-color: ${(props) => props.theme.light};
            color: ${(props) => props.theme.dark};
        }
    }
    .form__input:focus ~ .form__label,
    .form__input:not(:placeholder-shown).form__input:not(:focus)
        ~ .form__label {
        top: -0.5rem;
        font-size: 0.8rem;
        left: 0.8rem;
    }

    > button {
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        position: absolute;
        top: 1rem;
        right: 0.5rem;

        svg {
            pointer-events: none;
        }
    }
`;
