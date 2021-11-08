import { Container } from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { OffersList } from "../../components/OffersList";
import { NewOfferModal } from "../../components/NewOfferModal";

export const Dashboard = () => {
    const { user } = useAuth();
    const [offers, setOffers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newOffer, setNewOffer] = useState(false);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/offer/all`);
            setOffers(data);
        })();
        setNewOffer(false);
    }, [user, newOffer]);

    return (
        <>
            <Header user={user} />
            <Container>
                <div>
                    <h2>Minhas Ofertas</h2>
                    <Button
                        type="button"
                        secondary
                        onClick={() => setModalOpen(true)}
                    >
                        Nova Oferta
                    </Button>
                </div>
                {offers.length === 0 && <h4>Sem ofertas cadastradas.</h4>}
                <OffersList offers={offers} />

                {modalOpen && (
                    <NewOfferModal
                        setNewOffer={setNewOffer}
                        setModalOpen={setModalOpen}
                    />
                )}
            </Container>
        </>
    );
};
