// packages imported 
const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square} = require("./lib/shapes")

// Prompt questions to create logo 
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
    message: 'Please hexadecimal number for the logo color',
    name: 'logoColor',
    validate: function(logoColor){
      if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(logoColor)){
        return true
    } else{
        return console.log("\nPlease enter a valid hexadecimal color code")
    }}
  },
  {
    type: 'list',
    message: 'Please choose a shape for logo',
    choices:["Circle", "Square", "Triangle"],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Please enter a hexadecimal number for the shape color',
    name: 'shapeColor',
    validate: function(shapeColor, res){
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(shapeColor) && shapeColor!==testColor(res)){
        return true
    } 
    else if (shapeColor===testColor(res)){
      return console.log("\nPlease pick a different color than logo color")
    }
    else{
      return console.log("\nPlease enter a valid hexadecimal color code")
    }},
  }
]

// Returns the logo color to test in shape color validation
function testColor(color){
  let trial = JSON.parse(JSON.stringify(color))
  return trial.logoColor
}

// Tests to see which shape was choosen to create new instance of correct class 
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

// Create SVG file 
function writeToFile(filename, data){
  fs.writeFile(filename, data, (err) =>
  err ? console.error(err) : console.log('Generated logo.svg!')
);
}

// Prompts user with logoQuestions
function init() {
    inquirer.prompt(logoQuestions)
    .then((response)=> 
        {writeToFile(`./examples/logo.svg`,whichShape(response))},
      )
}

init()





