import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Offer } from "../../components/Offer";
import { Button } from "../../components/Button";
import { Bid } from "../../components/Bid";
import { Header } from "../../components/Header";
import { NewBidModal } from "../../components/NewBidModal";
import { Container } from "./styles";

export const SingleOffer = () => {
    const [offer, setOffer] = useState(null);
    const idParams = useParams().id;
    const [loading, setLoading] = useState(true);
    const [bidModalOpen, setBidModalOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/offer/${idParams}`);
            setOffer(data[0]);
            setLoading(false);
            console.log(data[0].bids);
        })();
    }, [idParams]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <Header />
            <Container>
                <Offer bid={false} offer={offer} />

                <section>
                    <div>
                        <h3>Lances</h3>
                        <Button secondary onClick={() => setBidModalOpen(true)}>
                            Novo Lance
                        </Button>
                    </div>
                    {offer.bids.length === 0 && (
                        <h4>Sem lances até o momento</h4>
                    )}
                    <ul>
                        {offer.bids.map((bid, index) => (
                            <Bid bid={bid} key={index} />
                        ))}
                    </ul>
                </section>

                {bidModalOpen && (
                    <NewBidModal
                        offer={offer}
                        setBidModalOpen={setBidModalOpen}
                    />
                )}
            </Container>
        </>
    );
};
