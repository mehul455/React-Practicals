// import React, {Component} from "react";
// // let el = <h1>Hello Mehul</h1>
// class App extends Component {
//     render(){
//         // return React.createElement("h1",null,"Hello Mehul");
//         return <React.Fragment>
//                   <h1>Hello Mehul</h1>
//                   <h3>Hello Mehul</h3>
//                </React.Fragment>
//     //react Fragment multiple elements ko return lene mai help kar ta hai

//     }

// }

// export default App;

// khatam1

// compsing component
// import React from "react";
// import Student from "./Student.js";
// const App = () => {
//     return(
//         <div>
//             <Student name="rahul" />
//             <Student name="mehul" />
//             <Student name="gautam" />
//             <Student />

//         </div>
//     );
// };
// export default App;

// jsx
// import React from "react";

// simple string
// const name = "react";

// function show(name){
//     return name;
// }

// let user = {
//     fistname:"mehul"
// }
// const el = <h1>Hello { 30+30} jsx {user.fistname}</h1>;
// export default el;

// -------------------------

// import React from "react";
// import "./App.css";
// const el =<div>
//      <h1 className="bg">Hello</h1>;
//      <h2 className="bg">Hello react</h2>
//      </div>
// export default el;

// Mounting in react js
// import { Component } from "react";
// import Student from "./Student";
// export default class App extends Component{
//     constructor(props){
//         super(props);
//         console.log("App - constructor called");
//         console.log(props)
//         this.state={
//             roll:"101"
//         }
//     }
//     static getDerivedStateFromProps(props,state){
//         console.log("App - get derived state from props");
//         console.log(props,state);
//         return null;
//     }

//     componentDidMount(){
//         // get data from server and set the data to state
//         console.log("App componentDidMount - Mounted");
//     }
//     render(){
//         console.log("app rendered[]")
//         return <div>
//             <Student name ="React"/>

//         </div>
//     }
// }

// unmounting

// import React, { Component } from 'react'

// export default class App extends Component {
//     componentDidMount(){
//         console.log("app mounted")
//     }

//     componentWillUnmount(){
//         console.log("app unmounted")
//     }
//     render() {
//         return <h1>Heloo App component</h1>
//     }
// }

// import React ,{useState} from "react";
//  function  App(){
//    const nameStateVariable = useState("rahul"); // rahul is current state value[0]  , [1] is funcation
//    const  handleClick = () =>{
//         nameStateVariable[1]("mehul");
//     }
//    return (
//            <React.Fragment>
//           <h1>{nameStateVariable[0]}</h1>
//           <button type="button" onClick={handleClick}>click</button>
//           </React.Fragment>
// );

// }

// export default App;

// useEffect

// import React ,{useEffect, useState} from 'react';
// export default function App(){
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(50);

//   const handleIncrement = () =>{
//     setCount(count + 1)
//   };

//   const handleDecrement = () =>{
//     setCount1(count1-1);
//   };
//   useEffect(()=>{
//    console.log("use effect called");
//   }, [count]);

//   return (
//     <React.Fragment>
//       <h1>count up: {count}</h1>
//       <button type="button" onClick={handleIncrement}>Increment</button>

//       <h1>count up: {count1}</h1>
//       <button type="button" onClick={handleDecrement}>decrement</button>
//     </React.Fragment>
//        )

// }

// custom hook

// import React from 'react';
// import useCustomCounter from "./Custom.js";
//  function App() {
//   const data= useCustomCounter();

//  return(
//    <React.Fragment>
//      <h1>count up: {data.count}</h1>
//      <button type="button" onClick={data.handleIncrement}>Invrement</button>
//    </React.Fragment>
//  );
// }
// export default App;

// import React, { Component } from 'react';
// import User from "./User";
// import Guest from "./Guest";

// export default class App extends Component {
//   render() {
//     const isRegistered = this.props.consumer;

//     if(isRegistered){

//       return <User />

//     }

//     return <Guest />

//   }
// }

// import React, { Component } from 'react';
// import User from './User';

// export default class App extends Component {
//   render() {
//     const primeMember = this.props.primeMember

//     return (
//       <React.Fragment>
//          <h1>Welcome user</h1>
//          {primeMember && <User />}
//       </React.Fragment>
//     )
//   }
// }

// import React, { Component } from 'react';
// import User from "./User";
// import Guest from "./Guest";

// export default class App extends Component {
//   state ={
//     issLoggedIn:true
//   };

//   clicLoging = () => {
//     this.setState({issLoggedIn:true});
//   }

//   clicLogout = () =>{
//     this.setState({issLoggedIn:false});
//   }

//   render() {
//     const issLoggedIn = this.props.issLoggedIn;
//     if(issLoggedIn){
//       return <User  clickData={this.clicLogout}/>
//     }else{
//           return <Guest clickData = {this.clicLoging}/>;
//     }

//   }
// }

// import React, { Component } from 'react';

// export default class App extends Component {

//   render() {
//     const arr =this.props.number;

//     // const newArr = arr.map( (num) => {
//     //   console.log("num =" , num)
//     //   return <li>{num*2}</li>
//     // } );
//     // console.log("old array =",arr)
//     // console.log("new array =",newArr)

//     return (
//       // <ul>
//       //   <li>{arr[0]}</li>
//       // </ul>
//       <ul>
//         {/* {newArr} */}

//         {
//           arr.map( (num)=>{
//             return <li>{num}</li>
//           })
//         };

//       </ul>
//     );
//   }
// }

// import React, { Component } from 'react';

// export default class App extends Component {
//   state ={
//     users:[
//       {id:101,name:"Mehul",password:"1234"},
//       {id:102,name:"rahul",password:"12345"},
//       {id:103,name:"gautam",password:"123456"}
//     ],
//     isLoggedIn: false
//   }
//   render() {
//     const newUser = this.state.users.map((user)=>{
//       console.log(user);
//             return <h1 key={user.id}>ID: {user.id} Name{user.name} Password: {user.password}</h1>

//     })
//     return (
//       <div>
//         {/* <h1>Id: {this.state.users[0].id} name: {this.state.users[0].name}      Password: {this.state.users[0].password}</h1>
//          */}
//          {newUser}

//       </div>
//     )
//   }
// }

// css in react

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     // const btnStyle = {
//     //   color:"blue",
//     //   backgroundColor:"orange"
//     // };

//     const txtc = {
//       color:"blue"
//     }
//     const txts = {
//       fontSize:"80px"
//     }
//     return (
//       <div>
//         {/* <button style={btnStyle}>Button</button> */}
//         <h1 style={{...txtc,...txts}}>hello App</h1>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {

//    state={
//      change:false
//    };
//    clickHandle = () =>{
//      this.setState({change:true})
//    }

//   render() {
//     const btnStyle = {
//       color:"blue",
//       backgroundColor:"orange"
//     }
//     if(this.state.change){
//       btnStyle.backgroundColor="white";
//     }
//     return (
//       <div>
//         <button  onClick={this.clickHandle} style={btnStyle}>Button</button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react';
// import  "./App.css";
// import User from  "./User";
// export default class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//          <h1 className="txt">Hello App</h1>
//          <User />
//       </React.Fragment>
//     );
//   }
// }

// import React, { Component } from 'react';
// import  "./App.css";
// import User from './User';
// import Styles from "./App.module.css";

// export default class App extends Component {
//   render() {
//     // let style = false;

//     return (
//       <React.Fragment>
//         <h1 className={Styles.txt}>Hello App</h1>
//         {/* <User rang={style ? "txtb" : "txtg"} /> */}
//         <User />
//       </React.Fragment>
//     )
//   }
// }

