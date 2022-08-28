export interface CalculatorState {
  currentOperand: string;
  prevOperand: string;
  operation: string;
}

export enum Operation {
  MULTIPLY = "MULTIPLY",
  SUBSTRACT = "SUBSTRACT",
  SUM = "SUM",
  DIVIDE = "DIVIDE",
  EQUAL = "EQUAL",
  CLEAR = "CLEAR",
  DELETE = "DELETE",
}

export enum SpecialDigits {
  ZERO = "zero",
  EQUAL = "equal",
  CLEAR = "clear",
}
