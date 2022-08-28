import "../scss/Button.scss";
import { SpecialDigits, Operation } from "../types";

enum MathOperator {
  MULTIPLY = "MULTIPLY",
  SUBSTRACT = "SUBSTRACT",
  SUM = "SUM",
  DIVIDE = "DIVIDE",
}

interface ButtonProps {
  digit: string;
  handleClick: (digit: string, operationType?: string) => void;
  operation?: Operation;
  specialDigit?: SpecialDigits;
}

const Button = ({
  digit,
  handleClick,
  specialDigit,
  operation,
}: ButtonProps) => {
  const handleOperation = () => {
    if (!operation) return handleClick(digit, "ADD");
    if (
      Object.values(MathOperator).includes(operation as unknown as MathOperator)
    ) {
      return handleClick(digit, "OPERATION");
    }
    if (operation === "EQUAL") {
      return handleClick(digit, "CALCULATE");
    }

    handleClick(digit, operation);
  };

  return (
    <button id={specialDigit} onClick={handleOperation}>
      {digit}
    </button>
  );
};

export default Button;
