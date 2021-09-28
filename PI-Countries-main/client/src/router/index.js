import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Landing from '../views/Landing'
import FourOFour from '../views/404'
import Home from '../views/Home'
import PaisDetalle from '../views/Home/components/HomePais/components/PaisDetalle'
import Actividades from '../views/Home/components/Actividades'

const index = (props) => {
  return (
  	<Router>
      
  		<Switch>
        <Route path="/Home/PaisDetalle/:uid">
          <PaisDetalle/>
        </Route>
        <Route path="/Home/Actividades">
          <Actividades/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
  			<Route path="/" exact>
  				<Landing/>
  			</Route>
  			<Route>
  				<FourOFour/>
  			</Route>
  			
  		</Switch>


  	</Router>
    
  )
}

export default index;