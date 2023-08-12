class Output {
  constructor(title, desc, install, usage, contributing, license) {
    this.title = title;
    this.desc = desc;
    this.install = install;
    this.usage = usage;
    this.contributing = contributing;
    this.license = license;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) { 
  return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// Function to generate markdown for README
function generateMarkdown(data) {

  const output = new Output(
    title = data.title,
    desc = data.desc,
    install = data.install,
    usage = data.usage,
    contributing = data.contributing,
    license = data.license,
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
  if (output.license != 'none') { licenseFlag = true }

  // Getting License Badge
  var licenseBadge = getLicenseBadge(output.license);

  // Appending Mark Down Output
  var outputMD = createTitle(output.title);
  if (licenseFlag) {outputMD += licenseBadge}
  if (descFlag) {outputMD += createDesc(output.desc)}
  if (descFlag || usageFlag || installFlag) { outputMD += createTbl(descFlag, installFlag ,usageFlag, contrFlag, licenseFlag); }
  if (installFlag) { outputMD += createInstall(output.install) }
  if (usageFlag) { outputMD += createUsage(output.usage) }
  if (contrFlag) { outputMD += createContr(output.contributing) }
  if (licenseFlag) { outputMD += createlicense(output.license) }

  return outputMD;
  ;


}

// Create Functions
function createTitle(data) {
  return `# ${data}
`
}

function createTbl(descFlag, installFlag, usageFlag, contrFlag, licenseFlag){
  return `
## Table of Contents
  ` + tblAppends(descFlag, installFlag ,usageFlag, contrFlag, licenseFlag);
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

function createContr(data){
  return `
## Contributing Guidlines
  ${data}
  `
}

function createlicense(data){
  return `
## License
  This Application is licensed under the ${data} license
  `
}

function tblAppends(descFlag, installFlag, usageFlag, contrFlag, licenseFlag){
  var appends = `
 `;
  if(descFlag){
    appends +=  ` - [Description](#description)
`;
  }
  if(installFlag){
    appends += `  - [Installation](#installation)
`
  }
  if(usageFlag){
    appends += `  - [Usage](#usage)
`;
  }
  if(contrFlag) {
    appends += `  - [Contributing Guidlines](#contributing-guidlines)
`
  }
  if(licenseFlag){
    appends += `  - [License](#license)
`
  }

  return appends;
}


module.exports = generateMarkdown;
