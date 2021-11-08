import { Container } from "./styles";

export const Radio = ({ options, value, setValue, ...rest }) => {
    return (
        <>
            {options.map((option) => (
                <Container key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={value === option}
                        onChange={(e) => setValue(e.target.value)}
                        {...rest}
                    />
                    {option}
                </Container>
            ))}
        </>
    );
};
