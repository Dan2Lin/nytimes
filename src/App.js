import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import store from './store';
import history from './store/history';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Login from './pages/user/Login';
import Register  from './pages/user/Register';

import './App.scss';

function App() {
  return (
    <Router history = {history}>
      <Provider store = {store}>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' exact component={Register}></Route>
      </Provider>
    </Router>
  );
}

export default App;
