// import { useState } from 'react'
import './App.css'
import Person from './components/Person'
import Data from './components/Data'
function App() {
  // const [count, setCount] = useState(99)
  return (
    <div className='card'>
      <Person fullName={Data[0].fullName} bio={Data[0].bio} imgSrc={Data[0].imgSrc} profession={Data[0].profession} />
      <Person fullName={Data[1].fullName} bio={Data[1].bio} imgSrc={Data[1].imgSrc} profession={Data[1].profession} />
      <Person fullName={Data[2].fullName} bio={Data[2].bio} imgSrc={Data[2].imgSrc} profession={Data[2].profession} />
      <Person fullName={Data[3].fullName} bio={Data[3].bio} imgSrc={Data[3].imgSrc} profession={Data[3].profession} />
      <Person fullName={Data[4].fullName} bio={Data[4].bio} imgSrc={Data[4].imgSrc} profession={Data[4].profession} />
    </div>
  )
}

export default App
