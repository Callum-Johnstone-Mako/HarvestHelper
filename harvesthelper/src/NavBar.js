import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 16px;
`

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`

const NavBar = ({ onSelectState }) => {
  return (
    <NavContainer>
      <Button onClick={() => onSelectState('white')}>Empty</Button>
      <Button onClick={() => onSelectState('brown')}>Dig Hole</Button>
      <Button onClick={() => onSelectState('green')}>Plant Vegetable</Button>
      <Button onClick={() => onSelectState('yellow')}>Harvest Vegetable</Button>
    </NavContainer>
  )
}

export default NavBar
