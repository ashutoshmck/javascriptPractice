function findLargest(arr) {
    let largestEvenNo=0;
    arr.forEach(element => {
        if(element%2==0&&element>largestEvenNo)
        largestEvenNo=element;
    });
    console.log(largestEvenNo);
}
findLargest([1,2,3]);