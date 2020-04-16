const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util");
const api = require("./utilities/api")
const generateMarkdown = require("./utilities/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile)

const questions = [
    {
        name: "username",
        message: "What is your GitHub username?",
        type: "input"
    },
    {
        name: "title",
        message: "What is the title of your project?",
        type: "input"
    },
    {
        name: "description",
        message: "Give a brief description of your project.",
        type: "input"
    },
    {
        name: "license",
        message: "What kind of license would you like?",
        type: "list",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        name: "installation",
        message: "What command should be run to install dependencies?",
        type: "input",
        default: "npm i"
    },
    {
        name: "usage",
        message: "What does the user need to know to use the application?",
        type: "input"
    },
    {
        name: "contributing",
        message: "What does the user need to know to contribute to the repo?",
        type: "input"
    },
    {
        name: "tests",
        message: "What command should be run to run tests?",
        type: "input",
        default: "npm test"
    }
];


function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers)
        api.getUser(answers.username)
        .then(({data}) => {
            writeFileAsync("README.md", generateMarkdown({...answers, ...data}))
        })
    })
}

init()


