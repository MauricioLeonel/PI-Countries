import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const HomePais = (props) => {

	//const paginaPos = props.cantPaises
	const [renderPais,setRenderPais] = React.useState([])
	React.useEffect(()=>{
		props.paisbuscado.length === 0?
		setRenderPais(props.paises?.slice(props.paginaPos-9,props.paginaPos)):
		setRenderPais(props.paisbuscado?.slice(props.paginaPos-9,props.paginaPos))
		
	},[props.paises,props.paisbuscado])


  return (
    <div className="contenedor-pais">
    	{renderPais?.map((el,index)=>{
    	    		return (
    	    			<Link className="paiscard" to={`Home/PaisDetalle/${el.uid}`} key={index}>
						    	<div className="info_pais">
						    		<p>{el.nombre}</p>
						    		<p>{el.continente}</p>
						    	</div>
						    	<div className='img_bandera'>
						    		<img src={el.img_bandera} alt="pais" />
						    	</div>
					    	</Link>
    	    			)
    	    	})}
    </div>
  )
}

const mapStateToProps=(state)=>{
	return {
		paises:state.paises,
		paisbuscado:state.paisbuscado
	}
}



export default connect(mapStateToProps)(HomePais);