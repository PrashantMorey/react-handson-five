import React from 'react'
import updatedComponent from "./HigherOrderComponent"

function Person2({money, handleIncrease}) {
  return (
    <div>
      <h2>John is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default updatedComponent(Person2);
