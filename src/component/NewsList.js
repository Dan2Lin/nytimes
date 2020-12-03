import React, { Component, Fragment } from 'react';
import './NewsList.scss';

export default class NewsList extends Component {

    render() {
        return (
            <Fragment>
                <div className="row mb-2">
                    <div className="col-12">
                        <div className="row no-gutters overflow-hidden flex-md-row mb-4 h-md-250 position-relative border-bottom">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">Featured post</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="/details" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                            <img src="http://placehold.it/200x200"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row no-gutters overflow-hidden flex-md-row mb-4 h-md-250 position-relative border-bottom">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Design</strong>
                                <h3 className="mb-0">Post title</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="/details" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-flex align-items-center">
                                <img src="http://placehold.it/200x200"></img>
                            </div>
                        </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}
