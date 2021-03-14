import { useState } from "react"

export default function Number(){

  // Random Number
  const [number, setNumber] = useState(0)


  function RandomNo(){
    return Math.floor(Math.random() * 2563);
  }

  function clickHandler(){

    setNumber(RandomNo())

    console.log(RandomNo())
    
  }

  return(
    <h3 className="text-7xl" onClick={ () => clickHandler()}> {number}</h3>
  )
}