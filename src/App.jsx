// import { useState } from 'react'
import './App.css'
import PersonList from './components/Personlist'
import Data from './components/Data';
function App() {
  // const [count, setCount] = useState(99)
  return (
    <div className='card'>
      <PersonList items={Data} />
    </div>
  )
}

export default App
