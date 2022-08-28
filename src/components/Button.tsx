import { SpecialDigits } from "../types";

interface ButtonProps {
  digit: number | string;
  handleClick: (digit: number | string) => void;
  specialDigit?: SpecialDigits;
}

const Button = ({ digit, handleClick, specialDigit }: ButtonProps) => {
  const handleOperation = () => {
    handleClick(digit);
  };

  console.log(specialDigit);

  return (
    <button id={specialDigit} onClick={handleOperation}>
      {digit}
    </button>
  );
};

export default Button;
