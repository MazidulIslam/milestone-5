function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    } return mega;
}
const friends = ['kutub', 'lion', 'shamol', 'Sabbir'];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);
if (friends.indexOf('Fox') != -1) {
    // console.log('lion exists');
}
else {
    console.log("Fox doesn't exists");
}
if (friends.includes('lion')) {
    // console.log('lion exists using includes');
}

//concatination
const first1 = [1, 2, 3];
const second1 = [2, 3, 4, 5];
const combined = first1.concat(second1);
console.log(combined);