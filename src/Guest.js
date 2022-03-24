// // import React, { Component } from 'react'

// // export default class Guest extends Component {
// //     render() {
// //         return (
// //             <div>
// //                 <h1>Welcome Guest</h1>
// //                 <button>Login</button>
// //                 <button>signUp</button>
// //             </div>
// //         )
// //     }
// // }




// // import React, { Component } from 'react';

// // export default class Guest extends Component {
// //     render() {
// //         return (
// //         <React.Fragment>
// //             <h1>Welcome Guest</h1>
// //             <button onClick={this.props.clickData}>Login</button>
// //             <button>SignUp</button>
// //         </React.Fragment>
// //         );
// //     }
// // }

// // import React, { Component } from 'react'

// // export default class Guest extends Component {
// //     render() {
// //         return (
// //             <div>
// //                 <h1>{this.props.name}</h1>
                
// //             </div>
// //         )
// //     }
// // }









import React, { Component } from 'react'

export default class Guest extends Component {
  render() {
           if(this.props.shoe === "NoImage"){
               throw new Error('I crashed!')
           }

    return (
      <div className="mt-5">
          <img src={this.props.shoe} style={{height:"200px"}} alt="my pic"/>
      </div>
    )
  }
}

// import React, { Component } from 'react'

// export default class Guest extends Component {
//   render() {
//     return (
//         <>
//         <img src={this.props.karishma} />
//         </>
//     )
//   }
// }


