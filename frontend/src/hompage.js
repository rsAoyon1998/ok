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
let {id} = useParams();



async function Info(e,c) {
  e.preventDefault()

  var car = c;
  
  
  try {
    await axios.get("http://localhost:5000/know_user_info/"+id, {
    
    }).then(res => setData(res.data))
    .catch(err => console.error(err));
  } catch (error) {
    console.error(error)
  }


  axios.get('http://localhost:5000/know_user_info/'+id).then(res => {
      setData(res.data);
  })
}




async function res_Info(e,c) {
  e.preventDefault()

  var car = c;
  
  
  try {
    await axios.get("http://localhost:5000/know_user_reservation/"+id, {
    
    }).then(res => setData(res.data))
    .catch(err => console.error(err));
  } catch (error) {
    console.error(error)
  }


  axios.get('http://localhost:5000/know_user_reservation/'+id).then(res => {
      setData(res.data);
  })
}



async function Edit(e,c) {
  e.preventDefault()

  var car = c;
  
  
 alert('Edit')
}











function Abc(id){

  try {
     axios.get("http://localhost:5000/know_user_info/"+id, {
    
    }).then(res => setData(res.data))
    .catch(err => console.error(err));
    
  } catch (error) {
    console.error(error)
  }


  axios.get('http://localhost:5000/know_user_info/'+id).then(res => {
      setData(res.data);
      
     
  })



  // window.location.href = '/profile_update/'+id;

}

useEffect( ()=>

{
  if(!localStorage.getItem('token')){

    navigate('/log_in')
  }
}
,[])
  return (
 <header>

    








      <form className="box">
     
       
      <h3>Welcome to Home Page {id}</h3>
           <h3></h3>
           <h3></h3>
           {/* <h3 onClick={()=>Info(id)}>All Reservation List</h3> */}
           

         


           <h3 onClick={(e)=> res_Info(e,id)}>All Reservation List</h3>

           <h1>
        {data.map(item => (
          <li key={item._id}>
          
          
           <h3>{item.name}</h3>
        <h3>{name}</h3>
           <h3>{item.email}</h3>
           <h3>{item.phone}</h3>
          </li>


          
        ))}
      </h1>

           {/* <h3 onClick={()=>
           Abc(id)
           }> Update</h3> */}



           <h3></h3>
           <h3></h3>
           <h3 onClick={(e)=>
           Info(e,id)
           }><a href="">Information</a></h3>

<h1>
        {data.map(item => (
          <li key={item._id}>
          
          
           <h3>{item.name}</h3>
        <h3>{name}</h3>
           <h3>{item.email}</h3>
           <h3>{item.phone}</h3>
          </li>


          
        ))}
      </h1>
</form>


       
       
    
    




    </header>
  );
}

export default form;



