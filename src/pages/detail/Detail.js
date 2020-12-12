import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import NewsDetail from './component/NewsDetails/NewsDetail';
import Comments from './component/Comments/Comments';
import Header from '../../common/header/Header';
import Error from '../../common/error/Error';

export default class Detail extends Component {
    render() {
        return (
            <>
                <Container>
                    <Error>
                        <NewsDetail/>
                        <Comments />
                    </Error>
                </Container>
            </>
        )
    }
}