// // image
// import React, { Component } from 'react';
// import img from "./1.jpeg"
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//          {/* <img src={process.env.PUBLIC_URL + "/1.jpeg"}
//          alt="pic"
//           /> */}
//           <img src={img} alt="pic" />
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <button className="btn btn-danger">Normal Button</button>

//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   state={
//     value:""
//   }

//    handlechange = e =>{
//      this.setState({value: e.target.value.toUpperCase()});
//    };

//   render() {
//     return (
//       <div>
//         <form>
//           <h2>Controlled by React</h2>
//           <input type="text" onChange={this.handlechange} value={this.state.value} />
//         </form>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   state={
//     value:"hello there"
//   }

//   handleChange = e =>{
//     this.setState({value:e.target.value.toUpperCase().substr(0,10)})
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <textarea onChange={this.handleChange} value={this.state.value} />
//         </form>
//       </div>
//     )
//   }
// }

// import React,{ Component } from 'react';
// import User from "./User";
// import Guest from "./Guest"
// export default class App extends Component {
//   state={
//     name:"mehul"
//   }
//   render() {
//     return (

//       <div>

//         <User name=  {this.state.name} />

//         <Guest name= {this.state.name} />

//       </div>

//     )

//   }

// }

// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { incNum,decNum } from './actions/index'

// const App = () => {
//     const mystate = useSelector((state)=> state.changeNumber)
//     const dispatch = useDispatch();
//     return (
//         <>

//           <div>
//             <button onClick={()=>dispatch(decNum())}>-</button>
//               <input type="text" value={mystate}/>
//                <button onClick={()=>dispatch(incNum())}>+</button>
//           </div>

//         </>
//     )
// }

// export default App

// import React from 'react'
// import Star from './component/star'
// const App = () => {
//   return (
//     <div>
//       <Star sale={sale} whishlist={2} />
//       gddf
//     </div>
//   )
// }

// export default App
// import React from 'react';

// function App() {

//   function MyCondition(props) {

//     const userType = props.type;
//     const userTyp = props.hh;
//     const userTypp = props.hr;

//     if (userType === 1) {
//       return <div className="iq-sold">
//       <span className="iq-sold-out">sold</span>
//   </div>
//     }else if(userTyp === 2){
//       return<div className="whish-list">
//       <span className="iq-whish-out d-flex align-items-center">
//           <i className="">jane de</i>
//       </span>
//   </div>

//     }
//     else if(userTypp === 3){
//       return(
//         <>
//         <div className="iq-sold">
//       <span className="iq-sold-out">sold</span>
//   </div>
//   <div className="whish-list">
//       <span className="iq-whish-out d-flex align-items-center">
//           <i className="">jane de</i>
//       </span>
//   </div>
//         </>
//       )
//     }

//     return <p>Here, You can write user template. You are a User.</p>;
//   }

//   return (
//     <div className="container">
//         <h1>React If Condition Example - ItSolutionStuff.com</h1>

//         <MyCondition  hr={3}  />

//     </div>
//   );
// }

// export default App;

// import React , { useState} from 'react'
// import { nanoid } from 'nanoid'
// import "./todo.css"
// import styled from "styled-components";

// // Styled component
// const Styledh1 = styled.h1`
//   background-color: black;
//   font-size: 32px;
//   color: white;
//   display: inline;
//   margin-left:360px;
// `

// const App = () => {
//   const [curretItem, setCurrentItem] = useState("");
//   const [itemList, updateItemList] = useState([]);

//   const onChangeHandler= (e)=>{
//             console.log("current value", e.target.value);
//             setCurrentItem(e.target.value);

//   }
// const handleDeleteClick =(id)=>{
//   const newlist = itemList.filter((item)=>{
//      return item.id !== id;
//    });
//    updateItemList(newlist);
// }
// const List = ()=>{
//   return(
//          <div>

//             {
//             itemList.map(item=>{

//               return(
//                 <div className="item">
//                   <div className="">
//                   <p key={item}>{item.item}</p>
//                   </div>
//                   <button style={{marginLeft:"20px", backgroundColor:"black" , color:"white"}} onClick={()=>handleDeleteClick(item.id)}>x</button>
//                 </div>
//                     )}
//                     )

//                     }
//           </div>
//   )
// }

//   const addItemToList = ()=>{
//     updateItemList([...itemList, {item: curretItem, id: nanoid()}]);
//     console.log("list item" , itemList)
//     setCurrentItem("");
//     console.log(setCurrentItem)
//   };

//   return (
//     <>
//     <div>
//       <Styledh1>
//         Name : Mehul Vinod Gohil
//       </Styledh1>
//     </div>
//     <div className="App">
//         <div className="App-header">
//             <div className="wrapper">
//                 <div className="Input-wrapper">
//                     <input className="fixed" value={curretItem} onChange={onChangeHandler} />
//                     <button  className="fixed" onClick={addItemToList}>Add</button>
//                 </div>
//                 <div className="center">
//                 <List key={"mehul"}/>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default App
// import React from "react";

// import { Steps, Step } from "react-step-builder";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import FinalStep from "./FinalStep";
// import { Button, Col, Row } from "antd";

// const Navigation = (props) => {
//   console.log({ props });
//   return (
//     <Row align="center">
//       <Col xs={6} md={4}>
//         <Button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
//           Previous
//         </Button>
//       </Col>
//       <Col xs={6} md={4}>
//         <Button type="primary" onClick={props.next}>
//           Next
//         </Button>
//       </Col>
//     </Row>
//   );
// };

// function App() {
//   const config = {
//     navigation: {
//       component: Navigation, // a React component with special props provided automatically
//       location: "after" // or before
//     }
//   };

//   return (

//     <div className="App">
//       <br />
//       <br />
//       <h2>
//         Name : Komal Menaria<br/>
//         Roll : 349 SYIT
//       </h2>
//       <br />
//       <br />
//       <br />
//       <Steps config={config}>
//         <Step component={Step1} />
//         <Step component={Step2} />
//         <Step component={FinalStep} />
//       </Steps>
//     </div>
//   );
// }

// export default App;
// https://codesandbox.io/s/quizzical-https-t1ovo?file=/src/App.js
// import React, { useState } from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import { Dropdown } from 'react-bootstrap'
// import './csssss/drop.css'
// const App = () => {
//   const [value, setValue] = useState("");
//   const [value1, setValue1] = useState("");
//   const [value2, setValue2] = useState("");
//   const [value3, setValue3] = useState("");

//   const clearState = () => {
//     setValue('');
//     setValue1('');
//     setValue2('');
//     setValue3('');

// }
//   return (
//     <>
//     <React.Fragment>
//     <div className="bgg">
//       <div className="content">
//         <div className="dropstyle">
//         <button style={{color:"white", background:"black"}} onClick={clearState}>Clear</button>

//           <Dropdown style={{ marginLeft: "30px" }}>
//             <Dropdown.Toggle variant="danger" id="dropdown-basic">
//               Movies Type
//             </Dropdown.Toggle>

//             <Dropdown.Menu align="right">
//               <Dropdown.Item onClick={() => setValue('Action')} href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item onClick={() => setValue('Horror')} href="#/action-2">Horror</Dropdown.Item>
//               <Dropdown.Item onClick={() => setValue('Romance')} href="#/action-3">Romance</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           <Dropdown style={{ marginLeft: "30px" }}>
//             <Dropdown.Toggle variant="warning" id="dropdown-basic">
//               City
//             </Dropdown.Toggle>

