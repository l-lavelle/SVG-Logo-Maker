class Shape{
    constructor(logoName, logoColor, shapeColor){
        this.logoName=logoName;
        this.logoColor=logoColor;
        this.shapeColor=shapeColor
    }
    
}

class Triangle extends Shape{
    // render(){
    // <svg height="300" width="300">
    // <polygon points="150,10 0,250 300,250" class="triangle" />
    // <text x="50%" y="60%" dominant-baseline="middle" font-size="75" fill="blue" text-anchor="middle">T</text>
    // </svg>
    // }
}

class Circle extends Shape{
    renderCircle(){
        return `<svg height="300" width="300">
        <circle cx="150" cy="150" r="125" style="fill: ${this.shapeColor}; stroke: black; stroke-width: 5px;" />
        <text x="50%" y="50%" dominant-baseline="middle" font-size="75" fill="${this.logoColor}" text-anchor="middle">${this.logoName}</text>
        </svg>`   
    }
}

class Rectangle extends Shape{
    // render(){
    //     `<svg height="300" width="300">
    //     <rect width="250" height="150" x="25" y="75" style="${this.shapeColor}: yellow; stroke: black; stroke-width: 5px;" />
    //     <text x="50%" y="50%" dominant-baseline="middle" font-size="75" fill="${this.logoColor}" text-anchor="middle">${this.logoName}</text>  
    //     </svg>`
    // }
}

module.exports= {Triangle, Circle, Rectangle}
