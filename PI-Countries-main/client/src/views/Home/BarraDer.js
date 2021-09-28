import React,{useState,useEffect} from 'react';
import HomePais from './components/HomePais'
import * as createAction from '../../actions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';



const INITIAL_PAGE = 0
const FINAL_PAGE = 24

const BarraDer = (props) => {
  var [pagina,setPagina] = useState(9)
  var [cantidadPagina,setCantidadPagina] = useState(0)
  var [page,setPage] = useState(INITIAL_PAGE)

  useEffect(()=>{
    props.getData()
  },[])

  useEffect(()=>{
    if(pagina===INITIAL_PAGE ) return
    if(props.estado==='continente'){
      props.getCont(props.paisBuscado[0].continente)
    }else if(props.estado==='actividades'){
      props.getActivity(props.paisBuscado[0].continente)
    }
    else{
       props.getPais('')
    }
    
  },[pagina])

  const handleClickNextPage = ()=>{
    if(pagina===INITIAL_PAGE ) return
    if(pagina<(props.paisBuscado.length)){
      setPagina(pagina+10)
      setPage(page+1)
    }
  }
  const handleClickPrevPage = ()=>{
    if(pagina>(props.paisBuscado.length)){
      if(page>1){
        setPagina(pagina-10)
        setPage(page-1)
      }
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