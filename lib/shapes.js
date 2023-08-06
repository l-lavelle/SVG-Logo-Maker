class Shape{
    constructor(logoName, logoColor, shapeColor){
        this.logoName=logoName;
        this.logoColor=logoColor;
        this.shapeColor=shapeColor
    }
    
}

class Triangle extends Shape{
    renderTriangle(){
        return `<svg height="300" width="300">
        <polygon points="150,10 0,250 300,250" class="triangle" style="fill: ${this.shapeColor}; stroke: black; stroke-width: 5px"/>
        <text x="50%" y="60%" dominant-baseline="middle" font-size="75" fill="${this.logoColor}" text-anchor="middle">${this.logoName}</text>
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
       return  `<svg height="300" width="300">
        <rect width="200" height="200" x="50" y="50" style="fill: ${this.shapeColor}; stroke: black; stroke-width: 5px;" />
        <text x="50%" y="50%" dominant-baseline="middle" font-size="75" fill="${this.logoColor}" text-anchor="middle">${this.logoName}</text>  
        </svg>`
    }
}

module.exports= {Triangle, Circle, Square}
