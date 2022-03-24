// import React ,{Component} from "react";
// // old way
// // function Student(){
// //     return <h1>Hello React</h1>
// // }
// // new way

// // const Student = (props) => {
// //     return <h1>Hello {props.name}</h1>;
// // };

// class Student extends Component {
//     render(){
//         return <h1>Hello {this.props.name}</h1>
//     }
// }



// export default Student;





// composing componnents 
// student name components
// import React from "react";
// const Student = (props) =>{
//     return <h1>Hello composing componnents {props.name}</h1>;
// }
// export default Student;


// props---------------

// import React, {Component} from "react";
// import Pt from "prop-types";
// const Student = props =>{
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h2>your roll:{props.roll}</h2>
//         </div>
//     );
// }

// class Student extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>hello  {this.props.name} </h1>
//                 <h2>roll: {this.props.roll}</h2>
//             </div>
//         );
//     }

// }
// typecheacking with proptypes 
// propType is proprties
// Student.propTypes={
//     name: Pt.string.isRequired
// };
// Student.defaultProps={
//     name: 'default mehul'
// };
// export default Student;




// children in jsx props.children--------------------

// import React, { Component } from "react";

// const Student = props =>{
//     return <h1>Hello {props.children}</h1>
// }; 
// export default Student;

// class Student extends Component{
//     render(){
//         return <h1>hello {this.props.children}</h1>
//     }
// }
// export default Student;




// state similer to props but states can update and private and only use in  class 

// import React, { Component } from 'react';
// class Student extends Component{
// state
// state={
//     name: "mehul",
//     roll: this.props.roll
// }
// state in constructor=======
// constructor(props){
//     super(props);
//     this.state={
//         name: "mehul",
//         roll: this.props.roll
//     };
// }
//     render(){
//         return (
//         <h1>
//             Hello React and {this.state.name} {this.state.roll}
//             </h1>

//         );
//     }
// }

// export default Student;





// react Event handling-------------class component

// import React, { Component } from 'react'
// class Student extends Component{
    // handleClick(){
    //     console.log("clicked",this);
    // }

// handleClick=()=>{
//     console.log("clicked",this);
// }
// constructor(props){
//     super(props);
//     this.state = {
//         name: "MehulGohil",
//         roll: this.props.roll
//     };
    // this.handleClick=this.handleClick.bind(this);
// }

// handleClick=()=>{
//     console.log("clicked",this)
// }


//     render(){
//         return (
//             <div>
//                 <h1>hello {this.state.name} {this.state.roll}</h1>
//                 <button onClick={this.handleClick}>Click</button>
               
//             </div>
//         );
//     }
// }
// export default Student;

// -----event---using function 
// import React from 'react';

// function Student(props){
//     function handleClick(e){
//         e.preventDefault();

//         console.log("button clicked");
//     }
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <a href="https://www.google.com" onClick={handleClick}>Click</a>
//         </div>
//     );
// }
// export default Student;

// update state---------------
// import { Component } from "react";

// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:"mehul",
//             roll:this.props.roll
//         };
//     }
// // setState
//     handleClicik=()=>{
//         this.setState({name:"setSet",roll:"15"})
//     };
//     render(){
//         return(
//             <div>
//                 <h1>hello {this.state.name} roll {this.state.roll}</h1>
//                 <button onClick={this.handleClicik}>Click</button>
//             </div>
//         );
//     }
// }
// export default Student;



// -----------------passing Argument
// import { Component } from "react";

// class Student extends Component{
//     state={
//         id:1,
//         name:"mehul"
//     };
    
//     handleClick = (id) =>{
//         console.log(id);
//     }
//     handleClickarg = () =>{
//         this.handleClick(this.state.id)
//     }

// render(){
// return(
//     <div>
//         <h1>Hello, {this.state.name}</h1>
//         <button onClick={this.handleClickarg}>Delete</button>
//     </div>
// );
// }

// }
// export default Student;




/*
Mounting in react js
import React, { Component } from 'react';
import Marks from "./Marks"
export default class Student extends Component{
    render(){
        console.log("Student - Rendered child of App");
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <Marks/>
            </div>
        );
    }
}
*/

// --------updating

// import React, { Component } from 'react';
// import Marks from "./Marks";

// export default class Student extends Component {
//     constructor(){
//         super();
//         this.state={
//             roll:101
            
//         };
//     }
//     clickHandle=()=>{
//         console.log("button clicked")
//         // this.setState({roll:102})
//         this.setState({roll:this.state.roll+2})

//     };
//     render() {
//         console.log("Student render")
//         return (
//             <div>
//                 <Marks  roll={this.state.roll}/>
//                 <button onClick={this.clickHandle}>Click</button>
//             </div>
//         )
//     }
// }


// unmountiing

// import React, { Component } from 'react';


// export default class Student extends Component {
//     componentDidMount(){
//         console.log("student Mounted")
//     }
//     render() {
//         return <h1>Hello Student component</h1>
            
        
//     }
// }