//             <Dropdown.Menu align="right">
//               <Dropdown.Item onClick={() => setValue1('Mumbai')} href="#/action-1">Mumbai</Dropdown.Item>
//               <Dropdown.Item onClick={() => setValue1('Hong Kong')} href="#/action-2">Hong Kong</Dropdown.Item>
//               <Dropdown.Item onClick={() => setValue1('Singapore')} href="#/action-3">Singapore</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           <Dropdown style={{ marginLeft: "30px" }}>
//             <Dropdown.Toggle variant="info" id="dropdown-basic">
//               Classic
//             </Dropdown.Toggle>

//             <Dropdown.Menu align="right">
//               <Dropdown.Item onClick={() => setValue2('Spider Man No Way To Home')} href="#/action-1">Spider Man No Way To Home</Dropdown.Item>
//               <Dropdown.Item onClick={() => setValue2("Harry Potter and the Sorcerer's Stone")} href="#/action-2"> Harry Potter and the Sorcerer's Stone</Dropdown.Item>
//               <Dropdown.Item onClick={() => setValue2('venome')} href="#/action-3">venome</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           <Dropdown style={{ marginLeft: "30px" }}>
//             <Dropdown.Toggle variant="primary" id="dropdown-basic">
//               Theater
//             </Dropdown.Toggle>

//             <Dropdown.Menu align="right">
//               <Dropdown.Item onClick={() => setValue3('Movie Time')} href="#/action-1">Movie Time</Dropdown.Item>
//               <Dropdown.Item onClick={() => setValue3('INOX')} href="#/action-2">INOX</Dropdown.Item>
//               <Dropdown.Item onClick={() => setValue3('Sona Gold Digital Cinema')} href="#/action-3">Sona Gold Digital Cinema</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//           <Dropdown>
//             <Dropdown.Toggle variant="info" id="dropdown-basic">
//               Movies Link to Watch Online
//             </Dropdown.Toggle>

//             <Dropdown.Menu align="right">
//               <Dropdown.Item target="_blank"  href="https://soap2day.rs/movie/watch-spider-man-no-way-home-full-71326">Spider Man No Way To Home</Dropdown.Item>
//               <Dropdown.Item target="_blank" href="https://soap2day.rs/movie/watch-harry-potter-and-the-philosophers-stone-full-19812"> Harry Potter and the Sorcerer's Stone</Dropdown.Item>
//               <Dropdown.Item target="_blank" href="https://soap2day.rs/movie/watch-venom-full-19820">venome</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>
//       <table style={{ width: "50%", position:"relative",top:"150px" }}>

//         <tr>
//           <th>Movie Type <button style={{color:"white", background:"black"}} onClick={()=>{setValue('')}}>x</button></th>
//           <th>City <button style={{color:"white", background:"black"}} onClick={()=>{setValue1('')}}>x</button></th>
//           <th>Classic <button style={{color:"white", background:"black"}} onClick={()=>{setValue2('')}}>x</button></th>
//           <th>Theater <button style={{color:"white", background:"black"}} onClick={()=>{setValue3('')}}>x</button></th>

//         </tr>
//         <tr>
//           <td>Movie Type:<br/> <strong>{value}</strong></td>
//           <td>City:<br/>    <strong>{value1}</strong></td>
//           <td>Classic:<br/> <strong>{value2}</strong></td>
//           <td>Theater:<br/> <strong>{value3}</strong></td>
//         </tr>
//       </table>

//       </div>
//       </React.Fragment>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Defaultroute from './college/Defaultroute'
// export const App = () => {
//   return (
//     <div>
//     <Defaultroute/>
//     </div>
//   )
// }
// export default App

// import React from 'react'
// import Pokemon from './pokemon API/Pokemon'
// const App = () => {
//     return (
//         <div>
//             <Pokemon/>
//         </div>
//     )
// }

// export default App
// import React from 'react';
// import './App.css'
// export default function App(props) {

// // const Row = ({ children }) => <div className="row">{children}</div>;

// // const Column = ({ children }) => <div className="col">{children}</div>;

// // const Box = ({ color,props }) => (
// //   <div className="box" style={{ backgroundColor: color }}>Mehul</div>
// // );

//   return (
//     <React.Fragment>

//     <div class="flex-container">
//   <div>1</div>
//   <div>2</div>
//   <div>3</div>
//   </div>
//     </React.Fragment>
//   );
// }

// import React from 'react';
// import './App.css'
// export default function App(props) {

//   const Red =(props)=>{
//   return (
//     <>
//       <div  style={{backgroundColor:"yellow" , height:"180px" , width:"280px", color:"black", fontSize:"30px" }}>
//     python: {props.pythonred}
//         </div>
//         </>
//   )
//   }
//   const Blue =(props)=>{
//     return (
//       <>
//         <div  style={{backgroundColor:"orange" , height:"180px" , width:"280px", color:"black", fontSize:"30px" }}>
//       python: {props.pythonblue}
//           </div>
//           </>
//     )
//   }
//   const Green =(props)=>{
//     return (
//       <>
//         <div  style={{backgroundColor:"skyblue" , height:"180px" , width:"280px", color:"black", fontSize:"30px" }}>
//       python: {props.pythongreen}
//           </div>
//           </>
//     )
//   }

//   return (
//     <React.Fragment>
//       <div className="container">
/* <div  style={{backgroundColor:"red" , height:"180px" , width:"280px", color:"black", fontSize:"30px" }}>
    python: {props.python}
        </div> */
/* <div style={{backgroundColor:"blue" , height:"180px" , width:"280px", color:"white", fontSize:"30px"}}>
        python: {props.python}
        </div>
        <div style={{backgroundColor:"green" , height:"180px" , width:"280px", color:"white", fontSize:"30px"}}>
       python: {props.python}
        </div> */
/* <Red pythonred="Intermidiate"  />
        <Blue pythonblue="Beginner"/>
        <Green pythongreen="Advance"/>
      </div>
    </React.Fragment>
  );
} */
// import React from 'react';
// import './App.css';

// const Continents=()=>{
//   return(
//       <React.Fragment>
//           <li>Asia</li>
//           <li>Austrailia</li>
//           <li>Antarctica</li>
//       </React.Fragment>
//   )
// }

// const Countries=()=>{
//   return(
//       <React.Fragment>
//           <li>India</li>
//           <li>China</li>
//           <li>Germany</li>
//       </React.Fragment>
//   )
// }

// const Cities=()=>{
//   return(
//       <React.Fragment>
//           <li>Mumbai</li>
//           <li>Bengaluru</li>
//           <li>Kolkata</li>
//       </React.Fragment>
//   )
// }

// function App() {
//   return (
//     <>
//     <div className="country-names">
//      <Continents></Continents>
//      <Countries></Countries>
//      <Cities></Cities>
//      </div>
//     </>
//   );
// }

// export default App;

// ################ card ################//

// import React from "react";
// import Cardd from "./component/Card";
// import img1 from "./book.jpg";
// import "../src/csssss/card.css";
// import { Row, Col ,Container} from "react-bootstrap";

// const App = () => {
//   return (
//     <>
//       <Container className="mt-4" style={{position:"relative" , left:"45px" }}>
//         <Row className="">
//           <Col sm={4} md={4}>
//             <Cardd CardTitle="Book" CardText="Author Mehul" img={img1} />
//           </Col>
//           <Col sm={4} md={4}>
//             <Cardd CardTitle="Book" CardText="Author Dharmit" img={img1} />
//           </Col>
//           <Col sm={4} md={4}>
//             <Cardd CardTitle="Book" CardText="Author Kiran" img={img1} />
//           </Col>
//           <Col sm={4} md={4}>
//             <Cardd CardTitle="Book" CardText="Author Devangi" img={img1} />
//           </Col>
//           <Col sm={4} md={4}>
//             <Cardd CardTitle="Book" CardText="Author Karishma" img={img1} />
//           </Col>
//           <Col sm={4} md={4}>
//             <Cardd CardTitle="Book" CardText="Author Komal" img={img1} />
//           </Col>
//           </Row>
//       </Container>
//     </>
//   );
// };

