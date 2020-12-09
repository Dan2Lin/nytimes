import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionCreators as commonActionCreators } from '../../../../common/store';

class PaginationComponent extends Component {

    render() {
        const { page, totalPage } = this.props;
        return (
            <Pagination size="lg" className="mt-5 mx-auto">
                <Pagination.Prev className={page === 1 ? 'disabled' : ''} onClick={() => this.goPage(-1)}/>
                {this.renderPaginationItem(page, totalPage)}
                <Pagination.Next className={page === totalPage ? 'disabled' : ''} onClick={() => this.goPage(1)}/>
            </Pagination>
        )
    }

    renderPaginationItem(currentPage, totalPage) {
        const { searchArticle, latestedSearch } = this.props;
        let items = [];
        let active = currentPage;
        for (let number = 1; number <= totalPage; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={() => searchArticle(latestedSearch, number)}>
                    {number}
                </Pagination.Item>
            )
        }
        return items;
    }

    goPage(step) {
        const { page, latestedSearch, searchArticle } = this.props;
        if(step < 0) {
            searchArticle(latestedSearch, page - 1)
        } else {
            searchArticle(latestedSearch, page + 1)
        }
    }
}

const mapStateToProps = (state) => ({
   latestedSearch: state.common.latestedSearch,
})

const mapDispatchToProps = (dispatch) => {
    return {
        searchArticle(query, page) {
            dispatch(commonActionCreators.searchArticleAction(query, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent)

