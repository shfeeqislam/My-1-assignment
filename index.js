import inquirer from "inquirer";
let bmi_calculator = await inquirer.prompt([
    //user input
    {
        type: 'number',
        name: "num1",
        message: "Enter your first number"
    },
    //select operations
    {
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Reminder"],
        name: 'operator',
        message: "Select your operator for Calculation"
    },
    // second numberinput
    {
        type: 'number',
        name: "num2",
        message: "Enter your second number"
    }
]);
if (bmi_calculator.operator === "Addition") {
    console.log(bmi_calculator.num1 + bmi_calculator.num2);
}
else if (bmi_calculator.operator === "Subtraction") {
    console.log(bmi_calculator.num1 - bmi_calculator.num2);
}
else if (bmi_calculator.operator === "Multiplication") {
    console.log(bmi_calculator.num1 * bmi_calculator.num2);
}
else if (bmi_calculator.operator === "Division") {
    console.log(bmi_calculator.num1 / bmi_calculator.num2);
}
else if (bmi_calculator.operator === "Reminder") {
    console.log(bmi_calculator.num1 % bmi_calculator.num2);
}
else {
    console.log("invalid operator");
}
