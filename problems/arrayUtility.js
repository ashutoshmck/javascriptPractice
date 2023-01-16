const doubleNumbers=(numbers)=> {
    
    if(!Array.isArray(numbers))
    throw new Error('Invalid Input');
    return numbers.map((element)=>{
        if(!Number.isInteger(element))
        throw new Error('Not an integer input');
        return element*3;
    }).filter(number=>number%2==0);
    
}
module.exports={doubleNumbers}; 