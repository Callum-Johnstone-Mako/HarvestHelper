import React, { useState } from 'react'
import styled from 'styled-components'

// Import the dug hole image
import dugHoleImage from './Dirt.webp'

const gridSize = 50 // Change this value to adjust the grid size
const numRows = 15
const numColumns = 30

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${numColumns}, ${gridSize}px);
  grid-template-rows: repeat(${numRows}, ${gridSize}px);
  gap: 1px;
  width: ${gridSize * numColumns}px;
  height: ${gridSize * numRows}px;
  box-sizing: border-box;
  padding: 16px;
  margin: 0 auto; // Centers the grid horizontally
`

const GridItem = ({ color, onMouseDown, onMouseEnter, onMouseUp }) => (
  <GridItemStyled
    color={color}
    onMouseDown={onMouseDown}
    onMouseEnter={onMouseEnter}
    onMouseUp={onMouseUp}
  />
)

const GridItemStyled = styled.div`
  width: ${gridSize}px;
  height: ${gridSize}px;
  background-color: ${({ color }) =>
    color === 'white' ? 'rgba(255, 255, 255, 0.1)' : color};
  // Set the background-image property when the square is a dug hole
  ${({ color }) =>
    color === 'dugHole'
      ? `
        background-image: url(${dugHoleImage});
        background-repeat: no-repeat;
        background-size: cover;
      `
      : ''}
  cursor: pointer;
  border: 1px solid black;
`

const Grid = ({ selectedState }) => {
  const initialGrid = Array.from(
    { length: numRows * numColumns },
    () => 'white'
  )
  const [grid, setGrid] = useState(initialGrid)
  const [dragging, setDragging] = useState(false)

  const changeColor = (index) => {
    const newGrid = [...grid]

    // Check if the square has a dug hole before planting a vegetable
    if (
      newGrid[index] === 'dugHole' ||
      selectedState === 'white' ||
      selectedState === 'dugHole'
    ) {
      newGrid[index] = selectedState
      setGrid(newGrid)
    }
  }

  const handleMouseDown = (index) => {
    setDragging(true)
    changeColor(index)
  }

  const handleMouseEnter = (index) => {
    if (dragging) {
      changeColor(index)
    }
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  return (
    <GridContainer onMouseUp={handleMouseUp}>
      {grid.map((color, index) => (
        <GridItem
          key={index}
          color={color}
          onMouseDown={() => handleMouseDown(index)}
          onMouseEnter={() => handleMouseEnter(index)}
        />
      ))}
    </GridContainer>
  )
}

export default Grid