// export default App;

// ################ firebaase ################//

// import React from 'react'
// import Reactcontact from './FireBase/Reactcontact'
// const App = () => {
//   return (
//     <>
//       <Reactcontact/>
//     </>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
//   const[name, setName] = useState();

//   return (
//     <>
//     <h3>iPad 4 Mini - $500.01</h3>
//     <button>d1</button>
//     <h3>H&M T-Shirt White - $10.99</h3>
//     <button>d2</button>

//     <h3>Charli XCX - Sucker CD - $19.99</h3>
//     <button>d3</button>

// <div>
//   <p>
// Your Cart<br/>
// Please add some products to cart<br/>
// Total: $0.00<br/>
// <button>clear</button>

// </p>
// </div>

//     </>
//   )
// }

// export default App

/*
App structure:

ShoppingCartApp
  Header
    Navigation
    ShoppingCart
  ShoppingCartOverlay
    ShoppingCartProduct
    ShoppingCartTotal
  ProductList
    Product
*/
// import React from 'react'
// export const shoppingProducts = [
//   {id: 0, name: "Nike VaporFly 4% Flyknit", price: 209, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/acmoik7t1kfbprm8hsqs/vaporfly-4-flyknit-running-shoe-7R7zSn.jpg", quantityInCart: 0, inCart: false},
//   {id: 1, name: "Nike Air Monarch IV PR", price: 89, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/vjsleghax3228bpidanh/air-monarch-iv-pr-shoe-qf64pl.jpg", quantityInCart: 0, inCart: false},
//   {id: 2, name: "Nike Air Max Deluxe SE", price: 149, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/rkhls7wdxdydeg1vkwkt/air-max-deluxe-se-shoe-T6Vkl2.jpg", quantityInCart: 0, inCart: false}
// ];

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <Navigation />
//         <ShoppingCart quantity={this.props.quantity}
//           amountToPay={this.props.amountToPay} />
//       </header>
//     )
//   }
// }

// class Navigation extends React.Component {
//   render() {
//     return (
//       <nav>
//         <a href="#">Home</a>
//         <a href="#">Browse</a>
//         <a href="#">Contact</a>
//       </nav>
//     )
//   }
// }

// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.showOverlay = this.showOverlay.bind(this);
//   }
//   showOverlay() {
//     document.getElementById('overlay').style.display = 'flex';
//     document.querySelector('body').style.overflow = 'hidden';
//   }
//   render() {
//     return (
//       <div id="cart">
//         {/* Hide a number of items if it's equal 0 */}
//         <span className={this.props.quantity == 0 ? "hide-price" : ""}>{this.props.quantity}</span>
//         <i class="fas fa-shopping-cart"          onClick={this.showOverlay}></i>
//       </div>
//     )
//   }
// }

// class ShoppingCartOverlay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.updateAmountToPay = this.updateAmountToPay.bind(this);
//   }
//   closeOverlay() {
//     document.getElementById('overlay').style.display = 'none';
//     document.querySelector('body').style.overflow = 'auto';
//   }
//   updateAmountToPay(item) {
//     this.forceUpdate();
//   }
//   render() {
//     let itemsInCart = this.props.data.itemsInCart.map((item, index) => {
//       // Return key which defines an order of items inside a cart. The order in a cart is different than in database
//       return <ShoppingCartProduct key={index}
//                item={item}
//                indexInCart={index}
//                removeFromCart={this.props.removeFromCart}
//                updateAmountToPay={this.updateAmountToPay} />
//     });
//     let amountToPay = 0;
//     for (let i=0; i<this.props.data.items.length; i++) {
//       amountToPay += this.props.data.items[i].price * this.props.data.items[i].quantityInCart;
//     }
//     return (
//       <div id="overlay">
//         <section id="shopping-cart">
//           <div id="cart-header">
//             <span id="cart-title">Shopping Cart</span>
//             <i className="far fa-times-circle"
//               onClick={this.closeOverlay.bind(this)}></i>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {itemsInCart}
//             </tbody>
//           </table>
//           <span id="empty-cart">{(itemsInCart.length == 0) ? "Shopping cart is empty" : ""}</span>
//           <h3 id="cart-total">Cart Total</h3>
//           <div id="totals">
//             <span>Cart Totals</span>
//             <span>Number of items: {this.props.data.quantity}</span>
//             <span>Total: £{amountToPay}</span>
//           </div>
//           <button id="checkout"
//             disabled={itemsInCart.length == 0 ? true : false} >Checkout</button>
//         </section>
//       </div>
//     )
//   }
// }

// class ShoppingCartProduct extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
//     this.handleQuantityChange = this.handleQuantityChange.bind(this);
//   }
//   handleRemoveFromCart(e) {
//     this.props.removeFromCart(this.props.item, this.props.indexInCart);
//   }
//   handleQuantityChange(e) {
//     this.props.item.quantityInCart = e.target.value;
//     // Update total value
//     this.forceUpdate();
//     this.props.updateAmountToPay(this.props.item);
//   }
//   render() {
//     return(
//       <tr className="items-in-cart">
//         <td><img src={this.props.item.image}></img></td>
//         <td>{this.props.item.name}</td>
//         <td>£{this.props.item.price}</td>
//         <td>
//           <input type="number" name="quantity" min="1" max="10" onChange={this.handleQuantityChange} />
//         </td>
//         <td>£{this.props.item.price * this.props.item.quantityInCart}</td>
//         <td><i className="fas fa-trash"
//               onClick={this.handleRemoveFromCart}></i></td>
//       </tr>
//     )
//   }
// }

// class ProductList extends React.Component {
//   render() {
//     let items = this.props.items.map((item, index) => {
//       return <Product key={item.id}
//                item={item}
//                addToCart={this.props.addToCart} />
//     });
//     return (
//       <section id="list">
//         {items}
//       </section>
//     )
//   }
// }

// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddToCart = this.handleAddToCart.bind(this);
//   }
//   handleAddToCart(e) {
//     this.props.addToCart(this.props.item);
//   }
//   render() {
//     return (
//       <div className="items">
//         <img src={this.props.item.image}></img>
//         <div className="info">
//           <h3>{this.props.item.name}</h3>
//           <span>£ {this.props.item.price}</span>
//           <button onClick={this.handleAddToCart}
//             disabled={this.props.item.inCart}
//             className={this.props.item.inCart ? "button-disabled" : ""}>
//             {this.props.item.inCart ? "Item in a cart" : "Add to cart"}
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: shoppingProducts,
//       quantity: 0,
//       amountToPay: 0,
//       itemsInCart: []
//     }
//     this.addToCart = this.addToCart.bind(this);
//     this.removeFromCart = this.removeFromCart.bind(this);
//   }
//   addToCart(item) {
//     let itemsInCart = this.state.itemsInCart;
//     itemsInCart.push(this.props.items[item.id]);
//     shoppingProducts[item.id].inCart = true;
//     shoppingProducts[item.id].quantityInCart = 1;
//     this.setState({
//       quantity: this.state.quantity + 1,
//       amountToPay: this.state.amountToPay + this.props.items[item.id].price,
//       itemsInCart: itemsInCart,
//       items: shoppingProducts
//     });
//   }
//   removeFromCart(item, indexInCart) {
//     let itemsInCart = this.state.itemsInCart;
//     shoppingProducts[item.id].inCart = false;
//     shoppingProducts[item.id].quantityInCart = 0;
//     itemsInCart.splice(indexInCart, 1);
//     this.setState({
//       quantity: this.state.quantity - 1,
//       amountToPay: this.state.amountToPay - this.props.items[item.id].price,
//       itemsInCart: itemsInCart,
//       items: shoppingProducts
//     });
//   }
//   render() {
//     return (
//       <main>
//         <Header quantity={this.state.quantity}
//           amountToPay={this.state.amountToPay} />
//         <ShoppingCartOverlay data={this.state}
//           removeFromCart={this.removeFromCart} />
//         <ProductList items={this.props.items}
//           addToCart={this.addToCart} />
//       </main>
//     )
//   }
// }
// export default App
// ReactDOM.render(<ShoppingCartApp items={shoppingProducts} />,
//                document.getElementById('root'));

