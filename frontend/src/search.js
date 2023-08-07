import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css"


function form() {

  

 
  // var q='ab';
  if  (localStorage.getItem('user') === null)
  {
    window.location.href = '/log_in/';
  
  }

  const [data, setData] = useState([]);

  const [data_2, setData_2] = useState([]);

  const [data_3 , setData_3] = useState([]);

  const [name, setName] = useState('');
  


  var abc= localStorage.getItem('user');

  var user= localStorage.getItem('user');
  if(name.length==0){
  
  try {
    axios.get("http://localhost:5000/user_info/"+"name.length"+',0,'+abc, {
    
    }).then(res => setData(res.data))
    .catch(err => console.error(err));
  } catch (error) {
    console.error(error)
  }
  


}
  else
  {


    try {
      axios.get("http://localhost:5000/user_info/"+name, {
      
      }).then(res => setData(res.data))
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error)
    }




  }

  // axios.get('http://localhost:5000/user_info').then(res => {
  //     setData(res.data);
  // })




  
  // const unique = [...new Set(data.map((item) => item.name))];
  // console.log(unique);
 
  // setData(unique)

  let uniqueObjArray = [
    ...new Map(data.map((item) => [item["des"], item])).values(),
];

  


 


  const [checkedList, setCheckedList] = useState([]);

  const handleSelect = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
var abc=checkedList[0]
    if (isChecked) {
      //Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }

    





  };

  


  const d_c = (a) => {
    
    try {
			
      axios.post("http://localhost:5000/delete_collection", {
      user,a
      })
    } catch (error) {
      console.error(error)
    }

   
  }



  const log_out = () => {
    
    localStorage.clear();
    window.location.href = '/log_in/';
   
  }




  const shoot = () => {
    const string = checkedList.toString()
const ans_array = string.split(',')

    try {

      
      axios.get("http://localhost:5000/filter_check_box/"+ans_array, {
        
      }).then(res => setData_2(res.data))
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error)
    }
      }


      const shoot_2 = () => {

        window.location.href = '/user_list/';







      }



      const u_c = (a) => {
   
        window.location.href = '/user_list_3/'+ a;
    
       
      }



      const shoot_3 = (a,b,c,d) => {
        const abc=[a,b,c,d]
            window.location.href = '/user_list_2/'+ abc;
        
         
          }



  return (
 <header>

    








<div className="padding_class">

<button onClick={() => log_out()}>Log Out</button>
<u>
<h1>{abc}</h1>
<h1>Category</h1> </u> 
<p></p>

      <h1>
        {uniqueObjArray.map(item => (
          <li key={item.name}>
          
          <input type="checkbox" value={item.des} onChange={handleSelect}/> {item.des}
           
           
   
           
          <button onClick={() => u_c(item.des)}>Update</button>
<button onClick={() => d_c(item.des)}>Delete</button>



          </li>


          
        ))}
        
        <button onClick={() => shoot()}><big>Click here to filter</big></button>

        <button onClick={() => shoot_2()}>Click here See all the notes</button>
      </h1>






      <h1>
        {data_2.map(item => (
          <li key={item._id}>
          
           
           <h4 >{item.name}</h4>
          
           


           <button onClick={() => shoot_3(item.name,item.des,item.price,item.image)}>View Details</button>



          </li>


          
        ))}
      </h1>





  </div>

       
       
    
    




    </header>
  );
}

export default form;



