import React, { Component } from 'react';
import Interweave from 'interweave';

class WDetailPage extends Component {
    render() {
        console.log(this.props.q)
        return (
            <div>
                <Interweave conrent=
                {
                    this.props.q ?  this.props.q.question : null 
                }
                />
            </div>
        )
    }
}


export default WDetailPage