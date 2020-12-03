import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewsDetail.scss';

export default class NewsDetail extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="article-post">
                        <h2 className="article-post-title">Sample blog post</h2>
                        <p className="article-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

                        <p>
                            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
