import { Container } from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { OffersList } from "../../components/OffersList";

export default function Index() {
    const { user } = useAuth();
    const [offers, setOffers] = useState([]);

    useEffect(() => {
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
                <OffersList offers={offers} />
            </Container>
        </>
    );
}
