const inquirer = require('inquirer');
const fs = require('fs');

// Prompt the user for project information
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
}

// Generate the README content based on user input
function generateREADME(answers) {
  return `# ${answers.projectTitle}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contribution}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license} license.

## Questions

For any questions, please contact me:

GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})

Email: ${answers.email}
`;
}

// Write the generated README content to a file
function writeToFile(content) {
  fs.writeFile('README-template.md', content, (err) =>
    err ? console.error(err) : console.log('README.md file generated successfully!')
  );
}

// Start the application
function init() {
  promptUser()
    .then((answers) => generateREADME(answers))
    .then((content) => writeToFile(content))
    .catch((error) => console.error(error));
}

// Initialize the application
init();
