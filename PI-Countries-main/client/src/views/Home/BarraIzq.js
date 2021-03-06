import React from 'react';
import {Link} from 'react-router-dom'
import logo from './astronaut-icon.png'
import * as createAction from '../../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const BarraIzq = (props) => {
  var [buscador, setBuscador] = React.useState('')
  var [buscador1, setBuscador1] = React.useState('')
  var [buscador2, setBuscador2] = React.useState('')

  const handleChangeBuscador = (e)=>{
    setBuscador(e.target.value)
  }
  const handleChangeBuscador1 = (e)=>{
    setBuscador1(e.target.value)
  }
  const handleChangeBuscador2 = (e)=>{
    setBuscador2(e.target.value)
  }

  const handleClickBuscar = (e)=>{
    if(e.target.name==='buscador'){
      setBuscador([e.target.name,e.target.value])
    }
    if(e.target.name==='buscador1'){
      setBuscador1([e.target.name,e.target.value])
    }
    if(e.target.name==='buscador2'){
      setBuscador2([e.target.name,e.target.value])
    }
  }

  const handleClickLimpiar = (e)=>{
    setBuscador([])
    setBuscador1([])
    setBuscador2([])
    props.getData()
  }

  const handleClickAscendente = (e)=>{
    props.OrderAscent()
    props.getPais('')
  }

  const handleClickDes = (e)=>{
    props.OrderDes()
    props.getPais('')
  }


  React.useEffect(()=>{
    if(buscador[0]==='buscador'){
      props.getPais(buscador[1])
    }
    if(buscador1[0]==='buscador1'){
      props.getCont(buscador1[1])
    }
    if(buscador2[0]==='buscador2'){
      props.getActivity(buscador2[1])
    }
  },[buscador,buscador1,buscador2])

  
  return (
    <div className="contenedor-izq">
    		<ul>
          <Link to="/"><img src={logo} alt=""/></Link>
    			<li>Buscar Pais
    				<ul>
    					<input type="text" name="buscador" onChange={handleClickBuscar} value={buscador[1] ? buscador[1] : ''}/>
              <button className="boton-buscarpais" onClick={handleClickLimpiar}>limpiar</button>
    				</ul>
    			</li>
          <li>
            Filtrar por:
            <ul>
              <div>
                <input type="text" name="buscador1" onChange={handleClickBuscar} value={buscador1[1]? buscador1[1] : ''} placeholder="Por Continente"/>
                <button className="boton-buscarpais" onClick={handleClickLimpiar}>limpiar</button>
              </div>
              <div>
                <input type="text" name="buscador2" onChange={handleClickBuscar} value={buscador2[1]? buscador2[1] : ''} placeholder="Por Actividad"/>
                <button className="boton-buscarpais" onClick={handleClickLimpiar}>limpiar</button>
              </div>
            </ul>
          </li>
    			<li>Ordenar por nombre:
    				<ul>
    					<button onClick={handleClickAscendente}>Ascendente</button>
    					<button onClick={handleClickDes}>Descendente</button>
    				</ul>
    			</li>
    			<li>
    				<Link to='Home/Actividades'>Crear Actividad</Link>
    			</li>
    		</ul>
    	</div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(createAction,dispatch)
}

export default connect(null,mapDispatchToProps)(BarraIzq);