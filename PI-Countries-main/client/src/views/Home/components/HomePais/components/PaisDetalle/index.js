import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import { useParams} from "react-router-dom";
import * as createAction  from '../../../../../../actions'
import {bindActionCreators} from 'redux'
import './style.css'
import logo from './astronaut-icon.png'
import {Link} from 'react-router-dom'

const PaisDetalle = (props) => {
  let { uid } = useParams();
  useEffect(()=>{
    props.getDataDet(uid)
  },[])
  
  return (
    <div className="pais_contenedor">
      <div className="logo_img"> 
        <Link to="/Home"><img src={logo} alt=""/></Link>
      </div>
      <h2>Código: {props.paisdetalle.uid}</h2>
      <h2 style={{fontSize : "50px"}}>{props.paisdetalle.nombre}</h2>
      <div className="paisdet">
        <p>
          <h2>Capital</h2>
          {props.paisdetalle.capital}
        </p>
        <p>
          <h2>Continente</h2>
          {props.paisdetalle.subregion}
        </p>
        <p>
          <h2>Area</h2>
          Area:{props.paisdetalle.area}
        </p>
        <div className="paisdet_img">
          <img src={props.paisdetalle.img_bandera} alt=""/>
        </div>
      </div>
      <div className="contenedor-turismo">
        <h2>Actividad Turistica</h2>
        <div className="turismo">
          {
            props.paisdetalle.actividades?.length > 0 ?
            props.paisdetalle.actividades?.map((el,index)=>{
              return (
                <div className='contenedor-actividades'>
                  <div className='contenedor-actividades-title'>
                    <h3 key={index}>{el.nombre} </h3>
                  </div>
                  <h3 key={index}>Temporada:{el.temporada}</h3>
                  <h3 key={index}>Duracion:{el.duracion}</h3>
                  <h3 key={index}>Dificultad:{el.dificultad} </h3>
                </div>
              )
            }):
            <h3>sin actividades cargardas</h3>
          }
        </div>
          
      </div>
      
      

    </div>
  )
}

var mapStateToProps = (state)=>{
  return {
    paisdetalle:state.paisdetalle
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(createAction, dispatch);
}




export default connect(mapStateToProps,mapDispatchToProps)(PaisDetalle);