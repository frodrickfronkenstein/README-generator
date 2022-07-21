// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  * [Usage](#usage)
  * [Installation](#installation)
  * [Contributions](#contributions)
  * [tests](#tests)
  * [License](#licence)
  * [Links](#links)
  * [contact](#contact)

  ## Usage
  ${data.use}

  ## Installation
  ${data.use}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Licence
  ${data.licence}

  ## Links
  * ${data.username}
  * ${data.repository}

  # Contact Info
  ${data.contactData}
`;
}

module.exports = generateMarkdown;
