
import './App.css'
import { useState } from 'react'

function App() {
  var ok="abc";
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [ name, setName ] = useState("")
	const [ des, setDes ] = useState("")
  const [ price, setPrice ] = useState("")

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    formData.append('name', name)
    formData.append('des', des)
    formData.append('price', price)
    const response = await fetch('http://localhost:5000/image', {
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

  


  return (
    <header>
    <div className='box'>
      {/* <h1>Upload to server</h1> */}
      {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
      <h3>Upload Car</h3>
      <form className='box' onSubmit={handleSubmit}>
      <input type="text" name='name' value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required/>
      <input type="text" name='des' value={des} placeholder="Description" onChange={(e) => setDes(e.target.value)} required/>
      <input type="text" name='price' value={price} placeholder="Price per kilo" onChange={(e) => setPrice(e.target.value)} required/>
        {/* <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/> */}
        <input type='file' name='file' onChange={handleFileChange}></input>
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