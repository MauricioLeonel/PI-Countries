import React,{useState,useEffect} from 'react';
import HomePais from './components/HomePais'
import * as createAction from '../../actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';


const BarraDer = (props) => {
  var [pagina,setPagina] = useState(9)
  // var [cantidadPagina,setCantidadPagina] = useState(0)
  var [page,setPage] = useState(0)

  useEffect(()=>{
    props.getData()
  },[])

  useEffect(()=>{
    if(props.estado==='continente'){
      props.getCont(props.paisBuscado[0].continente)
    }else if(props.estado==='actividades'){
      props.getActivity(props.paisBuscado[0].continente)
    }
    else{
       props.getPais()
    }
  },[pagina])

  const handleClickNextPage = ()=>{
    if(pagina<(props.paisBuscado.length)){
      setPagina(pagina+10)
      setPage(page+1)
    }
    if(pagina<(props.paises.length) && props.estado===''){
      setPagina(pagina+10)
      setPage(page+1)
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
    		<h1>Paises</h1>
    		<HomePais paginaPos={pagina}/>
        <div className="contenedor_paginado">
          <button onClick={handleClickPrevPage}>Prev. Pag</button>
          <span>{page}</span>
          <button onClick={handleClickNextPage}>Sig. Pag</button>
        </div> 
    </div>
  )
}


const mapStateToProps = (state)=>{
  return {
    paises: state.paises,
    paisBuscado:state.paisbuscado,
    estado:state.estado,
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(createAction, dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(BarraDer);