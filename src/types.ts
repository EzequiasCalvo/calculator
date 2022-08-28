export interface CalculatorState {
  currentOperand: number | string;
  prevOperand: number | string;
  operation: string;
}

export enum Operation {
  MULTIPLY,
  SUBSTRACT,
  SUM,
  DIVIDE,
}

export enum SpecialDigits {
  ZERO = "zero",
  EQUAL = "equal",
  CLEAR = "clear",
}
