import { useState } from "react";
import "./scss/App.scss";
import Modal from "./components/Modal";
import Button from "./components/Button";
import { CalculatorState, SpecialDigits, Operation } from "./types";
import { calculate } from "./utils/calculate";

const initialState = {
  operation: "",
  currentOperand: "",
  prevOperand: "",
  overwrite: false,
};

const App = () => {
  const [calculationData, setCalculationData] =
    useState<CalculatorState>(initialState);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const { operation, currentOperand, prevOperand, overwrite } = calculationData;

  const handleClick = (digit: string, operationType?: string) => {
    switch (operationType) {
      case "CLEAR":
        return setCalculationData(initialState);

      case "DELETE":
        if (overwrite) {
          return setCalculationData({
            ...calculationData,
            overwrite: false,
            currentOperand: "",
          });
        }
        if (currentOperand === "") return;
        if (currentOperand.length === 1) {
          return setCalculationData({
            ...calculationData,
            currentOperand: "",
          });
        }
        return setCalculationData({
          ...calculationData,
          currentOperand: currentOperand.slice(0, -1),
        });

      case "OPERATION":
        if (currentOperand === "" && prevOperand === "") {
          return;
        }
        if (currentOperand === "") {
          // handle error
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
        if (overwrite) {
          return setCalculationData({
            ...calculationData,
            currentOperand: digit,
            overwrite: false,
          });
        }

        // add a check to avoid more than one dot
        if (digit === "." && currentOperand.includes(".")) {
          setModalMessage(
            "It is not possible to have more than one decimal operator in the same number."
          );
          setModalTitle("This operation is forbidden!");
          setOpenModal(true);
          return;
        }
        return setCalculationData({
          ...calculationData,
          currentOperand: `${currentOperand}${digit}`,
        });

      case "CALCULATE":
        if (operation === "" || currentOperand === "" || prevOperand === "") {
          return calculationData;
        }

        if (prevOperand === "0" || currentOperand === "0") {
          setModalMessage("Any number multiplied by 0 will result in 0");
          setModalTitle("This is a learning tip!");
          setOpenModal(true);
        }
        return setCalculationData({
          ...calculationData,
          overwrite: true,
          prevOperand: "",
          operation: "",
          currentOperand: calculate(calculationData),
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
      {openModal && (
        <Modal
          openModal={setOpenModal}
          title={modalTitle}
          message={modalMessage}
        />
      )}
    </div>
  );
};

export default App;
