// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'what is your github username?'
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Where is your repository located?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'write description of your project',
    },
    {
        type: 'input',
        name: 'contactData',
        message: 'add your contact data',
    },
    {
        type: 'input',
        name: 'installs',
        message: 'name the instillations used for this project.'
    },
    {
        type: 'input',
        name: 'use',
        message: 'describe how to use the project'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'who contributed to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Were any tests written for your project?  If so, explain how to run them.',
    },
    {
        type: 'list',
        name: 'licence',
        message: 'choose a licence for the project',
        choices: ['None', 'MIT', 'Apache lincense 2.0', 'BSD 3-clause', 'GNU General Public', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License', 'Mozilla Public License', 'Other']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(__dirname, '/readmes/', fileName), data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('README created')
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
.then(fileData => {
    return generateMarkdown(fileData);
})
.then(readmeMD => {
    return writeToFile('README.md', readmeMD);
});