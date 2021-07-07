import React, { Component } from 'react'

class DetailPage extends Component {
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


export default DetailPage