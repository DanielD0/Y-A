import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GiBasketballJersey,GiBasketballBasket,GiDiamondTrophy } from 'react-icons/gi';
import { TbHeartHandshake,TbHexagonNumber8 } from 'react-icons/tb';
import { IconContext } from "react-icons";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="scale-up-vertical-center">
      <h1 className='container'>Yael y Ashley ❤</h1>
      <p className='container'>Estimados Yael y Ashley,me da gusto verlos crecer y juntos empezar este nuevo partido</p>
      <div className='container'>
      <IconContext.Provider value={{ className: 'react-icons' }}>
      <GiBasketballJersey />
      </IconContext.Provider>
      </div>
     
      <p className='container'>Nos a tocado verlos desde casi </p>
      <div className='container'>
      <IconContext.Provider value={{ className: 'react-icons' }}>
      <TbHexagonNumber8/>
      </IconContext.Provider>
      </div> 
      <p className='container'>años</p>
      
      <p className='container'>jugar juntos en el mismo equipo</p>
      <div className='container'>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <TbHeartHandshake />
      </IconContext.Provider>
      </div>
      <p className='container'>Y cada partido que juegan es un honor acompanarlos</p>
      <div className='container'>
      <IconContext.Provider value={{ className: 'react-icons' }}>
      <GiBasketballBasket />
      </IconContext.Provider>
      </div>
      <p className='container'>A pesar de sus derrotas han sido mas sus victorias y demuestran que de cada derrota se caen
        y se hacen mas fuertes
      </p>
      <div className='container'>
      <IconContext.Provider value={{ className: 'react-icons' }}>
      <GiDiamondTrophy/>
      </IconContext.Provider>
      </div>
      <p className='container'>Gracias por siempre ensenarnos la gran pareja que son y les deseamos lo mejor en esta nueva etapa</p>
      <p className='container'>Muchas felicidades y mucho exito</p>
    </div>
  )
}

export default App