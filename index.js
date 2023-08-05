const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Rectangle} = require("./lib/shapes")

// add validation for color 
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
    message: 'Please enter a color for logo (use color name or hexadecimal number)',
    name: 'logoColor',
  },
  {
    type: 'list',
    message: 'Please choose a shape for logo',
    choices:["Circle", "Rectangle","Triangle"],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Please enter a color for shape (use color name or hexadecimal number)',
    name: 'shapeColor',
  }
]

// finish function
function whichShape(data){
  const {logoName, logoColor, shape, shapeColor} = data;
  if (shape==="Circle"){
    const trial = new Circle(logoName, logoColor, shapeColor);
    let trial2=trial.renderCircle()
    return trial2
  } else if (shape==="Triangle"){
    console.log('try again')
  }else{
      const trial = new Rectangle(logoName, logoColor, shapeColor);
      trial.render()
      
   
  }
}

function writeToFile(filename, data){
  fs.writeFile(filename, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

function init() {
    inquirer.prompt(logoQuestions)
    .then((response)=> 
        {writeToFile(`./lib/Logo-${response.logoName}.svg`,whichShape(response))},
      )
}

init()