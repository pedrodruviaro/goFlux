import { useEffect, useState } from "react";

export const useSessionStorage = (key, initial) => {
    const [state, setstate] = useState(() => {
        const localItem = sessionStorage.getItem(key);
        return localItem ? localItem : initial;
    });

    useEffect(() => {
        console.log("uiahe");
        sessionStorage.setItem(key, state);
    }, [key, state]);

    const removeUser = () => {
        sessionStorage.removeItem(key);
    };

    return [state, setstate, removeUser];
};
