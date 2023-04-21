import React, { useState } from 'react'
import Grid from './Grid'
import NavBar from './NavBar'
import './App.css'

// Import the background image
import backgroundImage from './Grass.jpg'

const App = () => {
  const [selectedState, setSelectedState] = useState('white')

  // Add the background image as an inline style for the .App class
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'repeat',
  }

  return (
    <div className="App" style={appStyle}>
      <NavBar onSelectState={setSelectedState} />
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Grid selectedState={selectedState} />
      </div>
    </div>
  )
}

export default App
