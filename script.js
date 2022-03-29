function main() {

    startAlert();
    gameStart();

}

function startAlert() {

    let name = document.getElementById('name');
    let nameVal = name.value;

    if (nameVal == "") {
        alert('Enter your name please!');
    } else {

        alert("Hey " + nameVal + "! You have 5 minutes, MAKE CEREAL DUMMY!!");

        let timerLink = document.getElementById('link');
        timerLink.style.visibility = 'visible';
    }
}

function gameStart() {
    startTimer();

    let message = document.getElementById('message');
    message.innerHTML = "Good Morning! You have just awoken on another beautiful day and you feel your stomach rumble! Go make yourself some cereal to start the day off right!";
}

var myTimer;
var duration = 3000;

function startTimer() {
    myTimer = setInterval('displayTimer()', 1000);
    displayTimer();
}

function displayTimer() {
    duration--;
    if (duration >= 0) {
        document.getElementById('timer').innerHTML = duration;
    }

    if (duration == 0) {
        timeUp();
    }
}

function timeUp() {
    alert("Unlucky! You ran out of time! You didn't make the cereal.... very unfortunate");
    alert('Please click the links below to either view your stats or try again');
    document.getElementById('failure').style.visibility = 'visible';
}

function textEntered(){
    let entered = document.getElementById('entry').value;
    let message = document.getElementById('message');

    if (entered.includes('kitchen')){
        console.log('kitchen');
        message.innerHTML='You have made your way to the kitchen!';
        document.getElementById('kitchenPic').style.display = 'block';
    }
}