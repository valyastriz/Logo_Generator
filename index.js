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

