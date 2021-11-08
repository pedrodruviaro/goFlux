import { Container } from "./styles";
export const Bid = ({ bid }) => {
    return (
        <Container>
            <span>Quantidade: {bid.amount}</span>
            <span>R$ {bid.value} / TON</span>
            <span>
                Transportador: <strong>{bid.id_transporter}</strong>
            </span>
        </Container>
    );
};