// import React from 'react'
// import './csssss/synthetic.css'
// const App = () => {
//   return (
//     <div>
//       <div className="main">
//       <div className="main__left">
//          <div className="form__container">
//            <form className="form" onSubmitCapture={(e) => e.preventDefault()}>
//            {/* typing event */}
//            <label for="input__change">Change event trigger</label>
//            <input onChangeCapture={(e) => alert(` Change event occurred, value is ${e.target.value}`)} className="" name="input__change" className="input__change" type="text"></input>
//            {/* key typed event */}
//            <label for="input__keycode">Key press event trigger</label>
//            <input onKeyPressCapture={(e) => alert(`KeyPress event occurred, key code is ${e.keyCode}`)} className="" className="input__keycode" type="text"></input>
//            {/* focus event */}
//            <label for="input__focus">Focus event trigger</label>
//            <input onFocusCapture={() => alert(`Focus event occurred`)} className="input__focus" id="input__focus" name="input__focus" type="text"></input>
//            {/* Click event */}
//            <label for="input__click">Click event Trigger</label>
//            <button onClickCapture={() => alert(`Click event occurred`)} className="input__click" id="input__click">Click Me Now</button>
//            </form>
//          </div>
//       </div>
//       <div className="main__right">
//       </div>
//      </div>
//     </div>
//   )
// }

// export default App
// import React, { useState } from "react";

// import React,{useState} from 'react';
// import './csssss/pract9.css'
// import img1 from './shoeimg/1.jpeg'
// import img2 from './shoeimg/2.jpeg'
// import img3 from './shoeimg/3.jpg'
// import img4 from './shoeimg/4.jpg'
// import img5 from './shoeimg/5.jpg'
// import img6 from './shoeimg/6.jpg'

// const App = () => {
//   const[email , setEmail]=useState();
//   const[password , setPassword]=useState();

//   const[allEntry,setAllEntry]=useState([]);
// const submitt=(e)=>{
//   e.preventDefault()
//   // data store horahai newEntry
// const newEntry = {email:email,password:password};
// // mera old data allEntry
// setAllEntry([...allEntry,newEntry])
// // console.log(allEntry)

// }
//   return (
//     <>
//     <form onSubmit={submitt}>
//       <div className="center">
//          <h4>email</h4>
//          <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//          <h4>Password</h4>
//          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
//          <button type="submit">click</button>
//          </div>
//       </form>

//           <div>
//             {/* looping data */}
//             {
//               allEntry.map((cvalue)=>{
//                 return(
//                   <>
//                      <h3 className="hhh">{cvalue.email}</h3>
//                      <h3 className="hhh">{cvalue.password}</h3>
//                      <div class="main">
//   <h1>Shoes</h1>
//   <ul class="cards">
//     <li class="cards_item">
//       <div class="card">
//         <div class="card_image"><img src={img1} alt="iimgg" /></div>
//         <div class="card_content">
//           <h2 class="card_title">Shoes Price</h2>
//           <p class="card_text"><del style={{color:"black"}}>15000</del> 10000</p>
//           <button class="btn card_btn">Read More</button>
//         </div>
//       </div>
//     </li>
//     <li class="cards_item">
//       <div class="card">
//         <div class="card_image"><img src={img2} alt="iimmgg"/></div>
//         <div class="card_content">
//           <h2 class="card_title">Shoes Price</h2>
//           <p class="card_text"><del style={{color:"black"}}>15000</del> 10000</p>
//           <button class="btn card_btn">Read More</button>
//         </div>
//       </div>
//     </li>
//     <li class="cards_item">
//       <div class="card">
//         <div class="card_image"><img src={img3}  alt="iimgg"/></div>
//         <div class="card_content">
//           <h2 class="card_title">Shoes Price</h2>
//           <p class="card_text"><del style={{color:"black"}}>15000</del> 10000</p>
//           <button class="btn card_btn">Read More</button>
//         </div>
//       </div>
//     </li>
//     <li class="cards_item">
//       <div class="card">
//         <div class="card_image"><img src={img4} alt="iimmgg"/></div>
//         <div class="card_content">
//           <h2 class="card_title">Shoes Price</h2>
//           <p class="card_text"><del style={{color:"black"}}>15000</del> 10000</p>
//           <button class="btn card_btn">Read More</button>
//         </div>
//       </div>
//     </li>
//     <li class="cards_item">
//       <div class="card">
//         <div class="card_image"><img src={img5} alt="iimmgg"/></div>
//         <div class="card_content">
//           <h2 class="card_title">Shoes Price</h2>
//           <p class="card_text"><del style={{color:"black"}}>15000</del> 10000</p>
//           <button class="btn card_btn">Read More</button>
//         </div>
//       </div>
//     </li>
//     <li class="cards_item">
//       <div class="card">
//         <div class="card_image"><img src={img6} alt="iimmgg"/></div>
//         <div class="card_content">
//           <h2 class="card_title">Shoes Price</h2>
//           <p class="card_text"><del style={{color:"black"}}>15000</del> 10000</p>
//           <button class="btn card_btn">Read More</button>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>

// <h3 class="made_by">Made with ♡</h3>

//                   </>
//                 )
//               })
//             }
//           </div>
//     </>
//   );
// };

// export default App;

// import React from 'react';
// import DataFetching from './internshala task/DataFetching';
// const App = () => {
//   return(
//     <>
//      <DataFetching/>
//     </>
//   )
// };

// export default App;

// import React,(useState,useEffect) from 'react';
// import axios from 'axios'
// const App = () => {
//   const [data,setData]= useState( {
// 			userId: '',
// 			title: '',
// 			body: ''
// 		})
//   return(
//     <>

//     </>
//   )
// };

// export default App;

// import React from 'react'
// class ErrorBoundary extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { error: null, errorInfo: null };
//     }

//     componentDidCatch(error, errorInfo) {
//       // Catch errors in any components below and re-render with error message
//       this.setState({
//         error: error,
//         errorInfo: errorInfo
//       })
//       // You can also log error messages to an error reporting service here
//     }

//     render() {
//       if (this.state.errorInfo) {
//         // Error path
//         return (
//           <div>
//             <h2>Something went wrong.</h2>
//             <details style={{ whiteSpace: 'pre-wrap' }}>
//               {this.state.error && this.state.error.toString()}
//               <br />
//               {this.state.errorInfo.componentStack}
//             </details>
//           </div>
//         );
//       }
//       // Normally, just render children
//       return this.props.children;
//     }
//   }

//   class BuggyCounter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { counter: 0 };
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//       this.setState(({counter}) => ({
//         counter: counter + 1
//       }));
//     }

//     render() {
//       if (this.state.counter === 5) {
//         // Simulate a JS error
//         throw new Error('I crashed!');
//       }
//       return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
//     }
//   }

