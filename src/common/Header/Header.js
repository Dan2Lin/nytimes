import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="news-header pb-3">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="navbar-brand">
                            <Link className="news-header-logo text-white"to="/">NY Times</Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto mr-3">
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Sign up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Sign in</a>
                                </li>
                            </ul>
                            <Search />
                        </div>
                    </nav>
                </header>
            </Fragment>
        )
    }
}
