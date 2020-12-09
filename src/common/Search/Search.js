import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Search.scss';
class Search extends Component {

    render() {
        const { inputValue, focused , searchArticle, setFocus, setInputValue } = this.props;
        return (
            <div>
                <Form inline className="my-2 my-lg-0">
                    <FormControl 
                        type="text"
                        placeholder=""
                        className="mr-sm-2"
                        value={inputValue}
                        ref={(form) => this.form = form}
                        onChange={() => setInputValue(this.form.value)}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                    <Button variant="info" onClick={() => searchArticle(this.form.value)}>Search</Button>
                </Form>
                {focused && this.renderSearchPanel()}
            </div>
        )
    }

    renderSearchPanel() {
        const { searchHistory } = this.props;
        const reversedArr = searchHistory.slice().reverse()
        if(reversedArr.length) {
            return (
                <div className="search-history">
                    <h6 className="pb-2 border-bottom">Recently Searched</h6>
                    <ul className="list-unstyled">
                        {reversedArr.map((item, index) => {
                            return (<li 
                                className="mb-2" 
                                key={index}
                            > {item} </li>)
                        })}
                    </ul>
                </div>)
        } else {
            return (
                <div className="no-search-history">
                    No history
                </div>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        searchHistory: state.common.searchHistory,
        focused: state.common.focused,
        inputValue: state.common.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {      
      searchArticle(query) {
        query && dispatch(actionCreators.searchArticleAction(query));
      },

      setFocus(isFocus) {
        dispatch(actionCreators.setFocus(isFocus));
      },

      setInputValue(value) {
        dispatch(actionCreators.setInputValue(value));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
