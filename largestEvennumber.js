function findLargest(arr) {
    let largestEvenNo=0;
    arr.forEach(element => {
        if(element%2==0&&element>largestEvenNo)
        largestEvenNo=element;
    });
    return largestEvenNo;
}
const findLargestNo=(arr) => {
    let largestEvenNo=0;
    arr.forEach(element => {
        if(element%2==0&&element>largestEvenNo)
        largestEvenNo=element;
    });
    return largestEvenNo;
}
module.exports={findLargest,findLargestNo};