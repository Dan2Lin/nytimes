import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import NewsDetail from './component/NewsDetails/NewsDetail';
import Comments from './component/Comments/Comments';
import Header from '../../common/header/Header';
import Error from '../../common/error/Error';

export default class Detail extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    <Error>
                        <NewsDetail/>
                        <Comments />
                    </Error>
                </Container>
            </Fragment>
        )
    }
}
