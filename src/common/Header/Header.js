import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { actionCreators as commonActionCreators } from '../store';
import { actionCreators as userActionCreators } from '../../pages/user/store';
import Search from '../search/Search';
import './Header.scss';

class Header extends Component {
    render() {
        const { loginOrLogout, logOut } = this.props;
        return (
                <header className="news-header pb-3">
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand href="/" className="news-header-logo text-white">
                            NY Times
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarNav" />
                        <Navbar.Collapse id="navbarNav">
                            <Nav className="ml-auto mr-3">
                                { this.renderLogin() }                               
                            </Nav>
                            <Search />
                        </Navbar.Collapse>
                    </Navbar>
                </header>
        )
    }

    renderLogin() {
        const { loginOrLogout, logOut } = this.props;
        if(loginOrLogout === 'logout') {
            return (
              <Nav.Link onClick={() => {logOut()}}>Log out</Nav.Link>
            )
        } else {
            return  (
                <>
                   <Nav.Link href="/register">Sign up</Nav.Link>
                   <Nav.Link href="/login">Sign in</Nav.Link>
                </>
            )
        }
    }

}

const mapStateToProps = (state) => ({
    loginOrLogout: state.common.loginOrLogout
})

const mapDispatchToProps = (dispatch) => {
    return {
        logOut() {
            dispatch(userActionCreators.clearAccessToken());
            dispatch(commonActionCreators.changeLogin('login'));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
