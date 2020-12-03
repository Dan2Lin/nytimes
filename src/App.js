import { Fragment } from 'react';
import './App.scss';
import CategoryFilter from './component/CategoryFilter';
import Footer from './component/Footer';
import Header from './component/Header';
import NewsList from './component/NewsList';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <div className="container">
          <CategoryFilter></CategoryFilter>
          <NewsList></NewsList>
          <Footer></Footer>
      </div>
    </Fragment>
  );
}

export default App;
