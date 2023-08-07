import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css"

//It will return true if not a number else false

function form() {
  if  (localStorage.getItem('user') === null)
  {
    window.location.href = '/log_in/';
  
  }


	var user= localStorage.getItem('user');
	
    let {id} = useParams();

    var a=id

    const [ name, setName ] = useState(id)
	


    const shoot_2 = () => {
      
      window.location.href = '/search/'
    }
   

	 
    const shoot = () => {
        axios.post("http://localhost:5000/update_collection", {
          user,name,a
          })
         
        alert("Updated");
        // // window.location.href = '/search/'
      }

  return (
 <header>

    








      <form className="box">
     
       
      <h3>Update Profile</h3>

      <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required/>
				
 
               
        <button onClick={() => shoot()}>Update</button>
        
           
</form>



<button onClick={() => shoot_2()}>Main Menu</button>
      
     





    </header>
  );
}

export default form;