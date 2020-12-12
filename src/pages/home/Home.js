import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import NewsList from '../home/component/newsList/NewsList';
import CategoryFilter from '../home/component/categoryFilter/CategoryFilter';
import Error from '../../common/error/Error';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <CategoryFilter/>
                <Error>
                    <NewsList />
                </Error>
            </Container>
        )
    }
}
