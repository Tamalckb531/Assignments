import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <div className="container">
        <input type="text" placeholder='add title' onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <input type="text" placeholder='add description' onChange={(e)=>{
          setDescription(e.target.value);
        }}/>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </>
  )
}

export default App
