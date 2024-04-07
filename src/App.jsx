import './App.css'
import Contador from './components/Contador'

function App() {

  return (
    <div className='h-screen w-screen text-center'>

      <header className='bg-background1 h-full flex flex-col items-center text-3xl text-gray-700'>

        <Contador />

      </header>

    </div>
  )
}

export default App
