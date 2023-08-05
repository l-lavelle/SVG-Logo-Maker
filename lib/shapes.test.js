const {Triangle, Square, Circle} = require('./shapes')

describe('Validate', ()=>{
    describe('Triangle Validation',()=>{
        it('Should create svg syntax with the correct inputs for a triangle logo', ()=>{
            const triangle = new Triangle("LL", "blue", "green");
            const actualTriangle = `
            <svg height="300" width="300">
            <polygon points="150,10 0,250 300,250" class="triangle" style="fill: green; stroke: black; stroke-width: 5px"/>
            <text x="50%" y="60%" dominant-baseline="middle" font-size="75" fill="blue" text-anchor="middle">LL</text>
            </svg>`
            expect(triangle.renderTriangle()).toBe(actualTriangle)
        })
    })
})

