import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css"

//It will return true if not a number else false

function form() {

	
	

    const navigate= useNavigate()
    let {id} = useParams();

var abc="id";
    const [ name, setName ] = useState(id)
	const [ email, setEmail ] = useState("")
	var [ phone, setPhone ] = useState("")
	const [ pass, setPass ] = useState("")
    const [data, setData] = useState([]);
    const [ check_pass, setCheck_pass ] = useState("")
// setName(id)
//     useEffect( ()=>

// {
//   if(!localStorage.getItem(id)){

//     navigate('/log_in')
//   }
// }
// ,[])
// setPhone('12121212');
	  async function postName(e) {
		
		
		  e.preventDefault()
		  if(isNaN(phone)){
alert('Incorrect Phone Number')

		}
		else if(pass.length < 8){
			alert('Password should be at least 8 characters')
		}
    else if(pass != check_pass){
			alert('Incorrect Password')
		}
		else{
		  try {
			
			  await axios.post("http://localhost:5000/post_update", {
				name,email,phone,pass,id
			  }).then(res=>{
				if(res.data=="ok"){
				alert("Successfully Updated")
				// window.location.href = './log_in';
				}
			  })
		  } catch (error) {
			  console.error(error)
		  }
	  }
	}




    axios.get("http://localhost:5000/know_user_info/"+id, {
      
}).then(res => setData(res.data))
.catch(err => console.error(err));



  axios.get('http://localhost:5000/know_user_info/'+id).then(res => {
      setData(res.data);

      setEmail(data[0]['email'])
      setPhone(data[0]['phone'])
      setPass(data[0]['pass'])      


// let price = jsonData["_id"];





  })

  async function abc_xyz(e){
    setEmail('xyz@gmail.com')
    return email
  }


  return (
 <header>

    








      <form className="box">
     
       
      <h3>Update Profile</h3>
           
</form>

{data.map(item => (

       
        <form className="box" onSubmit={postName} key={item._id}  > 
                <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required/>
				
 
        <input type="email" value={email} placeholder='Loading...' onChange={(e) => setEmail(e.target.value)} required/>



        



		<input type="text" value={phone} placeholder='Loading...' onChange={(e) => setPhone(e.target.value)} required/>
		<input type="password" value={check_pass} placeholder="Password" onChange={(e) => setCheck_pass(e.target.value)} required/>
                {/* <button type="submit">Send Name</button> */}
               
				<input type="submit" name="name" placeholder="Message"></input>
            </form>
))}       





    </header>
  );
}

export default form;