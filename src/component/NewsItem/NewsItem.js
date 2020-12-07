import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        const { item } = this.props;
        return (
           <div className="col-12">
               <div className="row no-gutters border-bottom">
                    <div className="col p-4 d-flex flex-column">
                        <strong className="mb-2 text-primary text-uppercase">{item.section}</strong>
                        <h3 className="mb-0">{item.title}</h3>
                        <div className="mt-2 mb-3 text-muted">{new Date(item.published_date).toDateString()}</div>
                        <p className="card-text mb-auto">{item.abstract}</p>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        <img src={item.multimedia[3].url} alt={item.multimedia[3].caption} ></img>
                    </div>
                </div>
           </div>
        )
    }
}
