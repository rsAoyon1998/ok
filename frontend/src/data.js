import axios from "axios"
import React, { useState } from "react"
import "./App.css"
import ImageDisplay from './img_url';
import { useParams } from 'react-router'
import { Link } from "react-router-dom";




function form() {
   
    const [data, setData] = useState([]);
   
   
    const imageUrl='./apple.png';

    
    // useEffect(() => {
    //   axios.get('http://localhost:5001/data')
    //     .then(res => setData(res.data))
    //     .catch(err => console.error(err));
    // }, []);

    axios.get("http://localhost:5000/data", {
      
      }).then(res => setData(res.data))
      .catch(err => console.error(err));
    

    
        axios.get('http://localhost:5000/data').then(res => {
            setData(res.data);
        })
      
        

  return (
    <div>
    <h1>Data List</h1>
    {/* <img src="Fri Apr 28 2023 03/12/49 GMT+0600 (Bangladesh Standard Time).jpg" alt="react logo" style={{ width: '400px', }}/> */}
    {/* <ImageDisplay imageUrl={imageUrl} /> */}
    
    {/* <img src={require("./ThuMay04202309:34:17GMT+0600(BangladeshStandardTime).jpg")} alt="horse" /> */}
    <h1>
        {data.map(item => (
          <li key={item._id}>
          
           <img src={require('./img/'+item.image)} alt="horse" style={{ height: "200px", width: "300px" }} />
           <h4>{item.name}</h4>
           <h4>Description:{item.des}</h4>
           <h4>Price:{item.price}</h4>
          </li>


          
        ))}
      </h1>




  </div>
);
}

export default form;