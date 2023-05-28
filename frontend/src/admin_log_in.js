import axios from "axios"
import React, { useState } from "react"
import "./App.css"


function form() {

	const [ name, setName ] = useState("")
	
	const [ pass, setPass ] = useState("")
	  
  
	  async function postName(e) {
		  e.preventDefault()
		 if(name=='admin' && pass=='admin'){
            alert('ok')
         }
         else{
            alert('Incorrect User Name or Password')
         }
	  }

  return (
 <header>

    








      <form className="box">
     
       
      <h3>Log In Now</h3>
           
</form>


       
        <form className="box" onSubmit={postName}>
                <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required/>
     
		<input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} required/>
                {/* <button type="submit">Send Name</button> */}

				<input type="submit" name="name" placeholder="Message"></input>
            </form>
            
    
    




    </header>
  );
}

export default form;