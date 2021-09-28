import './App.css';
import Route from './router'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
         <Route/>
      </div>
    </Provider>
  );
}

export default App;
