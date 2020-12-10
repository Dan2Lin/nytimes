import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import NewsDetail from './component/NewsDetails/NewsDetail';
import Comments from './component/Comments/Comments';
import Header from '../../common/header/Header';
export default class Detail extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    <NewsDetail />
                    <Comments />
                </Container>
            </Fragment>
        )
    }
}
