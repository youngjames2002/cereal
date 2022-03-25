function main() {

    startAlert();
    gameStart();

}

function startAlert() {

    let name = document.getElementById('name');
    let nameVal = name.value;

    alert("Hey " + nameVal + "! You have 5 minutes, MAKE CEREAL DUMMY!!");

}

function gameStart(){
    startTimer();
}

var myTimer;
var duration = 3000;

function startTimer(){
    myTimer = setInterval('displayTimer()', 1000);
    displayTimer();
}

function displayTimer(){
    duration--;
    document.getElementById('timer').innerHTML = duration;
}