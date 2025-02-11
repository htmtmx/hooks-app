import React from "react";

export const Small = React.memo(({ counter }) => {
    console.log('Componente re renderizado');

    return (
        <small>{counter}</small>
    )
});
