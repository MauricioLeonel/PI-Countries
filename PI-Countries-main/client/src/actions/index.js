import axios from 'axios'

export const point='https://paises-app-pi.herokuapp.com'

export function Data(data){
	return {
		type:'GET_DATA',
		data
	}
}

export function dataDet(data){
	return {
		type:'GET_DATA_DET',
		data
	}
}

export function postData(data){
	return {
		type:'POST_DATA',
		data
	}
}

export function getPais(data){
	return {
		type:'GET_PAIS',
		data
	}
}


export function getCont(data){
	return {
		type:'GET_CONT',
		data
	}
}

export function getActivity(data){
	return {
		type:'GET_ACT',
		data
	}
}

export function OrderAscent(){
	return {
		type:'ORD_ASC',
	}
}

export function OrderDes(){
	return {
		type:'ORD_DES',
	}
}

export function OrderArea(){
	return {
		type:'ORD_ARE',
	}
}

export function getData(uid){
	var endpoint = `${point}/countries/`;
	if(uid){
		endpoint= endpoint+uid
	}
	 
	return async function (dispatch){
		const result = await axios.get(endpoint)
		const {data} = await result
		dispatch(Data(data))
	}
}


export function getDataDet(uid){
	var endpoint = `${point}/countries/`;
	if(uid){
		endpoint= endpoint+uid
	}
	 
	return async function (dispatch){
		const result = await axios.get(endpoint)
		const {data} = await result
		dispatch(dataDet(data))
	}
}