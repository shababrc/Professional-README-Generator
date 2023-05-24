# Professional README Generator

# Description: 
Professional README generator that allows you to quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria

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

## How We Did This
### By: 
We started by importing the necessary modules, inquirer and fs, using the require function. These modules are required to prompt the user for project information and write the generated README content to a file.
We defined a function called promptUser that uses the inquirer.prompt method to ask the user a series of questions about their project. The user's responses are collected in an object and returned as a promise.
Next, we implemented the generateREADME function, which takes the user's answers as input and generates the content for the README file. The function uses template literals to structure the content with proper headings and sections based on the user's responses.
The writeToFile function is responsible for writing the generated README content to a file. It uses the fs.writeFile method to create or overwrite the README-template.md file with the provided content. If an error occurs during the writing process, it is logged to the console.
The init function serves as the entry point of the application. It calls the promptUser function to gather the project information from the user. Once the user has provided their responses, the generateREADME function is called with the answers as an argument to generate the README content. Finally, the writeToFile function is invoked to write the content to the README-template.md file.
To start the application, we call the init function, which triggers the entire process. The user is prompted for project information, the README content is generated based on their responses, and the content is written to the file.
By following this implementation, the application allows users to easily generate a README file with the desired project details, providing a structured and organized documentation for their projects.

Please note that the README file will be generated as README-template.md in the same directory where the script is executed.



## Link to GitHub Repository
https://github.com/shababrc/Professional-README-Generator 

## Link to Walkthrough Video


## Credits
Big thanks to the rest of the bootcamp class for their help, as well as Bryan and Shawn for their expertise. 

## License
MIT License