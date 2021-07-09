import React, { Component } from 'react';
import Interweave from 'interweave';

class ZDetailPage extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <Interweave content=
                {
                    this.props.q ?  this.props.q.question : null 
                }
                />

            </div>
        )
    }
}


export default ZDetailPage