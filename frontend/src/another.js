import axios from "axios"
import React, { useState } from "react"
import "./App.css"



function form() {
	const [data, setData] = useState([]);


	const [ name, setName ] = useState("how are you")
	const [ email, setEmail ] = useState("I am Fine")
	const [ phone, setPhone ] = useState("What abour You?")
	const [ pass, setPass ] = useState("")
	 
	  async function postName(e) {
		  e.preventDefault()
		  try {
			  await axios.post("http://localhost:5001/check", {
				name,email,phone
                // ,email
                // ,phone
                // ,pass
			  })
		  } catch (error) {
			  console.error(error)
		  }
	  }
	  try {
		axios.get('http://localhost:5000/r_data').then(res => {
			setData(res.data);
		})}catch (error) {
		  console.error(error)
		}
  return (


    
<div>




<head>
	<title>HTML Table Example</title>
</head>
<body>
	<table border="2" align="center">
		<thead>
			<tr>
				<th>From</th>
				<th>To</th>
				<th>Date </th>
				<th>Hr </th>
				<th>Min</th>
				<th>Car</th>
				<th>Input</th>
			</tr>
		</thead>
		<tbody>
			
{data.map(item => (
			<tr key={item._id}>
				<td>{item.From}</td>
				<td>{item.To}</td>
				<td>{item.Date}</td>
				<td>{item.Hr}</td>
				<td>{item.Min}</td>
				<td>{item.Car}</td>
				<form>
				<td><input type='text' placeholder="Write"/></td></form>
			</tr>
			))}
		</tbody>
	</table>
</body>




  </div>
  );
}

export default form;

