import React, { Component } from 'react';
import Interweave from 'interweave';

class ZDetailPage extends Component {
    render() {
        console.log(this.props.q)
        return (
            <div>
                <Interweave content=
                {
                    this.props ?  this.propsquestion : null 
                }
                />
            </div>
        )
    }
}


export default ZDetailPage