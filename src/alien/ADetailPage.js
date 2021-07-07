import React, { Component } from 'react'

class ADetailPage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.props.q ?  this.props.q.question : null 
                }
            </div>
        )
    }
}


export default ADetailPage