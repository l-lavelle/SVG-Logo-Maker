const {Triangle, Square, Circle} = require('./shapes')

describe('Validate', ()=>{
    describe('Validation',()=>{
        it('Should create svg syntax with the correct user inputs for a triangle logo', ()=>{
            const triangle = new Triangle("LL", "blue", "green");
            const actualTriangle = `<svg height="200" width="300">
            <polygon points="150,10 10,190 290,190" class="triangle" style="fill: green; stroke: black; stroke-width: 5px"/>
            <text x="50%" y="70%" dominant-baseline="middle" font-size="75" fill="blue" text-anchor="middle">LL</text>
            </svg>`
            expect(triangle.renderTriangle().replace(/\s/g, '')).toBe(actualTriangle.replace(/\s/g, ''))
        })
        it('Should create svg syntax with the correct user inputs for a square logo', ()=>{
            const square = new Square("JJ", "red", "black");
            const actualSquare =  `<svg height="200" width="300">
            <rect width="175" height="175" x="62.5" y="12.5" style="fill: black; stroke: black; stroke-width: 5px;" />
            <text x="50%" y="50%" dominant-baseline="middle" font-size="75" fill="red" text-anchor="middle">JJ</text>  
            </svg>`
            expect(square.renderSquare().replace(/\s/g, '')).toBe(actualSquare.replace(/\s/g, ''))
        })
        it('Should create svg syntax with the correct user inputs for a circle logo', ()=>{
            const circle = new Circle("TT", "orange", "purple");
            const actualCircle =  `<svg height="200" width="300">
            <circle cx="150" cy="100" r="90" style="fill: purple; stroke: black; stroke-width: 5px;" />
            <text x="50%" y="50%" dominant-baseline="middle" font-size="75" fill="orange" text-anchor="middle">TT</text>
            </svg>` 
            expect(circle.renderCircle().replace(/\s/g, '')).toBe(actualCircle.replace(/\s/g, ''))
        })
    })
})

