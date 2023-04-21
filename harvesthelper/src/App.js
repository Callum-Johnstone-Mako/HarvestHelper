import React, { useState } from 'react'
import Grid from './Grid'
import NavBar from './NavBar'
import './App.css'

const App = () => {
  const [selectedState, setSelectedState] = useState('white')

  return (
    <div className="App">
      <NavBar onSelectState={setSelectedState} />
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Grid selectedState={selectedState} />
      </div>
    </div>
  )
}

export default App
