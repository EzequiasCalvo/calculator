import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import { CalculatorState, SpecialDigits } from "./types";

const initialState = {
  operation: "",
  currentOperand: "",
  prevOperand: "",
};

const App = () => {
  const [calculationData, setCalculationData] =
    useState<CalculatorState>(initialState);

  const { operation, currentOperand, prevOperand } = calculationData;

  const handleClick = (digit: number | string) => {
    switch (digit) {
      case "CLEAR":
        return setCalculationData(initialState);

      default:
        return setCalculationData({
          ...calculationData,
          currentOperand: `${currentOperand}${digit}`,
        });
    }
  };

  return (
    <div className="container">
      <div>
        <section className="output-wrapper">
          <div className="output--last">
            <span>
              {prevOperand} {operation}
            </span>
          </div>
          <div className="output--current">
            <span>{currentOperand}</span>
          </div>
        </section>
        <section className="buttons-wrapper">
          <div>
            <section className="delete">
              <Button
                handleClick={handleClick}
                digit="CLEAR"
                specialDigit={SpecialDigits.CLEAR}
              />

              <Button handleClick={handleClick} digit="DEL" />
            </section>
            <section className="numbers">
              <Button handleClick={handleClick} digit="7" />

              <Button handleClick={handleClick} digit="8" />

              <Button handleClick={handleClick} digit="9" />

              <Button handleClick={handleClick} digit="4" />

              <Button handleClick={handleClick} digit="5" />

              <Button handleClick={handleClick} digit="6" />

              <Button handleClick={handleClick} digit="7" />

              <Button handleClick={handleClick} digit="8" />

              <Button handleClick={handleClick} digit="9" />

              <Button
                handleClick={handleClick}
                digit="0"
                specialDigit={SpecialDigits.ZERO}
              />

              <Button handleClick={handleClick} digit="." />
            </section>
          </div>
          <section className="operators">
            <Button handleClick={handleClick} digit="÷" />
            <Button handleClick={handleClick} digit="x" />
            <Button handleClick={handleClick} digit="-" />
            <Button handleClick={handleClick} digit="+" />
            <Button handleClick={handleClick} digit="=" />
          </section>
        </section>
      </div>
    </div>
  );
};

export default App;
