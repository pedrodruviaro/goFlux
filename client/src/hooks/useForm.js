import { useState } from "react";

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email inválido",
    },
    password: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,72}$/,
        message:
            "A senha deve conter entre 6 e 72 dígitos com pelo menos 1 número",
    },
    doc: {
        // eslint-disable-next-line no-useless-escape
        regex: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        message: "Digite um documento válido",
    },
};

export const useForm = (type) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);

    function validate(value) {
        if (type === false) {
            return true;
        }

        if (value.length === 0) {
            setError("Preencha este campo");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange(event) {
        if (error) {
            validate(event.target.value);
        }

        setValue(event.target.value);
    }

    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
    };
};
