import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import store from './store'
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import './App.scss';

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Header></Header>
        <Container>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
        </Container>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
