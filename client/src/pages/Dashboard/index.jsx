import { Container } from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Offer from "../../components/Offer";
import DashboardHeader from "../../components/DashboardHeader";

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
            <DashboardHeader user={user} />
            <Container>
                <h2>Minhas Ofertas</h2>
                <ul>
                    {offers.map((offer) => (
                        <Offer offer={offer} key={offer.createdAt} />
                    ))}
                </ul>
            </Container>
        </>
    );
}
