function generateMarkdown(data) {
    return `
  # ${data.title}
  ## description
  ${data.description}
  ## table of Contents
  // Table of contents stuff
...
To install necessary dependencies run the following command: ${data.installation}
Usage: ${data.usage}
Contributing: ${data.contributing}
To run tests, run the following command: ${data.tests}
// license
// badge
// profile picture: <img src=${}>
  `;
  }
  
  module.exports = generateMarkdown;
  