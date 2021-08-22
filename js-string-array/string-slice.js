const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
// it will split after every space 
const words = anthem.split(' ');
// it will remove "a" split before and after "a" 
const withoutA = anthem.split('a');
// console.log(withoutA);
// it will count 5th index to 12 index 
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr 
// it will count after 11th index and end with 6 caracter count 
const anotherPart = anthem.substr(11, 6);
// console.log(anotherPart);

// substring 
// it will act like slice 
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat
const first = 'amader';
const second = 'city';
// it will work but this is not perfect way 
const fullString = first + second;
const fullString1 = first.concat(second).concat('abc').concat('DEF');
// console.log(fullString1);

const allWords = ['alim', 'balim', 'calim', 'dalim', 'ealim'];
// const allJoined = allWords.join('');
// const allJoined = allWords.join(' ');
// const allJoined = allWords.join(',');
// const allJoined = allWords.join(', ');
const allJoined = allWords.join('www ');
console.log(allJoined);