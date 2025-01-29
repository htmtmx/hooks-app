import { useState } from "react";

export const useSimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'htmtmx',
        email: 'htmtmx@hotmail.com',
    });

    const onChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value })
    }
    return {
        formState,
        onChange
    }
}
