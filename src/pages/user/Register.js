import React, { Component } from 'react';
import { Form , Button, Container, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Register extends Component {
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
                    },
                    {
                        errMessage:'password length must be 6!',
                        test:(value) => {
                            return value.length === 6;
                        }
                    }
                ]
            }
        }
    }

    render() {
        const { email, password, errorMsg } = this.state;
        const { userSignUp } = this.props;

        return (
            <Container>
                <h4 className="bg-light mt-5 p-3 text-center">Register Page</h4>
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
                   <Button  variant="primary" onClick={() => this.validateForm() && userSignUp(email, password)}>   Sign up for free </Button>
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
        userSignUp: (email, pass) => {
            dispatch(actionCreators.signUp(email, pass));
        }
    }
}

export default connect(null, mapDispatchToProps)(Register)
