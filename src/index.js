// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App.js";

// import Student from "./Student";




// import Student from "./Student.js";
// below code is not html it is jsx code babel converte into rect code
// let el1 = React.createElement("h1",null,"hello mehul")
// let el = <h1>Hello Mehul</h1>
// ReactDom.render(<Student name="react" />,document.getElementById("root"));


// ReactDom.render(<App />,document.getElementById("root"));
// -------------------------

// -----------------
// import ReactDom from "react-dom";
// import el from "./App";
// // rendering Element
// ReactDom.render(el,document.getElementById("root"));

// Props------------
// When react sees an element representimg a user defined component , it passes jsx attributes to this component as a single object , we call this object "props"
// import React from "react";
// import ReactDom from "react-dom";
// import Student from "./Student.js";

// ReactDom.render(<Student name="mehul" roll={10+4}/>,document.getElementById("root"));



// children in js--------------------
// import React from "react";
// import RectDom from "react-dom";
// import Student from "./Student.js";


// RectDom.render(<Student>React</Student>,document.getElementById("root"));


// state similer to props but states can update and private and only use in  class 



// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import Student from "./Student"

// ReactDOM.render(<Student roll = "14" />, document.getElementById("root"));



// react Event handling--------class component


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Student from "./Student";


// ReactDOM.render(<Student roll = "14"/>,document.getElementById("root"));



// -----event---using function
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Student from "./Student"


// ReactDOM.render(<Student roll="14"/>,document.getElementById("root"));


// Mounting in react js
// import React from 'react';
// import Reactdom from 'react-dom';
// import App from './App.js';

// Reactdom.render(<App name="props" />, document.getElementById("root"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Student from "./Student";

// ReactDOM.render(<Student />,document.getElementById("root"));



// // unmountiing
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";
// import Student from "./Student";

// ReactDOM.render(<App />,document.getElementById("root"));
// ReactDOM.render(<Student />,document.getElementById("stu"));

// ReactDOM.unmountComponentAtNode(document.getElementById("root"));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";

// ReactDOM.render(<App /> , document.getElementById("root"));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App.js";

// ReactDOM.render(<App />, document.getElementById("root"));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App.js";

// ReactDOM.render(<App />, document.getElementById("root"));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App.js";

// ReactDOM.render(<App consumer={false}/>,document.getElementById("root"));

// import React from 'react';

// import ReactDOM from 'react-dom';
// import App from "./App";
// ReactDOM.render(<App primeMember = {true} /> , document.getElementById("root"));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";


// ReactDOM.render(<App /> , document.getElementById("root"));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";

// const arrValues = [10,20,30,40];
// ReactDOM.render(<App number={arrValues}/> , document.getElementById("root"));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";

// ReactDOM.render(<App /> , document.getElementById("root"));


// css in react




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";

// ReactDOM.render(<App /> , document.getElementById("root"));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// ReactDOM.render(<App /> , document.getElementById("root"));


import React from 'react'
import ReactDOM from 'react-dom'
// import './shoping.css'
import App from "./App"

// import App,{shoppingProducts} from "./App"
import store from "./store"
import {Provider} from "react-redux"
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter> 
    <App/>
    {/* <App items={shoppingProducts}/> */}
        {/* <App   python="Intermidiate"/> */}
        {/* <App python="Beginner"/>
        <App python="Advance"/> */}
    </BrowserRouter>
        </Provider>
    
    </React.StrictMode>    
,document.getElementById("root"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";

// ReactDOM.render(<App /> , document.getElementById("root"))

































