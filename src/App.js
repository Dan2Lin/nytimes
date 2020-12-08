import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Footer from './common/Footer/Footer';
import Header from './common/Header/Header';
import './App.scss';

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Header></Header>
        <div className="container">
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
