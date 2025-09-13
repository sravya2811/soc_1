const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", function(firstInput) {
  const num1 = parseFloat(firstInput);

  rl.question("Enter an operator (+, -, *, /): ", function(operator) {

    rl.question("Enter the second number: ", function(secondInput) {
      const num2 = parseFloat(secondInput);
      let result;

      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        if (num2 === 0) {
          result = "Error: Division by zero";
        } else {
          result = num1 / num2;
        }
      } else {
        result = "Invalid operator";
      }

      console.log("Result: " + result);
      rl.close();
    });
  });
});

rl.on("close", function() {
  process.exit(0);
});
