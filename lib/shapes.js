class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<polygon points="150,20 280,180 20,180" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<rect x="10" y="10" width="280" height="180" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
