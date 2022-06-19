import {Provider} from "react-redux";

import store from './store/configureStore';

import Todos from "./components/Todos";

import './App.css';

const App = () => (
    <Provider store={store}>
      <div className="App">
        <Todos/>
      </div>
    </Provider>
);

export default App;
