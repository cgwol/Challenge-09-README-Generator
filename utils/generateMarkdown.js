class Output {
  constructor(title, desc, install, usage, contributing) {
    this.title = title;
    this.desc = desc;
    this.install = install;
    this.usage = usage;
    this.contributing = contributing;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

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
    contributing = data.contributing
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

  // Appending Mark Down Output
  var outputMD = createTitle(output.title);
  if (descFlag) {outputMD += createDesc(output.desc)}
  if (descFlag || usageFlag || installFlag) { outputMD += createTbl(descFlag, installFlag ,usageFlag, contrFlag); }
  if (installFlag) { outputMD += createInstall(output.install) }
  if (usageFlag) { outputMD += createUsage(output.usage) }
  if (contrFlag) { outputMD += createContr(output.contributing) }

  return outputMD;
  ;


}

// Create Functions
function createTitle(data) {
  return `# ${data}
`
}

function createTbl(descFlag, installFlag, usageFlag, contrFlag){
  return `
## Table of Contents
  ` + tblAppends(descFlag, installFlag ,usageFlag, contrFlag);
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

function tblAppends(descFlag, installFlag, usageFlag, contrFlag){
  var appends = '';
  if(descFlag){
    appends +=  `[Description](#description)\n\t`;
  }
  if(installFlag){
    appends += `[Installation](#installation)\n\t`
  }
  if(usageFlag){
    appends += `[Usage](#usage)\n\t`;
  }
  if(contrFlag) {
    appends += `[Contributing Guidlines](#contributing-guidlines)\n\t`
  }

  return appends;
}


module.exports = generateMarkdown;
