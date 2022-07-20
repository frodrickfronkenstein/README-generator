// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require("inquirer");
const fs = require('fs');
const { reject } = require('bcrypt/promises.js');
const { resolve } = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'README File created'
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();


console.log('hello node!');