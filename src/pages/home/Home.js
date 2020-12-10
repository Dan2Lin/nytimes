import React, { Component, Fragment } from 'react';
import { Container} from 'react-bootstrap';
import NewsList from '../home/component/newsList/NewsList';
import CategoryFilter from '../home/component/categoryFilter/CategoryFilter';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    <CategoryFilter/>
                    <NewsList />
                    <Footer />
                </Container>
            </Fragment>
        )
    }
}
