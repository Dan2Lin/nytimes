import React, { Component, Fragment } from 'react';
import { Form , Button} from 'react-bootstrap';
import { connect } from 'react-redux';

export class Register extends Component {
    render() {
        return (
            <Fragment>
                <h4 className="bg-light mt-5 p-3 text-center">Register Page</h4>
                <Form>
                    <Form.Group controlId="formUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="input" placeholder="Enter user name" />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Sign up for free
                    </Button>
                </Form>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
