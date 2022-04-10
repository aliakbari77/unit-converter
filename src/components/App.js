import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [factorFrom, setFactorFrom] = useState(1)
  const [factorTo, setFactorTo] = useState(1)
  const [amount, setAmount] = useState(0)
  const unit = units

  const handleInput = (e) => {
    const {value} = e.currentTarget
    setAmount(value)
  }

  const handleChangeSelectFrom = (e) => {
    const {value} = e.currentTarget
    console.log(value)
    setFactorFrom(value)
  }

  const handleChangeSelectTo = (e) => {
    const {value} = e.currentTarget
    setFactorTo(value)
  }

  const handleConvert = () => {
    const result = (factorFrom * amount) / factorTo
    setResult(result)
  }

  return (
    <>
      <div className="converter-form">
        <Input label={"Amount"} onChange={handleInput}/>

        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label={'From'} items={unit} onChange={handleChangeSelectFrom}/>
          <Select label={'To'} items={unit} onChange={handleChangeSelectTo}/>
          <button onClick={handleConvert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
