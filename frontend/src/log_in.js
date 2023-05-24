import axios from "axios"
import React, { useState } from "react"
import "./App.css"


function form() {

	const [ name, setName ] = useState("")
	
	const [ pass, setPass ] = useState("")
	  // const [ home, setHome ] = useState("")
  
	  // useEffect(() => {
	  //  axios.get("http://localhost:4000/home").then(function(response) {
	  //      setHome(response.data)
	  //  })
	  // }, [])
  
	  async function postName(e) {
		  e.preventDefault()
		  try {
			  await axios.post("http://localhost:5000/log_in", {
				name,pass
			  })
			  .then(res=>{
				if(res.data=="log_in"){
				// alert("Successfully Registered")
				window.location.href = './hompage';
				}
				
				if(res.data=="not_log_in"){
					alert("Incorrect User Name or Password")
				}
			  })
		  } catch (error) {
			  console.error(error)
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