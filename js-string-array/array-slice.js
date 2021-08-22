const numbers = [3, 4, 5, 6, 7, 33, 44, 55, 66, 222, 333, 444, 555];
// slice 
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// delete 2 array from index 4 
// const numberSpliced = numbers.splice(4, 2);
// console.log(numberSpliced);
// console.log(numbers);


const numberSpliced2 = numbers.splice(4, 3, 1000, 2000, 3000);
console.log(numberSpliced2);
console.log(numbers);