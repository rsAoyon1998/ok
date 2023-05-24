
import './App.css'
import { useState } from 'react'

function App() {
  var ok="abc";
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [ name, setName ] = useState("")
	const [ email, setEmail ] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5000/image', {
      method: 'POST',
      body: formData, name
    }).then(res=>{
      if(res.data=="ok"){
      // alert("Successfully Registered")
      window.location.href = './log_in';
      }
      
    
      })

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
    <div className='App'>
      <h1>Upload to server</h1>
      {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
      <hr></hr>
      <form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} required/>
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button type='submit'>Submit</button>
      </form>
      {/* {status && <h4>{status}</h4>} */}
    </div>
  )
}

export default App