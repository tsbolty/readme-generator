
function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
};

function renderLicenseBadge(license, username, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(username, title)})`
  }
  return '';
};

function renderImage(image) {
  if (image) {
    return `![Project Image](${image})`
  }
  return '';
};

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.username, data.title)}
  
  ## Description
  ${data.description}

  ${renderImage(data.image)}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Usage: 
  ${data.usage}
  
  ## Contributing: 
  ${data.contributing}
  
  #### To run tests, run the following command: 
  ${data.tests}
  
  ## License: 
  ${data.license}
  
  To install necessary dependencies run the following command: ${data.installation}
  
  Creator Github account: [GitHub](https://github.com/${data.username.toLowerCase().replace(/\s+/g, '')})
  `;
}

module.exports = generateMarkdown;
