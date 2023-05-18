# Professional-README-Generator
Professional README generator that allows you to quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

## User Story
``
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
``
## Acceptance Criteria
``
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
``

## How we did this:
### In JavaScript:

This code is a JavaScript program that generates a README file based on user input using the Inquirer package to prompt the user for information. The program asks the user for the project title, a short description, installation instructions, usage information, contribution guidelines, test instructions, license, GitHub username, and email address. The program then generates the README file based on the user's input. The file contains sections for Description, Table of Contents, Installation, Usage, Contributing, Tests, License, and Questions. Finally, the program writes the generated README content to a file named "README.md". The implementation uses Node.js file system module fs to create the file.

Link to Github Repo:
