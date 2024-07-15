const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {

    //testing Triangle class
    describe('Triangle', () => {

        //checinkg if we can create a Triabgle object
        describe('Create Triangle', () => {
            italic('should be an instance of Triangle class', () => {
                const triangle = new Triangle();
                expect(triangle).toBeInstanceOf(Triangle);
            });
        });

        


    })



})