const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {

    //testing Triangle class
    describe('Triangle', () => {

        //checinkg if we can create a Triabgle object
        describe('Create new instance of Triangle', () => {
            it('should be an instance of Triangle class', () => {
                const triangle = new Triangle();
                expect(triangle).toBeInstanceOf(Triangle);
            });
        });

        //check if color is set correctly
        describe('Set color', () => {
            it('should set color correctly', () => {
                const color = 'blue';
                const triangle = new Triangle();
                triangle.setColor(color);
                expect(triangle.color).toBe(color);
            });
        });

        //test if render method returns correct svg string
        describe('render() method', () => {
            it('should return the correct SVG string', () => {
                const triangle = new Triangle();
                triangle.setColor('blue');
                expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
            });
        });
    });

    // testing circle class
    describe('Circle', () => {

        // checking if circle object is created correctly
        describe('Create Circle', () => {
            it('should be an instance of Circle Class', () => {
                const circle = new Circle();
                expect(circle).toBeInstanceOf(Circle);
            });
        });

    });


});