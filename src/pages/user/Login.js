import React, { Component } from 'react';
import { Form , Button, Container, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorMsg:""
        }

        this.query = {
            email:{
                value:'',
                validata:[
                    {
                        errMessage:'email is required!',
                        test:(value) => {
                            return value;
                        }
                    }
                ]
            },
            password:{
                value:'',
                validata:[
                    {
                        errMessage:'password is required!',
                        test:(value) => {
                            return value;
                        }
                    }
                ]
            }
        }
    }

    render() {
        const { email, password, errorMsg } = this.state;
        const { userSignIn } = this.props;

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
                   <Button  variant="primary" onClick={() => this.validateForm() && userSignIn(email, password)}>Sign in</Button>
                </Form>
            </Container>
            
        )
    }

    handleUserInput(email) {
        this.setState({
            email: email
        }, () => this.fillValidateData('email', email));
    }

    handlePassInput(pass) {
        this.setState({
            password: pass
        }, () => this.fillValidateData('password', pass))
    }

    fillValidateData(name, val) {
        for(let key in this.query){
            if(key.toString() === name.toString()){
                this.query[key].value = val;
            }
        }
    }

    validateForm() {
        for(let key in this.query){
            let item = this.query[key];
            let valiItem = item.validata;
            if(valiItem){
                for(let k in valiItem){
                    let valis = valiItem[k];
                    if(!valis.test(item.value)){
                        this.setState({
                            errorMsg: valis.errMessage
                        });
                        return false;
                    }
                }
            }
        }
        return true; 
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignIn: (email, pass) => {
            dispatch(actionCreators.signIn(email, pass));
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
