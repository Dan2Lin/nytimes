import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NewsItem.scss';
export default class NewsItem extends Component {
    render() {
        const { item } = this.props;
        return item && (
            <LinkContainer to="/detail">
                <Col xs={12} className="news-item">
                    <Row className="no-gutters border-bottom">
                        <Col className="p-4 d-flex flex-column">
                            <strong className="mb-2 text-primary text-uppercase">{item.section}</strong>
                            <h3 className="mb-0">{item.title}</h3>
                            <div className="mt-2 mb-3 text-muted">{item.published_date}</div>
                            <p className="mb-auto">{item.abstract}</p>
                        </Col>
                        { this.renderImg(item.img)}
                    </Row>
                </Col>
            </LinkContainer>
        )
    }

    renderImg(item) {
        if(item && item.url) {
            return (
                <Col xs="auto" className="d-flex align-items-center">
                    <img src={item.url} alt={ item.caption || ''} />
                </Col>
            )
        } else {
            return null;
        }
        
    }
}
