// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const output = new Output(
    title = data.title,
    desc = data.desc,
    usage = data.usage
  );

    // Optional Input Flags
    var descFlag = false;
    if (output.desc != '') {descFlag = true}

  var outputMD = `# ${output.title}
  `;

  // Appending Mark Down Output

  //Appending description
  if (descFlag) {
    outputMD = outputMD +
      `
## Description 
  ${output.desc}
    `
    descFlag = true;
  }


  return outputMD;
  ;
}

class Output {
  constructor(title, desc, usage) {
    this.title = title;
    this.desc = desc;
    this.usage = usage;
  }
}

module.exports = generateMarkdown;
