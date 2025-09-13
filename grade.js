const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your marks (0-100): ", function(input) {
  const marks = parseFloat(input);
  let grade;

  if (marks >= 90 && marks <= 100) {
    grade = "A";
  } else if (marks >= 80) {
    grade = "B";
  } else if (marks >= 70) {
    grade = "C";
  } else if (marks >= 60) {
    grade = "D";
  } else if (marks >= 50) {
    grade = "E";
  } else if (marks >= 0) {
    grade = "F (Fail)";
  } else {
    grade = "Invalid marks entered";
  }

  console.log("Your grade is: " + grade);
  rl.close();
});

rl.on("close", function() {
  process.exit(0);
});
