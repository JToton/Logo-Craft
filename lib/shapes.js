// *Base class for all shapes.
class Shape {
  constructor(shapeColor) {
    // VInitialize the shapeColor property with the provided color.
    this.shapeColor = shapeColor;
  }
}

// *Triangle class extending from Shape class.
class Triangle extends Shape {
  constructor(shapeColor) {
    // *Call the parent class constructor to set the shapeColor.
    super(shapeColor);
  }

  // *Render method to generate the SVG markup for a triangle.
  render() {
    // *Return the SVG polygon element with the specified points and fill color.
    return `<polygon points="150,20 280,180 20,180" fill="${this.shapeColor}" />`;
  }
}

// *Circle class extending from Shape class.
class Circle extends Shape {
  constructor(shapeColor) {
    // *Call the parent class constructor to set the shapeColor.
    super(shapeColor);
  }

  // *Render method to generate the SVG markup for a circle.
  render() {
    // *Return the SVG circle element with the specified center coordinates, radius, and fill color.
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

// *Square class extending from Shape calls.
class Square extends Shape {
  constructor(shapeColor) {
    // *Call the parent class constructor to set the shapeColor.
    super(shapeColor);
  }

  // *Render method to generate the SVG markup for a square.
  render() {
    // *Return the SVG rect element with the specified coordinates, width, height, and fill color.
    return `<rect x="10" y="10" width="280" height="180" fill="${this.shapeColor}" />`;
  }
}

// *Export the Triangle, Circle, and Square classes as named exports.
module.exports = { Triangle, Circle, Square };
