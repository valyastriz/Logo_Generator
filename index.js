const inquirer = require('inquirer');
const fs = require('fs');
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
        message: 'Enter your desired shaped color: '
    }
];

inquirer.prompt(questions).then(answers => {
    let shape;
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }
    shape.setColor(answers.shapeColor);

    const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;

    fs.writeFile('logo.svg', svg, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
});

