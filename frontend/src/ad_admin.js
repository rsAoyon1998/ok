import axios from "axios"
import React, { useState } from "react"
import "./App.css"



function form() {

	const [ name, setName ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ Type, setType ] = useState("")
	const [ pass, setPass ] = useState("")
	 
	  async function postName(e) {
		  e.preventDefault()
		  try {
			  await axios.post("http://localhost:5000/post_ad", {
				name,email,Type,pass
			  }).then(res=>{
				if(res.data=="ok"){
				// alert("Successfully Registered")
				window.location.href = './log_in';
				}
			  })
		  } catch (error) {
			  console.error(error)
		  }
	  }

  return (
 <header>

    








      <form className="box">
     
       
      <h3>Sign Up</h3>
           
</form>


       
        <form className="box" onSubmit={postName}>
                <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required/>
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
		<input type="text" value={Type} placeholder="Type" onChange={(e) => setType(e.target.value)} required/>
		<input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} required/>
                {/* <button type="submit">Send Name</button> */}

				<input type="submit" name="name" placeholder="Message"></input>
            </form>
            
    
    




    </header>
  );
}

export default form;