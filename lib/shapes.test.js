const { Triangle, Circle, Square } = require("./shapes");

// ?Test case for the Triangle class.

test("Triangle render() should return the correct SVG code", () => {
  // *Create a new instance of the Triangle class with the color "blue".
  const triangle = new Triangle("blue");

  // *Assert that the render() method of the Triangle instance returns the expected SVG code.
  // *Source: Provided in Module 10 challenge directions.
  expect(triangle.render()).toBe(
    '<polygon points="150,20 280,180 20,180" fill="blue" />'
  );
});

// ?Test case for the Circle class.

test("Circle render() should return the correct SVG code", () => {
  // *Create a new instance of the Circle class with the color "red".
  const circle = new Circle("red");

  // *Assert that the render() method of the Circle instance returns the expected SVG code.
  // *Source: Provided in Module 10 challenge directions.
  expect(circle.render()).toBe(
    '<circle cx="150" cy="100" r="80" fill="red" />'
  );
});

// ?Test case for the Square class.

test("Square render() should return the correct SVG code", () => {
  // *Create a new instance of the Square class with the color "green".
  const square = new Square("green");

  // *Assert that the render() method of the Square instance returns the expected SVG code.
  // *Source: Provided in Module 10 challenge directions.
  expect(square.render()).toBe(
    '<rect x="10" y="10" width="280" height="180" fill="green" />'
  );
});
