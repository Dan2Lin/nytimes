import React, { Component } from 'react';
import { Row, Media } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import './NewsDetail.scss';

class NewsDetail extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps != this.props || nextState!= this.state) {
            return true;
        }
        return false;
    }

    componentDidMount() {
        this.props.getArticleDetail();
    } 

    render() {
        const { article } = this.props;

        return (
            <Row>
                <Media>
                    <Media.Body className="article-post">
                        <h2 className="article-post-title">{article.title}</h2>
                        <p className="article-post-meta">{article.date} by <strong> {article.author} </strong></p>
                        <section dangerouslySetInnerHTML={{__html: article.content}}></section>
                    </Media.Body>
                </Media>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.detail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getArticleDetail() {
        dispatch(actionCreators.getArticle());
      }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)

