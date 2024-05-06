// *Required Packages.
const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { Triangle, Circle, Square } = require("./lib/shapes");

// *Function to prompt the user for input.
function promptUser(question) {
  return new Promise((resolve) => {
    readline.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// *Function to generate the logo.
async function generateLogo() {
  const text = await promptUser("Enter up to three characters: ");
  const textColor = await promptUser(
    "Enter the text color (keyword or hexadecimal): "
  );
  const shape = await promptUser("Choose a shape (circle, triangle, square): ");
  const shapeColor = await promptUser(
    "Enter the shape color (keyword or hexadecimal): "
  );

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
    readline.close();
  });
}

// *Function call.
generateLogo();
