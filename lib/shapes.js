class Shape {
    constructor() {
      this.color = '';
      this.textColor = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setTextColor(color) {
      this.textColor = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  