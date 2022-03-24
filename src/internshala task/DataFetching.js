// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function DataFetching() {
// 	const [post, setPost] = useState({})
// 	const [id, setId] = useState(1)
// 	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

// 	useEffect(() => {
// 		axios
// 			.get(`https://jsonplaceholder.typicode.com/users/${id}`)
// 			.then(res => {
//         console.log(res)
//         setPost(res.data)
// 			})
// 			.catch(err => {
// 				console.log(err)
// 			})
// 	}, [idFromButtonClick])

// 	const handleClick = () => {
// 		setIdFromButtonClick(id)
// 	}

// 	return (
// 		<div>
// 			<input type="text" value={id} onChange={e => setId(e.target.value)} />
// 			<button type="button" onClick={handleClick}>Fetch Post</button>
// 			<div>{post.name}</div>
// 			{/* <ul>
// 				{posts.map(post => (
//           <li key={post.id}>{post.title}</li>
// 				))}
// 			</ul> */}
// 		</div>
// 	)
// }

// export default DataFetching

// import React,{ useState, useEffect} from 'react';
// import axios from 'axios'

// const DataFetching = () => {
//     const url="https://jsonplaceholder.typicode.com/posts";
// const[data,setData]= useState({ 
//   text:"",
//   body: "",
//   userid:""
// })

// const submit=(e)=>{
    
// e.preventDefault()

// axios(url,{
//     text:data.text,
//     body:data.body,
//     userid:parseInt(data.userid)
// })
// .then(res=>{
//     console.log(res.data,"error");
// })


// }



// const handleClick=(e)=>{
// const newdata = {...data}
// newdata[e.target.id]=e.target.value;
// setData(newdata)
// console.log(newdata);

// }
//   return(
//       <>
//              <form onSubmit={(e)=>submit(e)}>
//                  <input onChange={(e)=>handleClick(e)} id="text" value={data.text} placeholder="text" type="text"/>
//                  <input onChange={(e)=>handleClick(e)} id="body" value={data.body} placeholder="body" type="text"/> 
//                  <input onChange={(e)=>handleClick(e)} id="userid" value={data.userid} placeholder="userid" type="text"/> 
//                    <button >Submit</button>
//              </form>
//       </>
//   )
// };

// export default DataFetching;
// import './App.css';
import React, { useState } from 'react'
function DataFetching() {
 const [text,setText]=useState("");
 const [body,setBody]=useState("");
 const [userid,setUser]=useState("");
const saveData=(e)=>{
  e.preventDefault()
  let data={text,body,userid}

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div style={{position:"relative",left:"40%",top:"100px"}}>
    <form onSubmit={saveData}>
      <h1>Tast</h1>
      <input type="text" name="text" value={text} onChange={(e)=>{setText(e.target.value)}}  required/> <br /> <br />
      <input type="text" name="body"  value={body} onChange={(e)=>{setBody(e.target.value)}} required/> <br /> <br />
      <input type="text" name="userid"  value={userid} onChange={(e)=>{setUser(e.target.value)}} required/> <br /> <br />
      <button  >Save New User</button>
    </form>
    </div>
  );
}
export default DataFetching;