
function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}
function renderLicenseBadge(license, username, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(username, title)})`
  }
  return ''
}

function generateMarkdown(data) {
    return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.username, data.title)}
  
  Description
  ${data.description}

  ## Table of Contents

  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  

  To install necessary dependencies run the following command: ${data.installation}

  Usage: 
  ${data.usage}

  Contributing: 
  ${data.contributing}
  
  To run tests, run the following command: 
  ${data.tests}
  
  License: 
  ${data.license}
  
  <img src="${data.avatar_url}"></img>
  
  Creator Github account: [GitHub](${data.url})
  `;
  }
  
  module.exports = generateMarkdown;
  