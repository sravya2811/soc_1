import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function count() {
  const [count, setCount] = useState(0)
return (<div className="App">
  <h2>counter:{count}</h2>
  <button onClick={()=>setCount(count+1)}>Increment</button>
</div>
    
}

export default Count
