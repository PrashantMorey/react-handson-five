import React from 'react'

function PureComponent() {
  const { points = 0 } = this.props;
  return (
    <div>
        <span>{ points }</span>
    </div>
  )
}

export default PureComponent

