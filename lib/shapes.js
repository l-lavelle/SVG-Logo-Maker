// Create parent class for all shapes
class Shape{
    constructor(logoName, logoColor, shapeColor){
        this.logoName=logoName;
        this.logoColor=logoColor;
        this.shapeColor=shapeColor
    }
    
}

// Create individual method for each specific type of shape
class Triangle extends Shape{
    renderTriangle(){
        return `<svg height="200" width="300">
        <polygon points="150,10 10,190 290,190" class="triangle" style="fill: ${this.shapeColor}; stroke: black; stroke-width: 5px"/>
        <text x="50%" y="70%" dominant-baseline="middle" font-size="75" fill="${this.logoColor}" text-anchor="middle">${this.logoName}</text>
        </svg>`
        }
}

class Circle extends Shape{
    renderCircle(){
        return `<svg height="200" width="300">
        <circle cx="150" cy="100" r="90" style="fill: ${this.shapeColor}; stroke: black; stroke-width: 5px;" />
        <text x="50%" y="50%" dominant-baseline="middle" font-size="75" fill="${this.logoColor}" text-anchor="middle">${this.logoName}</text>
        </svg>`   
    }
}


class Square extends Shape{
    renderSquare(){
       return  `<svg height="200" width="300">
        <rect width="175" height="175" x="62.5" y="12.5" style="fill: ${this.shapeColor}; stroke: black; stroke-width: 5px;" />
        <text x="50%" y="50%" dominant-baseline="middle" font-size="75" fill="${this.logoColor}" text-anchor="middle">${this.logoName}</text>  
        </svg>`
    }
}

module.exports= {Triangle, Circle, Square}
