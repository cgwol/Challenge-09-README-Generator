const inq = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide a project title. (Required)',
        validate: name => {
            if (name) {
                return true;
            }
            else {
                return 'Project Title Required' ;
            }
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Provide a description of the project. '
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide insallation instructions for the project. '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information on using the project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide any information on guidelines for contributing. '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide license information. ',
        choices: ['MIT', 'Apache 2.0', 'GNU', 'ISC', 'none'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./generatedREADME/${fileName}`, data, err => {
        if (err) {
            console.log("ERROR Writing File\n" + err);
        }
        else {
            console.log("Created README");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    return inq.prompt(questions);
}

// Function call to initialize app
init().then(responses => generateMarkdown(responses)).
    then(generateREADME => writeToFile('README.md', generateREADME));
