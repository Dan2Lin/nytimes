import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store';
import NewsItem from '../NewsItem/NewsItem';

class NewsList extends Component {

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const { list } = this.props;

        if(list.length > 0) {
            return (
                <Fragment>
                    <div className="row mb-2">
                        {list.map((item) => {
                            return (
                                <Link key={item.title} to='/detail'>
                                    <NewsItem 
                                        key={item.title}
                                        item={item}
                                    ></NewsItem>
                                </Link>
                            )
                        })}
                    </div>
                </Fragment>
            )
        } else {
            return null;
        }
       
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.home.list
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
