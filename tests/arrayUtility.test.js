const { doubleNumbers } = require("../problems/arrayUtility")

describe('Array Utilities',()=>{
    describe('Double Numbers',()=>{
        it('Should double the elements when input is an array',()=>{
            expect(doubleNumbers([1,2,3])).toStrictEqual([6]);
        })
        it('Should throw error when input is not an array',()=>{
            expect(()=>{doubleNumbers(1);}
                ).toThrow('Invalid Input');
        })
        it('Should throw error when input is not an array but has non integer elements',()=>{
            expect(()=>{doubleNumbers(['Ashutosh','Senapati']);}
                ).toThrow('Not an integer input');
        })
    })
    
})