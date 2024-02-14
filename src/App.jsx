import { useState } from 'react'
import {io} from 'socket.io-client'

function App() {
  const socket =  io('http://localhost:3000')
  return (
    <>
    <h1>App</h1>
    </>
  )
}

export default App
