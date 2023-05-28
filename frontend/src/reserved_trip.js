import axios from "axios"
import React, { useState } from "react"
// import "./App.css"

import { useParams } from 'react-router'
import { Link } from "react-router-dom";
function form() {

  const [data, setData] = useState([]);
   
  const [name, setName] = useState([]);



  async function postName(e) {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/post_pol", {
      name
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



  const imageUrl='./apple.png';

  
  // useEffect(() => {
  //   axios.get('http://localhost:5001/data')
  //     .then(res => setData(res.data))
  //     .catch(err => console.error(err));
  // }, []);

  axios.get("http://localhost:5000/r_data", {
    
    }).then(res => setData(res.data))
    .catch(err => console.error(err));
  

  
      axios.get('http://localhost:5000/r_data').then(res => {
          setData(res.data);
      })
  return (
 

    





<div>

<h1>Reservation List</h1>
{data.map(item => (
  <li key={item._id}>

      <form onSubmit={postName}>
     <input type='text' value={item.From} onChange={(e) => setName(e.target.value)} ></input>
     <input type='text' value={item.To} onChange={(e) => setName(e.target.value)} ></input>
     <input type='text' value={item.Date} onChange={(e) => setName(e.target.value)} ></input>
     <input type='text' value={item.Hr} onChange={(e) => setName(e.target.value)} ></input>
     <input type='text' value={item.Min} onChange={(e) => setName(e.target.value)} ></input>
     <input type='text' value={item.Car} onChange={(e) => setName(e.target.value)} ></input>
     <input type='text' value="" placeholder="Set Driver" onChange={(e) => setName(e.target.value)} ></input>
     <input type='text' value="" placeholder="Set Percentage" onChange={(e) => setName(e.target.value)} ></input>
     <button>Nice</button>

     
    {/* <input type="text"  placeholder={ok} required/> */}
    
</form>

</li>
))}


</div>
       
       
    
     




   
  );
}

export default form;



