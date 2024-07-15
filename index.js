const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text: ',
    validate: input => input.length <= 3 || 'Text must be no longer than 3 characters long'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape: ',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter your desired shape color: '
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter your desired text color: '
  }
];

inquirer.prompt(questions).then(answers => {
  let shape;
  let textX = '150'; // Default horizontal center
  let textY = '150'; // Default vertical position
  let textSize = '35'; // Default font size

  switch (answers.shape) {
    case 'Triangle':
      shape = new Triangle();
      textY = '120'; // Adjust vertical position for triangle
      textSize = '25'; // Adjust font size for triangle
      break;
    case 'Circle':
      shape = new Circle();
      textY = '150'; // Adjust vertical position for circle
      textSize = '35'; // Adjust font size for circle
      break;
    case 'Square':
      shape = new Square();
      textY = '150'; // Adjust vertical position for square
      textSize = '35'; // Adjust font size for square
      break;
  }
  shape.setColor(answers.shapeColor);
  shape.setTextColor(answers.textColor);

  const svg = `
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="${textX}" y="${textY}" font-size="${textSize}" text-anchor="middle" dominant-baseline="middle" fill="${shape.textColor}">${answers.text}</text>
</svg>`;

  const filePath = path.join(__dirname, 'logo.svg');

  fs.writeFile(filePath, svg, (err) => {
    if (err) {
      console.error('Error writing to file', err);
    } else {
      console.log('Generated logo.svg in the current folder');
    }
  });
});
