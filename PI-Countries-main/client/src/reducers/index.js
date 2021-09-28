import axios from 'axios'
const initialState = {
  paises: [],
  paisdetalle:[],
  paisbuscado:[],
  estado:''
}

export default (state=initialState,action)=>{

  switch (action.type) {
    case 'GET_DATA':
      return {...state,paises:action.data}
    case 'GET_DATA_DET':
      return {...state,paisdetalle:action.data}
    case 'POST_DATA':
      (async function (data){
        const result = await axios.post('http://localhost:3001/activity', data)
      })(action.data)
      return {...state}
    case 'GET_PAIS':
      var paisEncontrado = state.paises.filter((el)=>el.nombre===action.data)
      return {...state,paisbuscado:paisEncontrado,estado:''}
    case 'ORD_ASC':
      var asc = state.paises.sort(function (el1,el2){
        if (el1.nombre > el2.nombre) {
          return 1;
        }
        if (el1.nombre < el2.nombre) {
          return -1;
        }
        return 0;
      })
      
      return{...state,paises:asc}

    case 'ORD_DES':
      var asc = state.paises.sort(function (el1,el2){
        if (el1.nombre < el2.nombre) {
          return 1;
        }
        if (el1.nombre > el2.nombre) {
          return -1;
        }
        return 0;
      })
      
      return{...state,paises:asc}
    case 'GET_CONT':
      var paisEncontrado = state.paises.filter((el)=>el.continente===action.data)
      return {...state,paisbuscado:paisEncontrado,estado:'continente'}
    case 'GET_ACT':
      var paisEncontrado=[];
      state.paises.forEach((el)=>{
         el.actividades?.filter((el1)=>{
          if(el1.nombre === action.data){
            paisEncontrado.push(el)
          }
        })
      })

      return {...state,paisbuscado:paisEncontrado,estado:'actividades'}

    default:
      return {...state};
  }
}


