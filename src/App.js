import { BrowserRouter , Route } from 'react-router-dom';
import { combineReducers , createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import areaReducer from './reducers/area-reducer';
import weatherReducer from './reducers/weather-reducer';
import AreaList from './components/area-list.js';
import WeatherDisplay from './components/weather-display.js';

const reducer = combineReducers({
  areaReducer,
  weatherReducer
})

const store = createStore(reducer)

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container-fluid">
          {/*<Route path="/" exact={true} component={AreaList}/>*/}
          <Route path="/" exact={true} component={WeatherDisplay}/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
