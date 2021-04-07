import { BrowserRouter , Route } from 'react-router-dom';
import { combineReducers , createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import areaReducer from './reducers/area-reducer';
import weatherReducer from './reducers/weather-reducer';
import AreaList from './components/area-list.js';
import WeatherDisplay from './components/weather-display.js';
import Login from './components/login.js'

const reducer = combineReducers({
  areaReducer,
  weatherReducer
})

const store = createStore(reducer)

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container-fluid" style={{
          backgroundColor: '#7CB9E8',
          height: '100vh'
          
        }}>
          {/*<Route path="/" exact={true} component={AreaList}/>*/}
          <Route path="/weather" exact={true} component={WeatherDisplay}/>
          <Route path="/login" exact={true} component={Login}/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
