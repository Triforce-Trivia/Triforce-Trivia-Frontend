import React, { Component } from 'react'
class DetailPage extends Component {
    state = {
        scores: 0, 
    }

    render() {
        
        return (
            <div>
                {
                    this.props.q ?  this.props.q.question : null
                }
            </div>
        )
    }
}


export default DetailPage