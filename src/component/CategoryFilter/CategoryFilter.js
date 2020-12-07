import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import './CategoryFilter.scss';

class CategoryFilter extends Component {

    render() {
        const { categoryList, getListByCategory } = this.props;
        return (
            <Fragment>
                <div className="category-filter py-1 mb-2 border-bottom">
                    <nav className="nav d-flex justify-content-center">
                        {categoryList.map((item) => {
                            return (
                                <span
                                    key={item}
                                    className="p-2 text-muted nav-link"
                                    onClick={() => getListByCategory(item)}
                                >{item}</span>
                            )
                        })}
                    </nav>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categoryList: state.categoryList.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListByCategory(item) {
            dispatch(actionCreators.getListByCategory(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
