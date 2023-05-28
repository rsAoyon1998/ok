import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css"


function form() {

  const [data, setData] = useState([]);
  const [name, setName] = useState('');


  // const [ name, setName ] = useState("")
const navigate= useNavigate()
// let {id} = useParams();




  
  
  try {
    axios.get("http://localhost:5000/user_info", {
    
    }).then(res => setData(res.data))
    .catch(err => console.error(err));
  } catch (error) {
    console.error(error)
  }


  axios.get('http://localhost:5000/user_info').then(res => {
      setData(res.data);
  })





















  return (
 <header>

    







<div>
    <h1>Data List</h1>
    {/* <img src="Fri Apr 28 2023 03/12/49 GMT+0600 (Bangladesh Standard Time).jpg" alt="react logo" style={{ width: '400px', }}/> */}
    {/* <ImageDisplay imageUrl={imageUrl} /> */}
    
    {/* <img src={require("./ThuMay04202309:34:17GMT+0600(BangladeshStandardTime).jpg")} alt="horse" /> */}
    <h1>
        {data.map(item => (
          <li key={item._id}>
          
           
           <h4>{item.name}</h4>
           <h4>Email:{item.email}</h4>
           <h4>Phone:{item.phone}</h4>
          </li>


          
        ))}
      </h1>




  </div>

       
       
    
    




    </header>
  );
}

export default form;



