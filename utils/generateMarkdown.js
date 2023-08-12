class Output {
  constructor(title, desc, install, usage, contributing, license, licenseLink, tests, github, email) {
    this.title = title;
    this.desc = desc;
    this.install = install;
    this.usage = usage;
    this.contributing = contributing;
    this.license = license;
    this.licenseLink = licenseLink;
    this.tests = tests;
    this.github = github;
    this.email = email;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {

  const output = new Output(
    title = data.title,
    desc = data.desc,
    install = data.install,
    usage = data.usage,
    contributing = data.contributing,
    license = data.license,
    licenseLink = getLicenseLink(data.license),
    tests = data.tests,
    github = data.github,
    email = data.email
  );

  // Optional Input Flags
  var descFlag = false;
  if (output.desc != '') { descFlag = true }
  var installFlag = false;
  if (output.install != '') { installFlag = true }
  var usageFlag = false;
  if (output.usage != '') { usageFlag = true }
  var contrFlag = false;
  if (output.contributing != '') { contrFlag = true }
  var licenseFlag = false;
  if (output.license != 'Unlicensed') {
    licenseFlag = true
    // Getting License Badge
    var licenseBadge = getLicenseBadge(output.license);
  }
  var testsFlag = false;
  if (output.tests != '') { testsFlag = true }
  var githubFlag = false;
  if (output.github != '') { githubFlag = true }
  var emailFlag = false;
  if (output.email != '') { emailFlag = true } 

  // Appending Mark Down Output
  var outputMD = createTitle(output.title);
  if (licenseFlag) { outputMD += licenseBadge }
  if (descFlag) { outputMD += createDesc(output.desc) }
  if (descFlag || usageFlag || installFlag) { outputMD += createTbl(descFlag, installFlag, usageFlag, contrFlag, licenseFlag, testsFlag, githubFlag, emailFlag); }
  if (installFlag) { outputMD += createInstall(output.install) }
  if (usageFlag) { outputMD += createUsage(output.usage) }
  if (contrFlag) { outputMD += createContr(output.contributing) }
  if (licenseFlag) { outputMD += createlicense(output.license, output.licenseLink) }
  if (testsFlag) { outputMD += createTests(output.tests) }
  if (githubFlag || emailFlag) { outputMD += createQuestions() }
  if (githubFlag) { outputMD += createGithub(output.github) }
  if (emailFlag) { outputMD += createEmail(output.email) }

  return outputMD;
}

// Create Functions
function createTitle(data) {
  return `# ${data}
`
}

function createTbl(descFlag, installFlag, usageFlag, contrFlag, licenseFlag, testsFlag, githubFlag, emailFlag) {
  return `
## Table of Contents
  ` + tblAppends(descFlag, installFlag, usageFlag, contrFlag, licenseFlag, testsFlag, githubFlag, emailFlag);
}

function createDesc(data) {
  return `
## Description 
  ${data}
`
}

function createInstall(data) {
  return `
## Installation
  ${data}
`
}

function createUsage(data) {
  return `
## Usage
  ${data}
`;
}

function createContr(data) {
  return `
## Contributing Guidlines
  ${data}
  `
}

function createlicense(data, link) {
  return `
## License
  This application is licensed under the [${data}](${link}) license
  `
}

function createQuestions(){
  return `
## Questions`
}

function createGithub(data) {
  return `
  Created by: [${data}](https://github.com/${data}/)
  `
}

function createEmail(data){
  return `
  Contact with any further questions at [${data}](mailto:${data})
  `
}

function createTests(data){
  return `
## Testing
  ${data}
  `
}

// Getting License Link
function getLicenseLink(license) {
  var link;
  switch (license){
    case 'MIT':
      link = `https://choosealicense.com/licenses/mit/`;
      break;
    case 'Apache 2.0':
      link = `https://choosealicense.com/licenses/apache-2.0/`
      break;
    case 'GNU AGLPv3':
      link = `https://choosealicense.com/licenses/agpl-3.0/`
      break;
    case 'GNU GPLv3':
      link = `https://choosealicense.com/licenses/gpl-3.0/`;
      break;
    case 'Mozilla Public License 2.0':
      link = `https://choosealicense.com/licenses/mpl-2.0/`;
      break;
    case 'Boost Software License 1.0': 
      link = `https://choosealicense.com/licenses/bsl-1.0/`;
      break;
    default:
      link = ``;
      break;
  }

  return link;
}

// Getting License badge
function getLicenseBadge(license) {
  return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`
}

// Only adds elemnts to the table that werent left empty
function tblAppends(descFlag, installFlag, usageFlag, contrFlag, licenseFlag, testsFlag, githubFlag, emailFlag) {
  var appends = `
 `;
  if (descFlag) {
    appends += ` - [Description](#description)
`;
  }
  if (installFlag) {
    appends += `  - [Installation](#installation)
`
  }
  if (usageFlag) {
    appends += `  - [Usage](#usage)
`;
  }
  if (contrFlag) {
    appends += `  - [Contributing Guidlines](#contributing-guidlines)
`
  }
  if (licenseFlag) {
    appends += `  - [License](#license)
`
  }
  if (testsFlag){
    appends += `  - [Testing](#testing)
`
  }
  if (githubFlag || emailFlag){
    appends += `  - [Questions](#questions)
`
  }

  return appends;
}

module.exports = generateMarkdown;
