import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import logo from './astronaut-icon.png'
import card7 from './imgcarg/card7.jpg'
import card2 from './imgcarg/card2.jpg'
import card1 from './imgcarg/card1.jpg'

const Landing = (props) => {
  return (
  	<>
    <section className="section-header" >
		<div className="section-contenedor" >
	    	<div className="logo">
	    		<img src={logo} alt=""/>
	    	</div>
	    	<div className="titulo">
	    		<h1>Paises</h1>
	    		<p>Conocé el mundo como nosotros</p>
	    		<Link className="btn-start" to="/Home">COMENZAR</Link>
	    	</div>
	    </div>
    </section>
   
    <section className="section-info">
    	<div className="contenedor-info">
    		<div className="section-img">
    			<img src={card7} alt=""/>
    			<img src={card1} alt="" className="img2"/>
    			<img src={card2} alt="" className="img3"/>
    		</div>
    		<div className="section-contenido">
    			<div className="titulo-info">
	    			<h3>¿que encontrarás?</h3>
	    		</div>
    			<div className="sectioncard info-pais">
						<div className="section-titulo">
							<h3>Info Pais.</h3>
							<p>Conoceras cada información especifica de los paises, área, continente, capital, etc.</p>
						</div>
					</div>
					<div className="sectioncard section-actividad">
						<h3 className="section-titulo">Actividades.</h3>
						<p>Veras las actividades que se puede hacer de cada uno y los creados por la comunidad.</p>
					</div>
					<div className="sectioncard section-info-crear">
						<h3 className="section-titulo">
							Crea actividades.
						</h3>
						<p>
							Podras crear las actividades de tu tierra natal y que todo el mundo se entere.
						</p>
					</div>
				
    		</div>
    	</div>
    	<div className="contenedor-boton"> 
				<Link className="btn-start" to="/Home">COMENZAR</Link>
			</div>
    </section>
    
    <footer>
    		<div className="footer-logo">
	    		<img src={logo} alt=""/>
	    	</div>
	    	<div className="footer-fin">
	    		Paises
	    	</div>
    </footer>
   	</> 
  )
}

export default Landing;