import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import NewsItem from '../NewsItem/NewsItem';
import PaginationComponent from '../pagination/PaginationComponent';

class NewsList extends Component {

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const { list, meta } = this.props;

        if(list.length > 0) {
            return (
                <Row className="mb-2">
                    {list.map((item) => {
                        return (
                            <NewsItem 
                                key={item.title}
                                item={item}
                            ></NewsItem>
                        )
                    })}
                   {meta.totalPage > 1 ? <PaginationComponent page={meta.page} totalPage={meta.totalPage} /> : null}   
                </Row>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.home.list,
        meta: state.home.meta
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList() {
            dispatch(actionCreators.getList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)