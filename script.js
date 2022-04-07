function main() {

    startAlert();
    gameStart();

}
// stats variables declaration
var inventoryOpened = 0, timeRem = 0, inputCount = 0, bedroom = false, kitchen = false, shop = false; 
const places = [];

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
    timeRem = 0;
}

function success() {
    alert("CONGRATS! YOU WON, the cereal was made!!");
    alert('Please click the links below to either view your stats or try again');
    document.getElementById('success').style.visibility;
    timeRem = duration;
}

var character = { inventory: [], location: "bedroom" };

var area = {
    bedroom: {
        short_description: "bedroom",
        contents: [],
    },
    kitchen: {
        short_description: "kitchen",
        contents: ["bowl", "cereal", "spoon", "milk"],
    },
    shop: {
        short_description: "shop",
        contents: ["cereal", "milk"],
    }
};


function command_split(str) {
    var parts = str.split(/\s+/); // splits string into array of words, removing whitespace
    var command = parts.shift(); // command is the first word in the array, which is removed from the array
    var object = parts.join(" "); // the rest of the words
    return [command, object];
}

var room, command, verb, obj;

function remove(array, item) {
    var idx = array.indexOf(item);
    if (idx > -1) {
        array.splice(idx, 1);
    }
}

function move_to_room(room_name) {
    character.location = room_name;
    room = area[room_name];
    console.log(room);
    if (room.short_description == "kitchen") {
        console.log('kitchen');
        message.innerHTML = 'You have made your way to the kitchen!';
        document.getElementById('kitchenPic').style.display = 'block';
    }
}

function printInventory() {
    console.log("invcheck");
    inventoryOpened += 1;
    message.innerHTML = "You are carrying nothing";
    character.inventory.forEach(function (item) {
        message.innerHTML = "You are carrying:" + "&nbsp;&nbsp;&nbsp;&nbsp;" + item;
    });
}

function take_item(obj) {
    let found = false;
    room.contents.forEach(function (item) {
        if (item.includes(obj)) {
            // does the word in obj match any part of the text of item?
            found = true;
            message.innerHTML = "You pick up the " + item;
            character.inventory.push(item);
            remove(room.contents, item);
        }
    });
    if (!found) {
        message.innerHTML = "There is no " + obj + " here.";
    }
}

room = area[character.location];

function getOneCommand(text) {
    room = area[character.location];
    command = command_split(text.toLowerCase());
    verb = command[0];
    obj = command[1];
    console.log("verb: " + verb + ", object: " + obj);
    if (["go"].includes(verb)) {
        move_to_room(obj);
    } else if (["inventory"].includes(verb)) {
        printInventory();
    } else if (["take", "pickup"].includes(verb)) {
        take_item(obj);
    } else if (["drop", "throw", "release"].includes(verb)) {
        drop_item(obj);
    }
}

//trying to get enter key working
var input = document.getElementById("entry").value;
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("SUBMIT").click();
    }
});

function textEntered() {
    let entered = document.getElementById('entry').value;
    let message = document.getElementById('message');
    getOneCommand(entered);
    inputCount += 1;
    /*if (entered.includes('kitchen')){
        console.log('kitchen');
        message.innerHTML='You have made your way to the kitchen!';
        document.getElementById('kitchenPic').style.display = 'block';
    }*/
}

function statsPage() {
    document.getElementById('timeRem').innerHTML = 'You finished with ' + timeRem + ' seconds left.';
    document.getElementById('inventoryOpened').innerHTML = 'You opened your inventory ' + inventoryOpened + ' times.';
    document.getElementById('inputCount').innerHTML = 'You entered ' + inputCount + ' commands.';
    if (bedroom) {
        places.push("Bedroom");
    }
    if (kitchen) {
        places.push("Kitchen");
    }
    if (shop) {
        places.push("Shop");
    }
    if (places.length == 0){
        places.push("... nowhere ... Try again there are many places to explore!");
    }
    document.getElementById('places').innerHTML = "You visited the following places: " + places;
}
