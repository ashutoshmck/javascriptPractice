function checkDigits(num) {
    let prevDigit=String(num)[0];
    String(num).split('')
    .forEach(element => {
        if(element!=prevDigit)
        return false;
    });
    return true;
}
const checkDigitsArrow=(num) => {
    let prevDigit=String(num)[0];
    String(num).split('').forEach(element => {
        if(element!=prevDigit)
        return false;
    });
    return true;
}
module.exports={checkDigits,checkDigitsArrow};