//   function App() {
//     return (
//       <div>
//         <p>
//           <b>
//             This is an example of error boundaries in React 16.
//             <br /><br />
//             Click on the numbers to increase the counters.
//             <br />
//             The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
//           </b>
//         </p>
//         <hr />
//         <ErrorBoundary>
//           <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
//           <BuggyCounter />
//           <BuggyCounter />
//         </ErrorBoundary>
//         <hr />
//         <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
//         <ErrorBoundary><BuggyCounter /></ErrorBoundary>
//         <ErrorBoundary><BuggyCounter /></ErrorBoundary>
//       </div>
//     );
//   }

// export default App

// import React,{useState} from 'react';
// import {Card} from 'react-bootstrap';
// import img1 from './shoeimg/1.jpeg'
// const App = () => {
//   const[login,setLoging]=useState(false)

//   const Shoe =()=>{
//     return(
//       <>
//    <div className="d-flex justify-content-lg-center"  style={{ marginTop:"50px"}}>
//   <Card style={{ width: '18rem'}}>
//   <Card.Img variant="top" src={img1} />
//   <Card.Body>
//     <Card.Title>Price 200$</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
// </Card>
// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src={img1} />
//   <Card.Body>
//     <Card.Title>Price 200$</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
// </Card>
// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src={img1} />
//   <Card.Body>
//     <Card.Title>Price 200$</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
// </Card>
// </div>
//       </>
//     )
//   }
//   return(
//     <>
//        <div className="d-flex justify-content-center mt-3">
//          <input type="text" placeholder="email"/>
//          <input type="password" placeholder="password"/>
//          <button onClick={() =>setLoging(true)}>login</button>
//        </div>

//        {login ? <Shoe/>: ""}
//     </>
//   )
// };

// export default App;

// import React,{useEffect,useState} from 'react'

// const App =()=>{
// const[curdata,setData]=useState([])
//   const data= async ()=>{
//     const resp= await fetch("https://jsonplaceholder.typicode.com/users")
//     setData(await resp.json())
//   }
//   useEffect(()=>{
//     data()
//   })
//   return(
//   <>
//     hello
//     {
//       curdata.map((currtElement)=>{
//         return(
//           <>
//               <h4>

//                 {currtElement.name}
//               </h4>
//           </>
//         )
//       })
//     }
//   </>

//   )
// }
// export default App;

// import React from "react";
// import { Card, Col, Row, Container } from "react-bootstrap";
// import "./csssss/card.css";
// import { LineChart, Line, XAxis, YAxis } from "recharts";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
// };

// const data = [];

// const rand = 300;
// for (let i = 0; i < 7; i++) {
//   let d = {
//     year: 2000 + i,
//     value: { x: Math.random() * (rand + 50) + 100 },
//   };

//   data.push(d);
// }
// const App = () => {
//   return (
//     <>
//       <Row>
//         <Col md="12" className="">
//           <Card className="">
//             <Card.Body className="">

//               <Row className="">
//                 <Col md="6" className="">
//                   <Card className=" bg-primary text-white shadow-none mb-lg-0 pt-4">
//                     <h6 className="ms-2">Number</h6>
//                     <table class="table table-striped table-primary">
//                       <tbody>
//                         <tr style={{ height: "1px" }}>
//                           <td>
//                             Deployment
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                           <td className="ps-5">
//                             100 <span className="text-danger">(-50)</span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             Deployment
//                             <br />
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                           <td className="ps-5">
//                             100 <span className="text-success">(-50)</span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             Deployment
//                             <br />
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                           <td className="ps-5">
//                             100 <span className="text-danger">(-50)</span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             Deployment
//                             <br />
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                           <td className="ps-5">
//                             100 <span className="text-success">(-50)</span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             Deployment
//                             <br />
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                           <td className="ps-5">
//                             100 <span className="text-danger">(-50)</span>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </Card>
//                 </Col>
//                 <Col md="6" className="">
//                   <Card className=" bg-primary text-white  shadow-none mb-lg-0 pt-4">
//                     <h6 className="ms-2">Cycle Time</h6>
//                     <table class="table table-striped table-primary">
//                       <tbody>
//                         <tr>
//                           <td>
//                             Deployment
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                           <td className="ps-5">
//                             100 <span className="text-danger">(-50)</span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             Deployment
//                             <br />
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                           <td className="ps-5">
//                             100 <span className="text-success">(-50)</span>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             Deployment
//                             <br />
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                           <td className="ps-5">
//                             100 <span className="text-danger">(-50)</span>
//                           </td>
//                         </tr>
//                         <tr height="113"></tr>
//                       </tbody>
//                     </table>
//                   </Card>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Container fluid>
//         <Row>
//           <Col lg="12">
//             <Card className="">

//               <Card.Body className="chartt">
//                 <div style={styles}>
//                 <h2>Development</h2>

//                   <LineChart
//                     width={800}
//                     height={300}
//                     data={data}
//                     margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
//                   >
//                     <Line
//                       type="monotone"
//                       dataKey="value.x"
//                       stroke="white"
//                       dot={false}
//                     />
//                     <XAxis dataKey="year" stroke="white" />
//                     <YAxis stroke="white" />
//                   </LineChart>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       <Row>
//         <Col md="12" className="">
//           <Card className="">
//             <Card.Body className="">
//               <Row className="">
//                 <Col md="6" className="">
//                   <Card className="bg-success text-white shadow-none mb-lg-0 pt-4">
//                     <h6 className="ms-2">Milstone</h6>
//                     <table class="table table-striped table-success">
//                       <tbody>
//                         <tr>
//                           <td>
//                             My orders page enhancment completed
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                         </tr>
//                         <tr height="225"></tr>
//                       </tbody>
//                     </table>
//                   </Card>
//                 </Col>
//                 <Col md="6" className="">
//                   <Card className=" bg-success text-white shadow-none mb-lg-0 pt-4">
//                     <h6 className="ms-2">Areas of concern</h6>
//                     <table class="table table-striped table-success">
//                       <tbody>
//                         <tr style={{ height: "1px" }}>
//                           <td>
//                             My orders page enhancment completed My orders page
//                             enhancment completed
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             My orders page enhancment completed My orders page
//                             enhancment completed
//                             <br />
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             My orders page enhancment completed
//                             <br />
//                             <div style={{ fontSize: "10px" }}>last month</div>
//                           </td>
//                         </tr>
//                         <tr height="113"></tr>
//                       </tbody>
//                     </table>
//                   </Card>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { Form, Row, Col, InputGroup, Button, Container } from "react-bootstrap";
// import "./csssss/practical12.css";
// const App = () => {
//   const [validated, setValidated] = useState(false);
//   const [studentname, setUser1] = useState();
//   const [studentgrno, setUser2] = useState();
//   const [email, setUser3] = useState();
//   const [dateyearofadmission, setUser4] = useState();
//   const [subjectbook, setUser5] = useState();
//   const [programmeitorcs, setUser6] = useState();
//   const [check, setCheck] = useState();
// const [use , usesSet]=useState();
//   const [allEntry, setAllEntry] = useState([]);

//   const submitt = (e) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     if (form.checkValidity() === false) {
//       e.stopPropagation();
//     }

//     setValidated(true);

//     if (
//       studentname &&
//       studentgrno &&
//       email &&
//       programmeitorcs &&
//       dateyearofadmission &&
//       subjectbook &&
//       check
//     ) {
//       const newEntry = {
//         id: new Date().getTime().toString(),
//         studentname: studentname,
//         studentgrno: studentgrno,
//         email: email,
//         dateyearofadmission: dateyearofadmission,
//         subjectbook: subjectbook,
//         programmeitorcs: programmeitorcs,
//       };

