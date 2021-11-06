import { Container } from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Offer from "../../components/Offer";
import { Button } from "../../components/Button";
import Header from "../../components/Header";

export default function Index() {
    const { user } = useAuth();
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        console.log(user);
        (async () => {
            const { data } = await api.get(`/offer/${user._id}`);
            setOffers(data);
        })();
    }, [user]);

    return (
        <>
            <Header user={user} />
            <Container>
                <div>
                    <h2>Minhas Ofertas</h2>
                    <Button secondary>Nova Oferta</Button>
                </div>
                <ul>
                    {offers.map((offer) => (
                        <Offer offer={offer} key={offer.createdAt} />
                    ))}
                </ul>
            </Container>
        </>
    );
}
