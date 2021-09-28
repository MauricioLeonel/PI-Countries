import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../../actions'
import {Link} from 'react-router-dom'
import './style.css'
import logo from './astronaut-icon.png'

const Actividades = (props) => {
  var [cantidadPais,setCantidadPais] = React.useState([1])
  var [envia,setEnvia] = React.useState({})
  var [cambiaEstado,setcambiaEstado] = React.useState(false)

  const agregarPais=(e)=>{
    e.preventDefault()

    var cantidad = cantidadPais.length
    setCantidadPais([...cantidadPais,cantidadPais[cantidad]+1])
  }

  const handleChange = (e)=>{
    e.preventDefault()
    const {name,value,id} = e.target
    if(cantidadPais.length>1 && name === "paises"){
      setEnvia({...envia,[name]:{...envia.paises,[id]:value}})
    }else if(cantidadPais.length === 1 && name === "paises"){
      setEnvia({...envia,[name]:{[id]:value}})
    }else{
      setEnvia({...envia,[name]:value})
    }
  }

  const enviarData = (e)=>{
    setcambiaEstado(true)
    props.postData(envia)
  }

 
  return (
    <div className="actividades_formu">
      <div>
        <Link to="/Home">
          <img src={logo} alt=""/>
        </Link>
      </div>
      {!cambiaEstado?

      <div className="actividades_formu_contenedor">

      <h2>Crear Actividad</h2>
      <form onSubmit={enviarData}>
        <label htmlFor="nombre">
          Nombre:
          <input type="text" name="nombre" placeholder="Ingrese una actividad" onChange={handleChange} required/>
        </label>
        <label htmlFor="dificultad">
          Dificultad:
          <input type="number" name="dificultad" placeholder="del 1 al 5" min="1" max="5" onChange={handleChange} required/>
        </label>
        <label htmlFor="duracion" >
          Duracion:
          <input type="number" name="duracion" placeholder="" onChange={handleChange} required/>
        </label>
        <label htmlFor="temporada">
          Temporada:
          <select name="temporada" onChange={handleChange} required>
            <option value=""></option>
            <option value="otoño">Otoño</option>
            <option value="invierno">Invierno</option>
            <option value="primavera">Primavera</option>
            <option value="verano">Verano</option>
          </select>
        </label>
        <label htmlFor="paises">
        </label>
        <label htmlFor="paises">
          <h2>Seleccione un pais</h2>
          {cantidadPais.map((el,index)=>{

              return (<select name="paises" id={index} key={index} onChange={handleChange} required>
                        <option value=""></option>
                        {props.paises?.map((el)=>{
                          return (
                              <option value={el.uid} >{el.nombre}</option>
                            )
                        })}
                      </select>)
          })}
          

          <button onClick={agregarPais}><h3>Agregar</h3></button>
        </label>
        <input type="submit"/>
      </form>
    </div>
        :
        <div className="creado">

          <h2>Se ha creado exitosamente!</h2>
          <div>
            <Link to="/Home" onClick={()=>{setcambiaEstado(false)}}>Ir al Home</Link>
            <Link to="#" onClick={()=>{setcambiaEstado(false)}}>Crear Actividad</Link>
          </div>
          
        </div>

      }

    </div>
    
    
  )
}

const mapStateToProps=(state)=>{
  return {
    paises:state.paises,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(actionCreators,dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(Actividades);