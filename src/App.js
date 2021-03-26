import { BrowserRouter , Route } from 'react-router-dom';
import { combineReducers , createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import areaReducer from './reducers/area-reducer';
import AreaList from './components/area-list.js';

const reducer = combineReducers({
  areaReducer
})

const store = createStore(reducer)

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container-fluid">
          <Route path="/" exact={true} component={AreaList}/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
