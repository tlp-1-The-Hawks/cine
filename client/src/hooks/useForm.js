import { useState } from 'react';

export function useForm(initialState, callback) {
    const [values, setValues] = useState(initialState);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
}