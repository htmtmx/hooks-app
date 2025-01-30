import { useState } from "react";

export const useSimpleForm = (initialState) => {
    const [formState, setFormState] = useState(initialState);

    const onChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value })
    }
    return {
        formState,
        onChange
    }
}
