import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Dropdown} from 'react-bootstrap'


import { useNavigate,Link } from 'react-router-dom'
const Dropdownn = () => {
    const h= useNavigate();
   
    return (
        <div>
            <Link to="/action">rgye</Link>
            <Dropdown   style={{marginLeft:"30px"}}>
               <Dropdown.Toggle  variant="danger" id="dropdown-basic">
                 Movies Type
               </Dropdown.Toggle>

               <Dropdown.Menu  align="right">
                 <Dropdown.Item  onClick={()=>h("/action")} >Action</Dropdown.Item>
                 <Dropdown.Item   href="#/action-2">Horror</Dropdown.Item>
                 <Dropdown.Item  href="#/action-3">Romance</Dropdown.Item>
               </Dropdown.Menu>
       </Dropdown>
        </div>
    )
}

export default Dropdownn
// The reason is if you useState it rerenders the view. Variables by themselves only change bits in memory and the state of your app can get out of sync with the view.

// Compare this examples:

// function Foo() {
//     const [a, setA] = useState(0);
//     return <div onClick={() => setA(a + 1)}>{a}</div>;
// }

// function Foo() {
//     let a = 0;
//     return <div onClick={() => a + 1}>{a}</div>;
// }
// In both cases a changes on click but only when you use useState the view correctly shows a's current value.