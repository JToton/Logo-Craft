// *Required Packages.
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

// *Function to generate the logo.
async function generateLogo() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hexadecimal):",
    },
  ]);

  const { text, textColor, shape, shapeColor } = answers;

  let shapeInstance;
  if (shape === "circle") {
    shapeInstance = new Circle(shapeColor);
  } else if (shape === "triangle") {
    shapeInstance = new Triangle(shapeColor);
  } else if (shape === "square") {
    shapeInstance = new Square(shapeColor);
  }

  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  // *HTML Generation for logo.html.
  const htmlCode = `<!DOCTYPE html>
  <html>
  <head>
    <title>Generated Logo</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
    </style>
  </head>
  <body>
    ${svgCode}
  </body>
  </html>`;

  // *fs File Creation, location and name.
  fs.writeFile("./examples/logo.html", htmlCode, (err) => {
    if (err) throw err;
    console.log("Generated logo.html");
  });
}

// *Function call.
generateLogo();
