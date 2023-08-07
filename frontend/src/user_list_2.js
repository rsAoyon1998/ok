import axios from "axios"
import React, { useState } from "react"
import "./App.css"

import { useParams } from 'react-router'

function form() {
  

  if  (localStorage.getItem('user') === null)
  {
    window.location.href = '/log_in/';
  
  }

	let {id} = useParams();


    var nameArr = id.split(',');

    var abc=nameArr[0]



const shoot = (a) => {
    axios.post("http://localhost:5000/delete", {
        a
      })

   
  }

  const shoot_2 = (a) => {
   
    window.location.href = '/car_update/'+ a;

   
  }


  



  const main_menu = () => {
    
    window.location.href = '/search/';
   
  }

  


 


  return (
//  <header>

    
<div>

<button onClick={() => main_menu()}>Main Menu</button>

<h1>

       {nameArr[0]}
      </h1>
      {/* <h1>

       {nameArr[1]}
      </h1> */}
      <p>

       {nameArr[2]}
      </p>
      <img src={require('./img/'+nameArr[3])} alt="horse" style={{ height: "200px", width: "300px" }} />
      

      
      <p></p>
      <button onClick={() => shoot(nameArr[4])}>Delete</button>
  

      <button onClick={() => shoot_2(nameArr)}>Update</button>
    




       
       
    
     




    
    </div>
  );
}

export default form;