//       setAllEntry([...allEntry, newEntry]);
//       setUser1("")
//       setUser2("")
//       setUser3("")
//       setUser4("")
//       setUser5("")
//       setUser6("")
//       setCheck((c)=>!c)

//     } else {
//       alert("all filds are requires");
//     }
//   };

//   return (
//     <>
//       <Container className="mt-1">
//         <Form noValidate validated={validated} onSubmit={submitt}>

//           <h2 className="d-flex justify-content-center mb-5">
//             Library Subscription Form
//           </h2>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="4" controlId="validationCustom01">
//               <Form.Label>Student name</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Student name"
//                 value={studentname}
//                 onChange={(e) => setUser1(e.target.value)}
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please choose a Student name.
//               </Form.Control.Feedback>{" "}
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationCustom02">
//               <Form.Label>Student_GR.No name</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Student_GR.No name"
//                 value={studentgrno}
//                 onChange={(e) => setUser2(e.target.value)}
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please choose a Student_GR.No name.
//               </Form.Control.Feedback>{" "}
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//               <Form.Label>Email ID</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Email ID"
//                   aria-describedby="inputGroupPrepend"
//                   value={email}
//                   onChange={(e) => setUser3(e.target.value)}
//                   required
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please choose a Email ID.
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationCustom03">
//               <Form.Label> Date_Year_of Admission</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Date_Year_of Admission"
//                 value={dateyearofadmission}
//                 onChange={(e) => setUser4(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid Date_Year_of Admission.
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationCustom04">
//               <Form.Label>Subject_Books to Subscribe</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Subject_Books to Subscribe"
//                 value={subjectbook}
//                 onChange={(e) => setUser5(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid Subject_Books to Subscribe.
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationCustom05">
//               <Form.Label> Programme_IT/CS</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Programme_IT/CS"
//                 value={programmeitorcs}
//                 onChange={(e) => setUser6(e.target.value)}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid Programme_IT/CS.
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               label="Agree to terms and conditions"
//               feedback="You must agree before submitting."
//               feedbacktype="invalid"
//               checked={check}
//               class="checkbox"
//               onChange={(e) => setCheck(e.target.checked)}
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       </Container>

//       {
//       allEntry.map((cur) => {
//         return (
//           <>
//             <Container>
//               <h2 className="mt-4">
//                 Details of the subscribed Member is <span style={{color:"red", fontSize:"35px"}}>{cur.studentname}</span> . Date
//                 until the subscription is valid for <span style={{color:"red", fontSize:"35px"}}>1 month</span>
//               </h2>
//               <table className="table table-dark mt-5 " key={cur.id}>
//                 <thead>
//                   <tr>
//                     <th colSpan="6" style={{ paddingLeft: "500px" }}>
//                       Student name
//                     </th>
//                   </tr>
//                   <tr>
//                     <th>Student name</th>
//                     <th>Student_GR.No name</th>
//                     <th>Email ID</th>
//                     <th>Date_Year_of Admission</th>
//                     <th>Subject_Books to Subscribe</th>
//                     <th>Programme_IT/CS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td  contenteditable="true"><span style={{color:"white", fontSize:"20px", paddingLeft:"20px" , fontWeight:"bold" }}>{cur.studentname}</span></td>
//                     <td  contenteditable="true"><span style={{color:"white", fontSize:"20px",  paddingLeft:"50px" , fontWeight:"bold"}}>{cur.studentgrno}</span></td>
//                     <td  contenteditable="true"><span style={{color:"white", fontSize:"20px",  fontWeight:"bold" }}>{cur.email}</span></td>
//                     <td  contenteditable="true"><span style={{color:"white", fontSize:"20px", paddingLeft:"50px" , fontWeight:"bold"}}>{cur.dateyearofadmission}</span></td>
//                     <td  contenteditable="true"><span style={{color:"white", fontSize:"20px", paddingLeft:"70px" , fontWeight:"bold" }}>{cur.subjectbook}</span></td>
//                     <td  contenteditable="true"><span style={{color:"white", fontSize:"20px",  paddingLeft:"50px" , fontWeight:"bold"}}>{cur.programmeitorcs}</span></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </Container>
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default App;

// import React,{useState} from 'react';
// import './csssss/pract9.css'

// const App = () => {
//   const [studentname, setUser1] = useState();
//   const [studentgrno, setUser2] = useState();
//   const [email, setUser3] = useState();
//   const [dateyearofadmission, setUser4] = useState();
//   const [subjectbook, setUser5] = useState();
//   const [programmeitorcs, setUser6] = useState();

//   const[allEntry,setAllEntry]=useState([]);

// const submitt=(e)=>{

//   e.preventDefault()
//   if(studentname &&studentgrno &&email &&programmeitorcs &&dateyearofadmission &&subjectbook){
//     const newEntry = {studentname,studentgrno,email,programmeitorcs,dateyearofadmission,subjectbook};
//     setAllEntry([...allEntry,newEntry])
//       setUser1("")
//       setUser2("")
//       setUser3("")
//       setUser4("")
//       setUser5("")
//       setUser6("")

//   }else{
//     alert("All Fields Are Required")
//   }

// }
//   return (
//     <>
//     <form onSubmit={submitt}>
//       <div className="center">
//          <input type="text" placeholder="Student Name" value={studentname} onChange={(e)=>setUser1(e.target.value)} required/><br/><br/>
//          <input type="text" placeholder="Student Gr No" value={studentgrno} onChange={(e)=>setUser2(e.target.value)} required/><br/><br/>
//          <input type="text" placeholder="Email" value={email} onChange={(e)=>setUser3(e.target.value)}/><br/><br/>
//          <input type="text" placeholder="Date Year Of Admission" value={dateyearofadmission} onChange={(e)=>setUser4(e.target.value)} required/><br/><br/>
//          <input type="text" placeholder="Subject Book" value={subjectbook} onChange={(e)=>setUser5(e.target.value)} required/><br/><br/>
//          <input type="text" placeholder="Programme IT/CS" value={programmeitorcs} onChange={(e)=>setUser6(e.target.value)} required/><br/><br/>
//          <button type="submit">Submit</button>
//          </div>
//       </form>

//           <div>
//             {
//               allEntry.map((cvalue)=>{
//                 return(
//                   <>
//                      <h3 className="hhh">Student Name: {cvalue.studentname}</h3>
//                      <h3 className="hhh">Student Gr No: {cvalue.studentgrno}</h3>
//                      <h3 className="hhh">Email: {cvalue.email}</h3>
//                      <h3 className="hhh">Date Year Of Admission: {cvalue.dateyearofadmission}</h3>
//                      <h3 className="hhh">Subject Book: {cvalue.subjectbook}</h3>
//                      <h3 className="hhh">Programme IT/CS: {cvalue.programmeitorcs}</h3>
//                   </>
//                 )
//               })
//             }
//           </div>
//     </>
//   );
// };

// export default App;
// import React from 'react'

// const App = () => {
//   var number = 0;
//   const incre =()=>{
//    var data = number++
//    console.log(data)
//    return data

//   }
//   return (

//     <div>
//       {number}
//       <h1 onClick={incre}>++++</h1>
//     </div>
//   )
// }

// export default App

// import React from "react";
// import { Container,Image } from "react-bootstrap";
// import img from './shoeimg/images.jpg'
// import "./csssss/task.css";
// const App = () => {
//   return (
//     <>
//       <div className="cc">
//         <Container>
//           <Image src={img} className="img-fluid mb-4 " alt=""/>
//           <h2 className="mb-0 mt-4 text-black">
//           World Wide Web
//           </h2>
//           <p className="mt-2 text-black">
//             World Wide Web and it is commonly called the WEB.<br/>
//             These documents are transferred using HTTP requests and can be viewed using software called WEB browser.
//              </p>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default App;

