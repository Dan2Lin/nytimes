import React, { Component, Fragment } from 'react'

export default class Search extends Component {
    render() {
        return (
            <Fragment>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </Fragment>
        )
    }
}
