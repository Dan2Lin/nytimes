import React, { Component } from 'react';
import { Form , Button, Container} from 'react-bootstrap';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <Container>
                <h4 className="bg-light mt-5 p-3 text-center">Login Page</h4>
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
                        Sign in
                    </Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
