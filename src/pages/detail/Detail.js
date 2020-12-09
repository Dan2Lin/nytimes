import React, { Component, Fragment } from 'react';
import NewsDetail from './component/NewsDetails/NewsDetail';
import Comments from './component/Comments/Comments';
export default class Detail extends Component {
    render() {
        return (
            <Fragment>
                <NewsDetail />
                <Comments />
            </Fragment>
        )
    }
}
