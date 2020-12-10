import React, { Component } from 'react';
import { Form , Button, Container, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import  * as sharedFuncs from '../../store/common';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        const { email, password } = this.state;
        const { errorMsg, userSignIn } = this.props;

        return (
            <Container>
                <h4 className="bg-light mt-5 p-3 text-center">Login Page</h4>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            ref={(userInput) => this.userInput = userInput}
                            onChange={() => this.handleUserInput(this.userInput.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            ref={(passInput) => this.passInput = passInput}
                            onChange={() => this.handlePassInput(this.passInput.value)}/>
                    </Form.Group>
                    {
                      errorMsg && <Alert variant='danger'> {errorMsg} </Alert>
                    }
                   <Button  variant="primary" onClick={() => sharedFuncs.validateForm(true) && userSignIn(email, password)}>Sign in</Button>
                </Form>
            </Container>   
        )
    }

    handleUserInput(email) {
        this.setState({
            email: email
        }, () => sharedFuncs.fillValidateData('login_email', email, true));
    }

    handlePassInput(pass) {
        this.setState({
            password: pass
        }, () => sharedFuncs.fillValidateData('login_password', pass, true))
    }

}
const mapStateToProps = (state) => ({
    errorMsg: state.user.errorMsg
})

const mapDispatchToProps = (dispatch) => {
    return {
        userSignIn: (email, pass) => {
            dispatch(actionCreators.signIn(email, pass));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
