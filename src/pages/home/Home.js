import React, { Component, Fragment } from 'react';
import NewsList from '../home/component/newsList/NewsList';
import CategoryFilter from '../home/component/categoryFilter/CategoryFilter';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <CategoryFilter/>
                <NewsList />
            </Fragment>
        )
    }
}
