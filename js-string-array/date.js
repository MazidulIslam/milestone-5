const myFavDate = new Date('1971-12-16');
// console.log(myFavDate);
const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80);
// console.log(anotherDate);
// momentjs library  to time and date 
if (myFavDate.getTime() < anotherDate.getTime()) {
    console.log('favorite is earlier');
}
// javascript compare two dates (search on web)