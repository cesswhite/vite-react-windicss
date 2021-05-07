import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen relative">
     
        <div className="mx-auto w-1/2 flex items-center justify-center">
            <img src={logo} className="h-50 w-50" alt="logo" />
        </div>
     
      <div className="mx-auto w-1/2 text-center">
        <h1 className="text-5xl font-bold mb-4">Hello and Welcome</h1>
        <p className="italic text-2xl mb-4"> Vite + WindiCSS + React!</p>
        
          <button className="px-10 py-2 bg-gray-800 rounded-md" onClick={() => setCount((count) => count + 1)}>
            <span className="text-gray-50 font-bold">Count</span>
          </button>
          <br/>
          <span className="font-bold text-3xl">{count}</span>
       
      </div>
      <div className="w-full absolute bottom-0 text-center">
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
