import React from 'react'
import updatedComponent from "./HigherOrderComponent"

function Person1({money, handleIncrease}) {
  return (
    <div>
      <h2>Jimmy is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default updatedComponent(Person1);
