function makeRed(){
            document.body.style.backgroundColor = 'red';
        }

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const greenButton = document.getElementById('make-green');
// without function name this is anonymous function
greenButton.onclick = function () { document.body.style.backgroundColor = 'green' }

// Handle by addEventListener
const goldenRod = document.getElementById('make-golden');
goldenRod.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// handle by add event listener online function

const hotPink = document.getElementById('make-hotpink');
hotPink.addEventListener('click', function makePinkBtn() {
    document.body.style.backgroundColor = 'hotpink';
})

//handle by shortcut addeventlistener 
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})