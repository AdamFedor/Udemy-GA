document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'white';
}

function switchWhite() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

function switchGreen() {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
}

function switchBlue() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}

function switchRed() {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
}

function switchYellow() {
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'black';
}
