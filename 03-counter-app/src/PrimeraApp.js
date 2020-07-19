import React from 'react';

const PrimeraApp = ({ saludo, subtitulo = "Soy un subtítulo" }) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
    );
}

export default PrimeraApp;