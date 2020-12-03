import React, { Component, Fragment } from 'react';
import Search from './Search';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="news-header pb-3">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="navbar-brand">
                            <a className="news-header-logo text-white" href="#">NY Times</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto mr-3">
                                <li class="nav-item">
                                    <a className="nav-link" href="/register">Sign up</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" href="/login">Sign in</a>
                                </li>
                            </ul>
                            <Search></Search>
                        </div>
                    </nav>
                </header>
            </Fragment>
        )
    }
}
