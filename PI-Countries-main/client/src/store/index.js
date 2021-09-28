import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index.js';
import thunkMiddleware from 'redux-thunk'
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  
  composeEnhancer(applyMiddleware(thunkMiddleware)),
  
);

export default store;