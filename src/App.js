import { Provider } from 'react-redux';
import store from './store'
import CategoryFilter from './component/CategoryFilter/CategoryFilter';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import NewsList from './component/NewsList/NewsList';

import './App.scss';

function App() {
  return (
    <Provider store = {store}>
      <Header></Header>
      <div className="container">
          <CategoryFilter></CategoryFilter>
          <NewsList></NewsList>
          <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
