import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import './CategoryFilter.scss';
class CategoryFilter extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps != this.props || nextState!= this.state) {
            return true;
        }
        return false;
    }

    render() {
        const { categoryList, getListByCategory } = this.props;
        return (
            <div className="category-filter py-1 border-bottom">
                <Nav className="d-flex justify-content-center">
                    {categoryList.length > 0 && categoryList.map((item) => {
                        return (
                            <Nav.Item
                                key={item}
                                className="p-2 text-muted"
                                onClick={() => getListByCategory(item)}
                            >{item}</Nav.Item>
                        )
                    })}
                </Nav>
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
