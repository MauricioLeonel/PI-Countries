import React,{useState,useEffect} from 'react';
import HomePais from './components/HomePais'
import * as createAction from '../../actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';


const BarraDer = (props) => {
  var [pagina,setPagina] = useState(9)
  var [page,setPage] = useState(0)

  useEffect(()=>{
    props.getData()
  },[])


  useEffect(()=>{
    setPagina(9)
    setPage(0)
  },[props.estado])

  useEffect(()=>{
    if(props.estado==="todo"){
      props.getData()
    }
    if(props.estado==="continente"){
      props.getCont(props.busqueda)
    }
    if(props.estado==="actividades"){
      props.getActivity(props.busqueda)
    }

    if(props.estado==="pais"){
      props.getPais(props.busqueda)
    }
  
  },[pagina])

  const handleClickNextPage = ()=>{
    if(props.estado==='todo' && pagina<props.paises.length){
      setPage(page+1)
      setPagina(pagina+10)
    }
    if(props.estado!=='todo' && pagina<props.paisBuscado.length-1){
      setPage(page+1)
      setPagina(pagina+10)
    }
  }

  const handleClickPrevPage = ()=>{
      if(page>=1){
        setPagina(pagina-10)
        setPage(page-1)
      }
  }

  return (
    <div className="contenedor-der">
        {
          props.estado!=='todo' && props.paisBuscado.length<1 ?
            <h1>no hay resultados</h1>
          :
            <>
              <h1>Paises</h1>
              <HomePais paginaPos={pagina}/>
              <div className="contenedor_paginado">
                <button onClick={handleClickPrevPage}>Prev. Pag</button>
                <span>{page}</span>
                <button onClick={handleClickNextPage}>Sig. Pag</button>
              </div>
            </>
        }
    		
    </div>
  )
}


const mapStateToProps = (state)=>{
  return {
    paises: state.paises,
    paisBuscado:state.paisbuscado,
    estado:state.estado,
    busqueda:state.busqueda,
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(createAction, dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(BarraDer);