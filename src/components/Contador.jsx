import { useEffect, useState } from 'react'
import teamWork from '/work2.svg'
import Swal from 'sweetalert2'

const Contador = () => {

    // Estados
    const [contador, setContador] = useState(0)

    const incrementarContador = () => {
        setContador(contador + 1)
        localStorage.setItem('contador', contador + 1)
        Swal.fire({
            title: '¡Felicidades!',
            text: 'Has sumado un día sin accidentes laborales.',
            icon: 'success',
            confirmButtonText: 'OK!'
        })
    }

    const decrementarContador = () => {
        if (contador === 0) {
            Swal.fire({
                title: '¡Atención!',
                text: 'El contador no puede ser menor a 0.',
                icon: 'error',
                confirmButtonText: 'OK!'
            })
        } else {
            setContador(contador - 1)
            localStorage.setItem('contador', contador - 1)
            Swal.fire({
                title: '¡Cuidado!',
                text: 'Has restado un día sin accidentes laborales.',
                icon: 'error',
                confirmButtonText: 'OK!'
            })
        }
    }

    function resetearContador() {
        setContador(0)
        localStorage.setItem('contador', 0)
        Swal.fire({
            title: '¡Atención!',
            text: 'El contador ha sido reiniciado.',
            icon: 'info',
            confirmButtonText: 'OK!'
        })
    }
    
    useEffect(() => {
        const contadorLocalStorage = localStorage.getItem('contador')
        if (contadorLocalStorage) {
            setContador(Number(contadorLocalStorage))
        }
    }, [])

    return (
        <div>
            <h1 className='text-6xl mt-6 p-3 italic'>ZeroDaysAccidents</h1>

            <h2 className='text-4xl p-3 mt-2 mb-8 italic font-extralight'>Contador Días sin Accidentes Laborales</h2>

            <img src={teamWork} className="App-logo h-[50vmin] m-12" alt='teamwork'></img>

            <h1 className='italic text-5xl m-14 font-bold'>Contador: {contador} días sin accidentes.</h1>

            <div className='grid grid-cols-3 gap-10 p-10'>
                <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white font-bold py-3 rounded-full shadow-xl" onClick={decrementarContador}>
                    Disminuir
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white font-bold py-3 px-6 rounded-full shadow-xl" onClick={resetearContador}>
                    Reinicio
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white font-bold py-3 px-6 rounded-full shadow-xl" onClick={incrementarContador}>
                    Aumentar
                </button>
            </div>
        </div>
    )
}

export default Contador