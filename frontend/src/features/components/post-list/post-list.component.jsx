import React, { Component } from 'react';

class Postlist extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log('posts: ', this.props.posts)
        return this.props.posts.map((n, i) => {
            return <div key={i} className="post-list">{n.id}</div>
        });
    }
}


export default Postlist;