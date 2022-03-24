import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Pokemon = () => {
 const [num , setNum] = useState();
 const [name , setName] = useState();
 const [move , setMove] = useState();

       useEffect(()=>{
           try{
            async function getData() {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                console.log(res.data.name)

                setName(res.data.name);
                setMove(res.data.moves.length);
            }  
            getData();
           }catch(e){
              console.log(e)
           }
              
           });
    return (
        <div>
            <h1>Use Choose <span style={{color:"red"}}>{num}</span> value</h1>
            <h1>My Name is <span style={{color:"red"}}>{name}</span> value</h1>
            <h1>I have <span style={{color:"red"}}>{move}</span> value</h1>




            <select defaultValue={num} onChange={(e)=>{
                     setNum(e.target.value);
            }}>
                <option defaultValue="1">1</option>
                <option defaultValue="25">25</option>
                <option defaultValue="3">3</option>
                <option defaultValue="4">4</option>
                <option defaultValue="5">5</option>
            </select>
        </div>
    )
}

export default Pokemon
