const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square} = require("./lib/shapes")

// add validation for color name or take off validator 
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
    // validate: function(logoColor){
    //   if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(logoColor)){
    //     return true
    // } else{
    //     return console.log("\nPlease enter a valid color or hexadecimal color code")
    // }
    // }
  },
  {
    type: 'list',
    message: 'Please choose a shape for logo',
    choices:["Circle", "Square", "Triangle"],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Please enter a color for shape (use color name or hexadecimal number)',
    name: 'shapeColor',
    // validate: function(logoColor){
    //   if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(logoColor) || isColor(logoColor)){
    //     return true
    // } else{
    //     return console.log("\nPlease enter a valid color or hexadecimal color code")
    // }
    // }
  }
]

function whichShape(data){
  const {logoName, logoColor, shape, shapeColor} = data;
  if (shape==="Circle"){
    const circle = new Circle(logoName, logoColor, shapeColor);
    let circleValues=circle.renderCircle()
    return circleValues
  } else if (shape==="Triangle"){
    const triangle = new Triangle(logoName, logoColor, shapeColor);
    let triangleValues=triangle.renderTriangle()
    return triangleValues
  }else{
    const square = new Square(logoName, logoColor, shapeColor);
    let squareValues=square.renderSquare()
    return squareValues
  }
}

function writeToFile(filename, data){
  fs.writeFile(filename, data, (err) =>
  err ? console.error(err) : console.log('Generated logo.svg!')
);
}

function init() {
    inquirer.prompt(logoQuestions)
    .then((response)=> 
        {writeToFile(`./lib/Logo-${response.logoName}.svg`,whichShape(response))},
      )
}

init()
// SVG file is created named `logo.svg`
// 300x200 pixel image that matches the criteria I entered