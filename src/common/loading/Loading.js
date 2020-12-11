import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';

class Loading extends Component {
    render() {
        return this.props.isLoading && (
            <div className="fade modal-backdrop show d-flex justify-content-center align-items-center">
                 <Spinner animation="border" variant="light" size="lg"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.common.isLoading
})

export default connect(mapStateToProps, null)(Loading)
