import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css"


function form() {

  if  (localStorage.getItem('user') === null)
  {
    window.location.href = '/log_in/';
  
  }

  const [data, setData] = useState([]);

  const [data_2, setData_2] = useState([]);

  const [name, setName] = useState('');

  const [pn, setPn] = useState('1');
  
  var user= localStorage.getItem('user');
  var total=0;
var a=user;
  try {
    axios.get("http://localhost:5000/user_info_2/"+user, {
    user
    }).then(res => setData_2(res.data))
    .catch(err => console.error(err));
  } catch (error) {
    console.error(error)
  }
  









total=data_2.length;

  if(name.length==0){
  
  try {
    axios.get("http://localhost:5000/user_info/"+name.length+','+pn+','+user, {
    
    }).then(res => setData(res.data))
    .catch(err => console.error(err));
  } catch (error) {
    console.error(error)
  }
  


}
  else
  {


    try {
      axios.get("http://localhost:5000/user_info_s/"+name+','+user, {
      
      }).then(res => setData(res.data))
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error)
    }




  }


  if (total%2!=0){
  
  var page=parseInt(total/2)+1;

  }
  else if(total==1){
    page=1;
  }
  else{
    page=parseInt(total/2);
  }




  

  

 
  const shoot_2 = () => {
    
        window.location.href = '/car_upload/';
    
       
      }



  


  const shoot = (a,b,c,d,e) => {
const abc=[a,b,c,d,e]
    window.location.href = '/user_list_2/'+ abc;

 
  }


const abc=(a)=>{

setPn(a+1)
}


  const for_loop = []
  for (let i=1;i<=page;i++) {
    for_loop.push(<button><big className="pag_button">{"Page "+i}</big></button>);
  };










  const main_menu = () => {
    
    window.location.href = '/search/';
   
  }

  

  return (
    <header>
    <button onClick={() => main_menu()}>Main Menu</button>







<div className="padding_class">



      
<h1><button onClick={() => shoot_2()}>Create New Article</button></h1>



<input type="text" value={name} placeholder="Search by title here" onChange={(e) => setName(e.target.value)} required/>




    <h1><u>Data List</u></h1>
    <h1>{a}</h1>
    <h1>*****************</h1>

 
    <h1>
        {data.map(item => (
          <li key={item._id}>
          
           
           {item.name}
          
           
<p></p>

           <button onClick={() => shoot(item.name,item.des,item.price,item.image,item.u_id)}>View Details</button>




          </li>


          
        ))}
      </h1>

      <h1>*****************</h1>

      <h1>
                {for_loop.map(function(name, index){
                    return <button onClick={() => abc(index)} key={ index }>{name}</button>;
                  })}
            </h1>

  </div>

       

    
    




    </header>
  );
}

export default form;



