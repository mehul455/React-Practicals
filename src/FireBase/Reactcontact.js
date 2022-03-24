import React,{useState} from 'react'
const Reactcontact = () => {
    const[user , setUser] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        message:"",
    });
let name,value;
    const getUserData=(e)=>{
           name = e.target.name;
           value = e.target.value;
           setUser({...user, [name]: value});
    }
    const postData =async(e)=>{
        e.preventDefault();
        const {name,email,phone,address,message } = user
       const res = await fetch("https://reactform-694a2-default-rtdb.firebaseio.com/formdata.json"
       ,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({ 
                name,
                email,
                phone,
                address,
                message,
            }),
       }
      );
      if(res){
        setUser({
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
        });
        alert("Data stored")
      }
    };
    return (
        <>
            <form method="POST">
                <div >
               <input name="name" value={user.name} onChange={getUserData} placeholder='name'   style={{width:"350px"}} type="text"/><br/><br/><br/>
               <input name="email" value={user.email} onChange={getUserData} placeholder='email' style={{width:"350px"}} type="email"/><br/><br/><br/>
               <input name="phone" value={user.phone} onChange={getUserData} placeholder='phone'  style={{width:"350px"}} type="text"/><br/><br/><br/>
               <input name="address" value={user.address} onChange={getUserData} placeholder='address'  style={{width:"350px"}} type="text"/><br/><br/><br/>
               {/* <textarea name="message" value={user.message}  placeholder='message' style={{width:"350px"}} /><br/><br/> */}
               <textarea name="message" value={user.message}  placeholder='message' style={{width:"350px"}} onChange={getUserData}/><br/><br/>

               <button  style={{width:"350px"}} onClick={postData}>submite</button>
               </div>
               

            </form>
        </>
    )
}

export default Reactcontact
