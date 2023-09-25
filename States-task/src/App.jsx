import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="card-body">
          <div className="card-text">
            <h1>Counter App</h1>
          </div>
          <div className="Count">{count}</div>
          <div className="main-btn">
              <button 
                className="inc" 
                onClick={() => setCount(count + 1)}
              >
                INCREMENT
              </button>
              <button 
                className="dec" 
                onClick={() => setCount(count - 1)}
              >
                DECREMENT
              </button>
              <button 
                className="res" 
                onClick={() => setCount(0)}
              >
                RESET
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
