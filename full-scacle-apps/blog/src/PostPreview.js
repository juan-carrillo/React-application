import React, { Component } from 'react';

class PostPreview extends Component {
    render() {
        return (
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">{this.props.title}</h2>
                    <h3 className="post-subtitle">{this.props.subtitle}</h3>
                </a>
                <p className="post-meta">
                    Posted by
                    <a href="#!">{this.props.meta.author}</a>
                    on {this.props.meta.format_date}
                </p>
            </div>
        );
    }
}

export default PostPreview
