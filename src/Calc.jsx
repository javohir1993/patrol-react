import { useState } from "react"

function Calc() {

  const [number1, setChange1] = useState(0)
  const [number2, setChange2] = useState(0)

  const firstInput = evt => setChange1(evt.target.value)
  const secondInput = evt => setChange2(evt.target.value)

  return (
    <>
      <div>
        {number1} + {number2} = {Number(number1) + Number(number2)}
      </div>

      <input type="number" onChange={firstInput} />
      <input type="number" onChange={secondInput} />
    </>
  )
}

export default Calc
