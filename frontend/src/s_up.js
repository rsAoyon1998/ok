import axios from "axios"
import React, { useState } from "react"
import "./App.css"

//It will return true if not a number else false

function form() {

	const [ name, setName ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ phone, setPhone ] = useState("")
	const [ pass, setPass ] = useState("")
	var abc=''
	var xyz=''
	 if(name=='ok'){
		 abc='name'
	 }
	  async function postName(e) {
		
		
		  e.preventDefault()
		  if(isNaN(phone)){
alert('Incorrect Phone Number')

		}
		else if(pass.length< 8){
			alert('Password should be at least 8 characters')
		}
		else{
		  try {
			
			  await axios.post("http://localhost:5000/post_name", {
				name,email,phone,pass
			  }).then(res=>{
				if(res.data=="ok"){
				// alert("Successfully Registered")
				window.location.href = './log_in'
				// window.location.href = './log_in';
				}
			  })
		  } catch (error) {
			  console.error(error)
		  }
	  }
	}


	const log_in = () => {
    
		window.location.href = '/log_in';
	   
	  }
	
	  
	
	  return (
		<header>
		<button onClick={() => log_in()}>Log In</button>







      <form className="box">
     
       
      <h3>Sign Up</h3>
           
</form>


       
        <form className="box" onSubmit={postName}>
                <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required/>
				<h1>{xyz}</h1>
        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
		<input type="text" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required/>
		<input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} required/>
                {/* <button type="submit">Send Name</button> */}

				<input type="submit" name="name" placeholder="Message"></input>
            </form>
            
    
    




    </header>
  );
}

export default form;