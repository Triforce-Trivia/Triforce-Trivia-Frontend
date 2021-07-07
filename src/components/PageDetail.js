// import React, { Component } from 'react';
// // import { rightAnswer, wrongAnswer } from '../zombie/Z1.js'


// class PageDetail extends Component {

//     state = {
//         bgImage: "url(../../zombies/z0.gif)",
//         backgroundSize: "cover",
//         height: "600px",
//         backgroundRepeat: "no-repeat",
//     };

//     render() {
//         console.log(this.props)
//         const {question} = this.props
//         return (
//         <div>
//             <p 
//                 style={{
//                 backgroundImage: this.state.bgImage,
//                 backgroundSize: "cover",
//                 height: "600px",
//                 backgroundRepeat: "no-repeat",
//                 overflow: "visible"
//                 }}
//                 >

//                     <h3>{this.props.question}</h3>

//                     <button onClick={this.props.rightAnswer}>
//                         {this.props.correct_answer}
//                     </button>

//                     <button onClick={this.wrongAnswer}>
//                         {this.props.incorrect_answer}
//                     </button>
                
//             </p>

//         </div>
//         )
//     }
// }
// export default PageDetail