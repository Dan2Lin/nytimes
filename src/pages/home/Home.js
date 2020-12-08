import React, { Component } from 'react';
import NewsList from '../home/component/NewsList/NewsList';
import CategoryFilter from '../home/component/CategoryFilter/CategoryFilter';

export default class Home extends Component {
    render() {
        return (
            <div>
                <CategoryFilter/>
                <NewsList />
            </div>
        )
    }
}
