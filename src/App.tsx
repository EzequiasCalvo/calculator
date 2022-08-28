import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import { CalculatorState, SpecialDigits, Operation } from "./types";
import { calculate } from "./utils/calculate";

const initialState = {
  operation: "",
  currentOperand: "",
  prevOperand: "",
};

const App = () => {
  const [calculationData, setCalculationData] =
    useState<CalculatorState>(initialState);

  const { operation, currentOperand, prevOperand } = calculationData;

  const handleClick = (digit: string, operationType?: string) => {
    switch (operationType) {
      case "CLEAR":
        return setCalculationData(initialState);

      case "OPERATION":
        if (currentOperand === "" && prevOperand === "") {
          return;
        }
        if (currentOperand === "") {
          // handle error
          return;
        }
        if (prevOperand === "") {
          return setCalculationData({
            ...calculationData,
            operation: digit,
            prevOperand: currentOperand,
            currentOperand: "",
          });
        }

        return setCalculationData({
          ...calculationData,
          prevOperand: calculate(calculationData),
          operation: digit,
          currentOperand: "",
        });

      case "ADD":
        return setCalculationData({
          ...calculationData,
          currentOperand: `${currentOperand}${digit}`,
        });

      case "CALCULATE":
        if (operation === "" || currentOperand === "" || prevOperand === "") {
          return calculationData;
        }
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
                operation={Operation.CLEAR}
              />

              <Button
                handleClick={handleClick}
                digit="DEL"
                operation={Operation.DELETE}
              />
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
            <Button
              handleClick={handleClick}
              operation={Operation.DIVIDE}
              digit="÷"
            />
            <Button
              handleClick={handleClick}
              operation={Operation.MULTIPLY}
              digit="x"
            />
            <Button
              handleClick={handleClick}
              operation={Operation.SUBSTRACT}
              digit="-"
            />
            <Button
              handleClick={handleClick}
              operation={Operation.SUM}
              digit="+"
            />
            <Button
              handleClick={handleClick}
              digit="="
              operation={Operation.EQUAL}
            />
          </section>
        </section>
      </div>
    </div>
  );
};

export default App;
