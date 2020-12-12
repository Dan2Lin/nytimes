import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import store from './store';
import history from './store/history';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Login from './pages/user/Login';
import Register  from './pages/user/Register';
import Loading from './common/loading/Loading';
import RequestError from './common/error/RequestError';
import PageNotFound from './common/error/PageNotFound';
import Header from './common/header/Header';

function App() {
  return (
    <Router history = {history}>
      <Provider store = {store}>
            <Header></Header>
            { getRoutes() }
            <Loading />
            <RequestError />
      </Provider>
    </Router>
  );
}

function getRoutes() {
  return (
      <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/register' exact component={Register}></Route>
          <Route path='*' component={PageNotFound}></Route>
      </Switch>
  )
}

export default App;
