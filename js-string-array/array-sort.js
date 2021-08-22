const numbers = [ 5, 6, 2, 3, 77, 4, 44, 55, 66];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['kabli', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
// const sortedFriends = friends.sort();
// const reverseFriends = friends.reverse();
const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

// number sorting fun 
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    // return a-b;
    return b - a;
});
console.log(sortedBigNumbers);