import React, { useState } from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ccc;
  padding: 1rem;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`

const VegetableMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 1;
`

const vegetables = [
  { name: 'Carrot', color: 'orange' },
  { name: 'Lettuce', color: 'green' },
  { name: 'Beet', color: 'red' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Potato', color: 'saddlebrown' },
  { name: 'Cucumber', color: 'mediumseagreen' },
  { name: 'Eggplant', color: 'purple' },
  { name: 'Radish', color: 'crimson' },
  { name: 'Pumpkin', color: 'darkorange' },
  { name: 'Corn', color: 'gold' },
]

const NavBar = ({ onSelectState }) => {
  const [showVegetableMenu, setShowVegetableMenu] = useState(false)

  const handlePlantClick = () => {
    setShowVegetableMenu((prev) => !prev)
  }

  return (
    <Nav>
      <Button onClick={() => onSelectState('white')}>Empty</Button>
      <Button onClick={() => onSelectState('dugHole')}>Dig Hole</Button>

      <div style={{ position: 'relative' }}>
        <Button onClick={handlePlantClick}>Plant Vegetable</Button>
        {showVegetableMenu && (
          <VegetableMenu>
            {vegetables.map((vegetable) => (
              <Button
                key={vegetable.name}
                onClick={() => {
                  onSelectState(vegetable.color)
                  setShowVegetableMenu(false)
                }}
                style={{ backgroundColor: vegetable.color }}
              >
                {vegetable.name}
              </Button>
            ))}
          </VegetableMenu>
        )}
      </div>
      <Button onClick={() => onSelectState('black')}>Harvest</Button>
    </Nav>
  )
}

export default NavBar
