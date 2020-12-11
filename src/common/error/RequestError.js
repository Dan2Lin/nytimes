import React, { Component } from 'react'
import { connect } from 'react-redux'

class RequestError extends Component {
    render() {
        const { error } = this.props;

        if(error && error.message ) {
            return (
                <div className="fade modal-backdrop show d-flex justify-content-center align-items-center">
                    <h1>Whoops! { error.message }</h1>
                </div>
            )
        } else {
            return null;
        }
        
    }
}

const mapStateToProps = (state) => ({
    error: state.common.errorMsg
})

export default connect(mapStateToProps, null)(RequestError)
