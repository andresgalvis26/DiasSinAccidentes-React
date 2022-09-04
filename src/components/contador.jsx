import React, {useState} from 'react'

import myImage from '../images/work2.svg';


const Contador = () => {

    // @ Valor inicial para mi contador
    const valorInicial = 0;


    // @ Creando el estado
    const [contador, setContador] = useState(valorInicial);


    // @ Creando las funciones de incremento y decremento
    function incrementarContador() {
        setContador(contador + 1);
    }

    function decrementarContador() {
        setContador(contador - 1);
    }

    function contadorACero() {
        setContador(0);
    }


    return (
        <div>
            <h1>Contador de Días sin Accidentes Laborales</h1>

            <img src={myImage} className="App-logo" alt='teamwork'></img>

            <h1>Contador: {contador} días sin accidentes.</h1>

            <div>
                <button className='btn btn-decrementar' onClick={decrementarContador}>Decrementar/Decrease -1</button>
                <button className='btn btn-reiniciar' onClick={contadorACero}>Reiniciar/Reset = 0</button>
                <button className='btn btn-incrementar' onClick={incrementarContador}>Incrementar/Increase +1</button>
            </div>
        </div>
    )
}

export default Contador;