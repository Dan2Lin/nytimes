import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import NewsItem from '../NewsItem/NewsItem';
import { actionCreators } from './store';

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
                        {list.map((item,index) => {
                            return (
                                <NewsItem 
                                    key={item.title}
                                    item={item}
                                ></NewsItem>
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
        list: state.newsList.list
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
