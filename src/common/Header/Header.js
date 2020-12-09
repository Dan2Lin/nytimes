import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Search from '../search/Search';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
                <header className="news-header pb-3">
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand href="/" className="news-header-logo text-white">
                            NY Times
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarNav" />
                        <Navbar.Collapse id="navbarNav">
                            <Nav className="ml-auto mr-3">
                                <Nav.Link href="/register">Sign up</Nav.Link>
                                <Nav.Link href="/login">Sign in</Nav.Link>
                            </Nav>
                            <Search />
                        </Navbar.Collapse>
                    </Navbar>
                </header>
        )
    }
}
