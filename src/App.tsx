import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";

enum SpecialDigits {
  ZERO = "zero",
  EQUAL = "equal",
  CLEAR = "clear",
}

interface CalculatorState {
  currentOperand: number | string;
  prevOperand: number | string;
  operation: string;
}

const App = () => {
  const [calculationData, setCalculationData] = useState<CalculatorState>({
    operation: "",
    currentOperand: "",
    prevOperand: "",
  });

  const { operation, currentOperand, prevOperand } = calculationData;

  const handleClick = (digit: number | string) => {
    switch (digit) {
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
