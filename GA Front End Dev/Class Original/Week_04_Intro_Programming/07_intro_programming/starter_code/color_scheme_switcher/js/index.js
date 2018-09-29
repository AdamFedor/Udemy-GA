document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('greenButton').onclick = switchGreen;

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
