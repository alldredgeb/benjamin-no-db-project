import React, { Component } from 'react';

class Newsfeed extends Component {

    constructor(props) {
        super(props)

            this.state = {
                news: {},
        }
    }

    

    render() {
        return (
            <div className='newsfeed'>
                <h1>Top Stories in the News</h1>
            </div>
        )
    }
}

export default Newsfeed;