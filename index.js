const inquirer = require('inquirer')
const fs = require('fs')

// add validation
logoQuestions=[
  {
    type: 'input',
    message: 'Enter up to 3 characters for logo',
    name: 'logoName',
    validate: function(logoName){
        if (logoName.trim()==="" || logoName.length>3){
            console.log("\nPlease enter a logo name with no more than 3 characters")
        } else {
            return true
        }
    }
  },
  {
    type: 'input',
    message: 'Please enter a color for logo (use color name or hexadecimal number',
    name: 'logoColor',
  },
  {
    type: 'list',
    message: 'Please choose a shape for logo',
    choices:["Circle", "Square","Triangle"],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Please enter a color for shape (use color name or hexadecimal number)',
    name: 'shapeColor',
  }
]

function whichShape(shape){
  if (shape==="Circle"){

  } if (shape==="Triangle"){

  }else{
    
  }
}

function writeToFile(title,data){
  console.log(title)
}

function init() {
    inquirer.prompt(logoQuestions)
    .then((response)=> 
        {writeToFile(`${response.logoName}.svg`,whichShape(response.shape))},
      )
}

init()