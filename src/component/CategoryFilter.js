import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.scss';

export default class CategoryFilter extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <Fragment>
                <div className="category-filter py-1 mb-2 border-bottom">
                    <nav className="nav d-flex justify-content-center">
                        <a className="p-2 text-muted nav-link" href="#">World</a>
                        <a className="p-2 text-muted nav-link" href="#">U.S.</a>
                        <a className="p-2 text-muted nav-link" href="#">Technology</a>
                        <a className="p-2 text-muted nav-link" href="#">Design</a>
                        <a className="p-2 text-muted nav-link" href="#">Culture</a>
                    </nav>
                </div>
            </Fragment>
        )
    }
}
