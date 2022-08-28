import { CalculatorState } from "../types";

export const calculate = ({
  currentOperand,
  prevOperand,
  operation,
}: CalculatorState) => {
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let result = 0;
  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "x":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
  }

  return String(result);
};
