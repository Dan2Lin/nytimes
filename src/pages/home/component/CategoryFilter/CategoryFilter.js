import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import './CategoryFilter.scss';

class CategoryFilter extends Component {

    render() {
        const { categoryList, getListByCategory } = this.props;
        return (
            <div className="category-filter py-1 mb-2 border-bottom">
                <nav className="nav d-flex justify-content-center">
                    {
                        categoryList.length > 0 && categoryList.map((item) => {
                            return (
                                <span
                                    key={item}
                                    className="p-2 text-muted nav-link"
                                    onClick={() => getListByCategory(item)}
                                >{item}</span>
                            )
                        })
                    }
                </nav>
            </div>
        )}
}

const mapStateToProps = (state) => {
    return {
        categoryList: state.home.filterList
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