// import React,{useState} from 'react'
// const App = () => {
//   const [val , setVal]=useState(1000)
//    const [last , setLast]= useState()
//   return (
//     <>
//       <div>{val}</div>
//     <button onClick={()=>setVal(val+500)}>500</button>
//     <button onClick={()=>setVal(val+1000)}>1000</button>
//     <button onClick={()=>setVal(val+1500)}>1500</button>

//     <button onClick={()=>setLast(val)}>submit</button>
//     <h1>{last}</h1>

//     </>

//   )
// }

// export default App

// import React, { useState } from "react";
// import img1 from './shoeimg/bmw.jpg';
// import img2 from './shoeimg/lambor.jpg';
// import img3 from './shoeimg/ferrari.webp';

// import { Row, Col, Container, Card } from "react-bootstrap";

// const App = () => {
//   const [val, setVal] = useState(10000);
//   const [last, setLast] = useState();

//   const [val1, setVal1] = useState(20000);
//   const [last1, setLast1] = useState();

//   const [val2, setVal2] = useState(30000);
//   const [last2, setLast2] = useState();

//   return (
//     <>
//       <Container
//         className="mt-4"
//         style={{ position: "relative", left: "45px" }}
//       >
//         <Row className="">
//           <Col sm={4} md={4}>
//             <Card style={{ width: "18rem", marginBottom: "15px" }}>
//               <Card.Img className="img-fluid" src={img1} />
//               <Card.Body>
//                 <Card.Title>
//                   <h4 className="">{val}</h4>
//                 </Card.Title>
//                 <Card.Text>
//                   <div className="d-flex justify-content-between">
//                     <button
//                       onClick={() => setVal(val + 500)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       500
//                     </button>
//                     <button
//                       onClick={() => setVal(val + 1500)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       1000
//                     </button>
//                     <button
//                       onClick={() => setVal(val + 1000)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       1500
//                     </button>
//                   </div>
//                   <div className="d-flex  justify-content-between">
//                   <button
//                     onClick={() => setLast(`Final Auction  ${val}`)}
//                     type="button"
//                     class="mt-2 btn btn-dark"
//                   >
//                     Submit
//                   </button>
//                   <button
//                     onClick={() => setLast(0)}
//                     type="button"
//                     class="mt-2 btn btn-dark"
//                   >
//                     clear
//                   </button>
//                   </div>
//                   <h5 className="mt-3">{last}</h5>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col sm={4} md={4}>
//             <Card style={{ width: "18rem", marginBottom: "15px" }}>
//               <Card.Img className="img-fluid" src={img2} />
//               <Card.Body>
//                 <Card.Title>
//                   <h4 className="">{val1}</h4>
//                 </Card.Title>
//                 <Card.Text>
//                   <div className="d-flex justify-content-between">
//                     <button
//                       onClick={() => setVal1(val1 + 500)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       500
//                     </button>
//                     <button
//                       onClick={() => setVal1(val1 + 1500)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       1000
//                     </button>
//                     <button
//                       onClick={() => setVal1(val1 + 1000)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       1500
//                     </button>
//                   </div>
//                   <div className="d-flex  justify-content-between">
//                   <button
//                     onClick={() => setLast1(`Final Auction  ${val1}`)}
//                     type="button"
//                     class="mt-2 btn btn-dark"
//                   >
//                     Submit
//                   </button>
//                   <button
//                     onClick={() => setLast1(0)}
//                     type="button"
//                     class="mt-2 btn btn-dark"
//                   >
//                     clear
//                   </button>
//                   </div>
//                   <h5 className="mt-3">{last1}</h5>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col sm={4} md={4}>
//             <Card style={{ width: "18rem", marginBottom: "15px" }}>
//               <Card.Img className="img-fluid" src={img3} />
//               <Card.Body>
//                 <Card.Title>
//                   <h4 className="">{val2}</h4>
//                 </Card.Title>
//                 <Card.Text>
//                   <div className="d-flex justify-content-between">
//                     <button
//                       onClick={() => setVal2(val2 + 500)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       500
//                     </button>
//                     <button
//                       onClick={() => setVal2(val2 + 1500)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       1000
//                     </button>
//                     <button
//                       onClick={() => setVal2(val2 + 1000)}
//                       type="button"
//                       class="btn btn-dark"
//                     >
//                       1500
//                     </button>
//                   </div>
//                   <div className="d-flex  justify-content-between">
//                   <button
//                     onClick={() => setLast2(`Final Auction  ${val2}`)}
//                     type="button"
//                     class="mt-2 btn btn-dark"
//                   >
//                     Submit
//                   </button>
//                   <button
//                     onClick={() => setLast2(0)}
//                     type="button"
//                     class="mt-2 btn btn-dark"
//                   >
//                     clear
//                   </button>
//                   </div>
//                   <h5 className="mt-3">{last2}</h5>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default App;
// import React from 'react'

// const App = () => {
//   return (
//     <div style={{paddingLeft:'500px', paddingTop:"200px"}}><h1>Hello World</h1></div>
//   )
// }

// export default App
// import React, { Component } from "react";
// import img2 from "./shoeimg/lambor.jpg";
// import img3 from "./shoeimg/ferrari.webp";
// import Guest from "./Guest";
// import Error from "./Error";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Error>
//           <Guest shoe={img2} />
//           <br />
//         </Error>
//         <Error>
//           <Guest shoe={img3} />
//         </Error>
//         <Error>
//           <Guest shoe="NoImage" />
//         </Error>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react'
// // import img from '../'
// export default class App extends Component {
//   state={
//     mehul:"pro"
//   }

//  handleClick=()=>{
//       this.setState({mehul:"pppp"})
//  }

//   render() {
//     return (
//         <>
// <h1>{this.state.mehul}</h1>
// <button onClick={this.handleClick}>Click</button>
//         </>
//     )
//   }
// }

// import React,{useState} from 'react'

// function App() {
//   const[cur,setCur]= useState(false)
//   const Mm=()=>{
//     return <h2>Mehul</h2>
//   }
//   return (
//     <>
//     <h1>hello</h1>
//     {cur ? <Mm/>:"" }
//     <h1>hello</h1>
//     <button onClick={()=>setCur(!cur)}>Click</button>
//     </>
//   )
// }

// export default App

import React,{useState,useEffect} from "react";
import "./csssss/dark.css";
const App = () => {
  const getMode=()=>{
    return JSON.parse(localStorage.getItem('mode')) || false
  }
  const [dark,setMode]=useState(getMode)

  useEffect(()=>{
    localStorage.setItem('mode',JSON.stringify(dark))
  })
 
  return (
    <>
      <div className="">
        <div className="" style={{ paddingLeft: "45%", paddingTop: "100px" }}>
          <label className="switch">
            <input type="checkbox" 
            onChange={()=>setMode(!dark)}
            checked={dark}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className={dark ? 'dark-mode':''}>
        <pre className='d-flex justify-content-center mt-4' style={{height:'600px'}} >
          lorem jdlorem jdh wgrergerlorem jdh wgrergerlorem jdh wgrergerlore <br/>

          jdh wgrergerlorem jdh wgrergerlorem jdh wgrergerlorem jdh<br/>

          wgrergerlorem jdh wgrergerlorem jdh wgrergerlorem jdh wgrergerlorem<br/>

          jdh wgrergerh wgrerger<br/>
        </pre>
      </div>
    </>
  );
};
export default App;
