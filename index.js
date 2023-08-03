const inquirer = require('inquirer')

// add validation
inquirer
    .prompt([
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
        //   {
        //     type: 'input',
        //     message: 'Please enter a color for logo (use color name or hexadecimal number',
        //     name: 'logoColor',
        //   },
          {
            type: 'list',
            message: 'Please choose a shape for logo',
            choices:["Circle", "Square","Triangle"],
            name: 'shape',
          },
               //   {
        //     type: 'input',
        //     message: 'Please enter a color for shape (use color name or hexadecimal number)',
        //     name: 'shapeColor',
        //   }
        ])

// https://www.npmjs.com/package/validate-color