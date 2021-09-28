import React from 'react';
import './style.css'
import BarraIzq from './BarraIzq.js'
import BarraDer from './BarraDer.js'

const Home = (props) => {
  return (
    <div className="contenedor-home">
    	<BarraIzq/>
      <BarraDer/>
    </div>
  )
}

export default Home;