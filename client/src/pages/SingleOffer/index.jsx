import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const SingleOffer = () => {
    const [offer, setOffer] = useState();
    const idParams = useParams().id;

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/offer/${idParams}`);
            console.log(data);
            setOffer(data);
        })();
    }, [idParams]);

    return <div>aqui vai oferta</div>;
};
