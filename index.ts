import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    message: "Enter First Number!",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter Second Number!",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select one of the Operators to perform operations!",
    type: "list",
    name: "operators",
    choices: ["+", "-", "*", "/"],
  },
]);

switch (answer.operators) {
  case "+":
    console.log(
      "The Value of Addition is: " + (answer.firstNumber + answer.secondNumber)
    );
    break;
  case "-":
    console.log(
      "The Value of Subtraction is: " +
        (answer.firstNumber - answer.secondNumber)
    );
    break;
  case "*":
    console.log(
      "The value of Multiplication is: " +
        answer.firstNumber * answer.secondNumber
    );
    break;
  case "/":
    console.log(
      "The Value of Division is: " + answer.firstNumber / answer.secondNumber
    );
    break;

  default:
    break;
}
