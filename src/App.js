import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Login from './pages/user/Login';
import Register  from './pages/user/Register';
import './App.scss';

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/register' exact component={Register}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
