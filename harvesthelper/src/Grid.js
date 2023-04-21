import React, { useState } from 'react'
import styled from 'styled-components'

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

const GridItem = styled.div`
  width: ${gridSize}px;
  height: ${gridSize}px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  border: 1px solid black;
`

const Grid = ({ selectedState }) => {
  const initialGrid = Array.from(
    { length: numRows * numColumns },
    () => 'white'
  )

  const [grid, setGrid] = useState(initialGrid)

  const handleClick = (index) => {
    const newGrid = [...grid]
    newGrid[index] = selectedState
    setGrid(newGrid)
  }

  return (
    <GridContainer>
      {grid.map((color, index) => (
        <GridItem
          key={index}
          color={color}
          onClick={() => handleClick(index)}
        />
      ))}
    </GridContainer>
  )
}

export default Grid
