const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

rl.question("Enter the first number: ", (input1) => {
  const num1 = parseFloat(input1);

  rl.question("Enter the second number: ", (input2) => {
    const num2 = parseFloat(input2);

    rl.question("Enter the operation (+, -, *, /): ", (operation) => {
      const result = calculate(num1, num2, operation);
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
