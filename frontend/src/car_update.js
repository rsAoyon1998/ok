
import './App.css'
import { useState } from 'react'
import { useParams } from 'react-router'


  

	
function App() {
  var ok="abc";
  if  (localStorage.getItem('user') === null)
  {
    window.location.href = '/log_in/';
  
  }
  

  let {id} = useParams();


    var nameArr = id.split(',');

    // var abc=nameArr[0]

  var abc= localStorage.getItem('user');

  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [ name, setName ] = useState(nameArr[0])
	const [ des, setDes ] = useState(nameArr[1])
  const [ price, setPrice ] = useState(nameArr[2])

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    formData.append('name', name)
    formData.append('des', des)
    formData.append('price', price)
    formData.append('user_name', abc)
    formData.append('u_id', nameArr[4])
    const response = await fetch('http://localhost:5000/image_update', {
      method: 'POST',
      body: formData
    })
    .then(
     
     
        alert("Done")
      
      )

    if (response) setStatus(response.statusText)
    
  }

  const handleFileChange = (e) => {
    
    
    // const file = e.target.files[0];
    
    
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  
  const main_menu = () => {
    
    window.location.href = '/search/';
   
  }

  

  return (
    <header>
    <button onClick={() => main_menu()}>Main Menu</button>
    <div className='box'>
      {/* <h1>Upload to server</h1> */}
      {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
      <h3>Write Note</h3>
      <form className='box' onSubmit={handleSubmit}>
      <input type="text" name='name' value={name} placeholder="Title" onChange={(e) => setName(e.target.value)} required/>
      <input type="text" name='des' value={des} placeholder="Category" onChange={(e) => setDes(e.target.value)} required/>
      <input type="text" name='price' value={price} placeholder="write description" onChange={(e) => setPrice(e.target.value)} required/>
        {/* <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/> */}
        <input type='file' name='file' onChange={handleFileChange} ></input>
        {/* <button type='submit'>Submit</button>
         */}

         <input type="submit" name="name" placeholder="Message"></input>
      </form>


      {/* {status && <h4>{status}</h4>} */}
    </div>
    </header>
  )
}

export default App