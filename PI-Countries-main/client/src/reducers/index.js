import axios from 'axios'
import {point} from '../actions'
const initialState = {
  paises: [],
  paisdetalle:[],
  paisbuscado:[],
  estado:'',
  busqueda:''
}


export default (state=initialState,action)=>{

  switch (action.type) {
    case 'GET_DATA':
    
    if(action.data!=undefined){
     
      return {...state,paises:action.data,paisbuscado:[],estado:'todo',busqueda:''}
    }else{
      
      return {...state}
    }
      
    
    case 'GET_DATA_DET':
      return {...state,paisdetalle:action.data}
    case 'POST_DATA':
      (async function (data){
         await axios.post(`${point}/activity`, data)
      })(action.data)
      return {...state}
    case 'GET_PAIS':
      var paisEncontrado=[]
      state.paises.forEach( function(element, index) {
        if(element.nombre.includes(action.data)){
          paisEncontrado.push(element)
        }
      });
      return {...state,paisbuscado:paisEncontrado,estado:'pais',busqueda:action.data}
    case 'ORD_ASC':
      return{...state,paises:state.paises.sort(function (el1,el2){
        if (el1.nombre > el2.nombre) {
          return 1;
        }
        if (el1.nombre < el2.nombre) {
          return -1;
        }
        return 0;
      })}

    case 'ORD_DES':
      state.paises.sort(function (el1,el2){
        if (el1.nombre < el2.nombre) {
          return 1;
        }
        if (el1.nombre > el2.nombre) {
          return -1;
        }
        return 0;
      })


      return {...state}


    case 'GET_CONT':
      var paisEncontrado=[]
      if(action.data!==''){
        state.paises.forEach( function(element, index) {
          if(element.continente.includes(action.data)){
            paisEncontrado.push(element)
          }
        });
      }else{
        return {...state,paisbuscado:[]}
      }
      return {...state,paisbuscado:paisEncontrado,estado:'continente',busqueda:action.data}
    case 'GET_ACT':
      var paisEncontrado=[];
      if(action.data!==''){
        state.paises.forEach((el)=>{
           el.actividades?.filter((el1)=>{
            if(el1.nombre.includes(action.data)){
              paisEncontrado.push(el)
            }
          })
        })
      }else{
        return {...state,paisbuscado:[]}
      }
      return {...state,paisbuscado:paisEncontrado,estado:'actividades',busqueda:action.data}
      case 'ORD_ARE':
        // const paisOrde = state.paises .
        state.paises.sort(function(a,b){
          if(a.area < b.area){
            return 1;
          }
          if(a.area > b.area){
            return -1;
          }
          return 0;
        }) 

      return {...state}
    default:
      return {...state};
  }
}


