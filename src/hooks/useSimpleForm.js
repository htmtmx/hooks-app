import { useState } from "react";

export const useSimpleForm = (initialFormState) => {
    const [formState, setFormState] = useState(initialFormState);

    const onChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value })
    }

    const resetForm = (e) => {
        e.preventDefault();
        setFormState(initialFormState);
    }
    return {
        formState,
        onChange,
        resetForm
    }
}
