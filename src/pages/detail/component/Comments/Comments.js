import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import { connect } from 'react-redux';
import history from '../../../../store/history';
import { actionCreators } from '../../store';

class Comments extends Component {

    componentDidMount() {
        const search = history.location.search;
        this.props.getComments(search.substr(search.indexOf('http')));
    }

    render() {
        return (
        <div className="comments">
            <h4 className="border-bottom pb-3">People says...</h4>
            { this.renderComments(this.props.comments)}
        </div>
        )
    }

    renderComments(list) {
        return (
            list.length && list.map(item => {
                return (
                <Media key={item.commentBody} className="pb-3 pt-3 border-bottom">
                    <div className="mr-3 avatar">A</div>
                    <Media.Body>
                        <h6>{item.userDisplayName}</h6>
                        <p> {item.commentBody}</p>
                        { item.replyCount > 0 && this.renderComments(item.replies)}
                    </Media.Body>
                </Media>
                )
            })
        )
    }

}

const mapStateToProps = (state) => ({
    comments: state.detail.comments   
})

const mapDispatchToProps = (dispatch) => {
    return {
        getComments(url) {
            dispatch(actionCreators.getComments(url));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

