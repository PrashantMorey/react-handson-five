import React, { useState } from 'react'

function HigherOrderComponent(OriginalCompo) {
  function NewCompo(){
    const [money,setMoney] = useState(10);
    const handleIncrease = () => {
      setMoney(money * 2);
    };
    return <OriginalCompo handleIncrease={handleIncrease} money={money}/>;
  }

  return NewCompo;
}

export default HigherOrderComponent
