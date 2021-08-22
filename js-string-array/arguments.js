// unlimited number of parameter can send and grab with arguments and sum up with for loop || we cant push here. 
function addNumbers() {
    // arguments is array like object 
    // console.log(arguments[3]);
    let result = 0;
    for (const num of arguments) {
        result = result + num
    }
    return result;
}
const sum = addNumbers(23, 13,44);
// console.log(sum);



// function getFullName(fName, lName) {
//     const fullName = fName + ' '+ lName;
//     return fullName;
// }
// const name = getFullName('Hanif', 'Songket');
// console.log(name);
function getFullName() {
    let getName = '';
    for (const part of arguments) {
        getName = getName + part + ' ';
    }
    return getName;
}
const name = getFullName('Hanif', 'Songket', 'kormokar');
console.log(name);