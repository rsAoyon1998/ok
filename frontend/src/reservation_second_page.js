import axios from "axios"
import React, { useState } from "react"
import "./App.css"

import { useParams } from 'react-router'
import { Link } from "react-router-dom";
function form() {
  const [data, setData] = useState([]);
  // const [ pl, setPl ] = useState("")
  // const [ dl, setDl ] = useState("")
  // const [ date, setDate ] = useState("")
  // const [ hr, setHr ] = useState("")
  // const [ min, setMin ] = useState("")
  // const [ car, setCar ] = useState("")
	let {id} = useParams();


    var car="";
var nameArr = id.split(',');


  const [ok, setOk] = useState('');

  
  function handleClick(e) {
    nameArr.push("Car 1");

    // setPl(nameArr[0])
    // setDl(nameArr[1])
    // setDate(nameArr[2])
    // setHr(nameArr[3])
    // setMin(nameArr[4])
    // setCar(nameArr[5])

    // setOk('New text');
    
     axios.post("http://localhost:5001/check", {
      // pl,dl,date,hr,min,car
      })
    
    // alert('You Have Registered')
  }

  async function postName(e,c) {
    e.preventDefault()
    nameArr.push("Car 1");
    // setPl(nameArr[0])
    // setDl(nameArr[1])
    
    var pl=nameArr[0];
    var dl=nameArr[1];
    var date=nameArr[2];
    var hr=nameArr[3];
    var min=nameArr[4];
    // var car=nameArr[5];
    var car = c;
    
    // setPl(nameArr[0])
    // setDl(nameArr[1])
    // setDate(nameArr[0])
    // setHr(nameArr[1])
    // setMin(nameArr[0])
    try {
      await axios.post("http://localhost:5000/check", {
      pl,dl,date,hr,min,car
      })
    } catch (error) {
      console.error(error)
    }
  }

  function waveHello(c) {
    // alert('wave');
    // setCar(car)
    car=c;
  }
  axios.get("http://localhost:5000/data", {
      
}).then(res => setData(res.data))
.catch(err => console.error(err));


try {
  axios.get('http://localhost:5000/data').then(res => {
      setData(res.data);
  })}catch (error) {
    console.error(error)
  }
  return (
//  <header>

    
<div>


<h1>
        {data.map(item => (
          <li key={item._id}>
          
           <img src={require('./img/'+item.image)} alt="horse" style={{ height: "200px", width: "300px" }} />
           <h4 onClick={(e) => {
          postName(e,item._id);
          // waveHello(e,"Car 1");
        }}>
           
           {item.name}</h4>
           <h4>Description:{item.des}</h4>
           <h4>Price:{item.price}</h4>
          </li>


          
        ))}
      </h1>




    




       
       
    
     




    
    </div>
  );
}

export default form;