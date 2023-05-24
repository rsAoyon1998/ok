// import { useState } from 'react';

// function App() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [date, setDate] = useState('');

//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     var id = ["Paris", "France"];
    
//     // setMessage(`Hello ${firstName} ${lastName} ${date}!`);
//     window.location.href = '/abc/'+ firstName+','+lastName;
//     setFirstName('');
//     setLastName('');
//     setDate('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="firstName"
//         name="firstName"
//         value={firstName}
//         placeholder="From"
//         onChange={(event) =>
//           setFirstName(event.target.value)
//         }
//       />

//       <br />
//       <br />

//       <input
//         type="text"
//         id="lastName"
//         name="lastName"
//         value={lastName}
//         placeholder="To"
//         onChange={(event) => {
//           setLastName(event.target.value);
//         }}
//       />

//       <br />
//       <br />

//       <input
//         type="text"
//         id="date"
//         name="date"
//         value={date}
//         placeholder="Date"
//         onChange={(event) =>
//           setDate(event.target.value)
//         }
//       />

//       <button type="submit">Submit</button>

//       <br />
//       <br />

//       {/* <h2>{message}</h2> */}
//     </form>
//   );
// }
// export default App








import axios from "axios"
import React, { useState } from "react"
import "./App.css"



function form() {

	const [ pl, setPl ] = useState("")
	const [ dl, setDl ] = useState("")
	const [ date, setDate ] = useState("")
	const [ hr, setHr ] = useState("")
  const [ min, setMin ] = useState("")
	 
  var result = (hr - Math.floor(hr)) !== 0; 
   
  var result_2 = (min - Math.floor(min)) !== 0; 


  const handleSubmit = (event) => {
    event.preventDefault()

   if(parseInt(hr)>23 || parseInt(hr)<0 ){
    alert('0 to 23')
   }

   else if(parseInt(min)>59 || parseInt(min)<0 ){
    alert('0 to 59')
   }
    else if(result){
      alert('Write correct Hour')
      
     
    
    }
    else if(result_2){

      alert('Write correct minute')
      }
    else{
      var abc=[pl,dl,date,hr,min];
      window.location.href = '/abc/'+ abc;
    }
    
		
	  }

  return (
 <header>

    








<form className="box" onSubmit={handleSubmit}>

       
     <h3>Book now</h3>
          

    

<div className='form_text'>
         
         <input type="text" 
        
        id="pl"
        name="pl"
        value={pl}
        placeholder="From"
        onChange={(event) => {
          setPl(event.target.value);
        }}/>
        
         <input type="text" 
         
         id="dl"
        name="dl"
        value={dl}
        placeholder="To"
        onChange={(event) => {
          setDl(event.target.value);
        }}/>
         <input type="date"
         id="date"
        name="date"
        value={date}
        placeholder="Date"
        onChange={(event) => {
          setDate(event.target.value);
        }}/>
         {/* <input type="text" name="name" placeholder="Pick Up Time: hr:min"></input> */}
        
         <input type="text"
         id="hr"
        name="hr"
        value={hr}
        placeholder="Write Hour:0-23"
        onChange={(event) => {
          setHr(event.target.value);
        }}/>
          <input 
          id="min"
        name="min"
        value={min}
        placeholder="Write Min:0-59"
        onChange={(event) => {
          setMin(event.target.value);
        }}/>
         </div>
         <p></p>
         <input type="submit" name="name" placeholder="Message"></input>


       </form>

    
    




    </header>
  );
}

export default form;