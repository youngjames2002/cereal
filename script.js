const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let selection;
var sub = "";
let cocoempty = false;
function startGame() {
  state = {}
  //showTextNode(1)
}

/*function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      //let increment = '1';
      button.classList.add('btn');
      //increment++;
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  selection = "Coco";
  //showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You have opened the cupboard, What Cereal do you choose?',
    options: [
      {
        text: 'CoCo Pops',
        setState: { CoCoPops: true },
        setState: { cereal: true },
        nextText: 7
      },
      {
        text: 'Cornflakes',
        setState: { Cornflakes: true },
        setState: { cereal: true },
        nextText: 7
      },
      {
        text: 'Weet-a-bix',
        setState: { weetabix: true },
        setState: { cereal: true },
        nextText: 4
      },
      {
        text: 'Rice Krispies',
        setState: { ricecrispies: true },
        setState: { cereal: true },
        nextText: 7
      },
      {
        text: 'None of these',
        nextText: 10
      }
    ]
  },
  {
    id: 5,
    text: 'Yeah that works i guess, now time to choose your weapon?',
    options: [
      {
        text: 'Spoon',
        requiredState: (currentState) => currentState.cereal,
        nextText: 12
      },
      {
        text: 'Fork',
        requiredState: (currentState) => currentState.cereal,
        nextText: 6
      },
      {
        text: 'Knife',
        requiredState: (currentState) => currentState.cereal,
        nextText: 6
      },
      {
        text: 'Fish Spatula',
        requiredState: (currentState) => currentState.cereal,
        nextText: 6
      },
    ]
  },
  {
    id: 3,
    text: "On the topic of milk, what's your choice",
    options: [
      {
        text: 'Regular Milk',
        nextText: 5
      },
      {
        text: 'Oat Milk',
        nextText: 5
      },
      {
        text: 'Coconut Milk',
        nextText: 5
      },
      {
        text: 'Almond Milk',
        nextText: 5
      }
    ]
  },
  {
    id: 4,
    text: 'Weet-a-bix? You really chose weet-a-bix? That was a test, you failed, you are not fit to partake in this game',
    options: [
      {
        text: 'Choose a new cereal',
        nextText: 1
      },
      {
        text: 'Stop playing and continue on with your miserable life',
        nextText: 12
      }
    ]
  },
  {
    id: 6,
    text: "Really? You're joking right?",
    options: [
      {
        text: "I'm fully aware of my choice",
        nextText: 12
      },
      {
        text: 'Choose something more appropriate (maybe a spoon genius?)',
        nextText: 5
      },
    ]
  },
  {
    id: 7,
    text: 'You need to grab something to eat it out of it, what do you reckon?',
    options: [
      {
        text: 'Plate',
        nextText: 8
      },
      {
        text: 'Bowl',
        nextText: 9
      },
      {
        text: 'Mug',
        nextText: 9
      },
      {
        text: 'Saucepan',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'That must have been a miss-click no? You really chose that?',
    options: [
      {
        text: 'Yeah i did choose that, and what?',
        nextText: 9
      },
      {
        text: "Definitely a miss-click, i'll pick again",
        nextText: 7
      }
    ]
  },
  {
    id: 9,
    text: 'Okay but the real question is: what comes first, the milk or the cereal?',
    options: [
      {
        text: 'Milk ',
        nextText: 3
      },
      {
        text: 'Cereal',
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'Tough luck pal, beggers cant be choosers, you have to pick something...',
    options: [
      {
        text: 'Back to cereal choices',
        nextText: 1
      },
      {
        text: 'Get angry and stop making cereal',
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: 'You are wrong, please choose the correct option',
    options: [
      {
        text: 'Milk ',
        nextText: 3
      },
      {
        text: 'Milk',
        nextText: 3
      }
    ]
  },
  {
    id: 12,
    text: "That's all for now bozo",
    options: [

    ]
  },
]
*/
startGame()

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
  message.innerHTML = 'Please click the links below to either view your stats or try again';
  document.getElementById('success').style.visibility;
  timeRem = duration;
}

var player = { inventory: [], location: "bedroom" };

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
  var parts = str.split(/\s+/); // splits string into array of words (verb + object)
  var command = parts.shift(); // verb taken out of array
  var object = parts.join(" "); // remaining words concatenated to create the object
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
  player.location = room_name;
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
  let lastitem = " ";
  player.inventory.forEach(function (item) {
    console.log(item);
    lastitem = lastitem.concat(item) + ",    ";
    //message.innerHTML = "You are carrying:" + "&nbsp;&nbsp;&nbsp;&nbsp;" + item;
  });
  if (lastitem == " ") {
    message.innerHTML = "You are carrying nothing";
  } else {
    message.innerHTML = "You are carrying:" + "&nbsp;&nbsp;&nbsp;&nbsp;" + lastitem;
  }
}

function take_item(obj) {
  let found = false;
  room.contents.forEach(function (item) {
    if (item.includes(obj)) {
      //checks if object is in the room
      found = true;
      if (!multiChoice(obj)) {
        message.innerHTML = "You take the " + item;
        player.inventory.push(item);
        remove(room.contents, item);
      }
    }
  });
  if (!found && obj == "spoon") {
    console.log("matrix");
    message.innerHTML = "Do not try and bend the spoon — that's impossible. Instead, only try to realize the truth." + "<br />" + "What truth?" + "<br />" + "There is no spoon.";
  }
  else if (!found) {
    message.innerHTML = "There is no " + obj + " here.";
  }
}

function make_cereal() {
  if (player.inventory.includes("milk") && player.inventory.includes("cereal") && player.inventory.includes("bowl") && player.inventory.includes("spoon")) {
    success();
  }
}

room = area[player.location];

function Command(text) {
  room = area[player.location];
  command = command_split(text.toLowerCase());
  verb = command[0];
  obj = command[1];
  console.log("verb: " + verb + ", object: " + obj);
  if (["go"].includes(verb)) {
    move_to_room(obj);
  } else if (["inventory"].includes(verb)) {
    printInventory();
  } else if (["take", "pickup"].includes(verb)) {
    //call multiple choice for that obj
    //multiChoice(obj);
    take_item(obj);
  } else if (["drop", "throw", "release"].includes(verb)) {
    drop_item(obj);
  } else if (["make", "create"].includes(verb) && obj == "cereal") {
    make_cereal();
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

/*function showmulti() {
  if (room.short_description == "cereal") {
    console.log('cereal');
    message.innerHTML = 'Select a cereal';
    document.getElementById('').style.display = 'block';
  }
}*/
function textEntered() {
  let entered = document.getElementById('entry').value;
  let message = document.getElementById('message');
  Command(entered);
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
  if (places.length == 0) {
    places.push("... nowhere ... Try again there are many places to explore!");
  }
  document.getElementById('places').innerHTML = "You visited the following places: " + places;
}

function multiChoice(obj) {
  if (obj == "cereal") {
    console.log("cerealmult");
    cerealMulti();
    return true;
  }
}

function cerealMulti() {
  document.getElementById('multiChoice').style.visibility = 'visible';
  console.log("visible");
}

function coco() {
  selection = "coco";
  let cocoamount = random();
  console.log("click");
  if (cocoempty) {
    message.innerHTML = "Cereal box only " + cocoamount + " full!";
    document.getElementById('multiChoice').style.visibility = 'hidden';
  }
  if ((Math.floor(Math.random() * 11) < 6)) {
    console.log("empty");
    message.innerHTML = "Cereal box only " + cocoamount + " full!";
    cocoempty = true;
    document.getElementById('multiChoice').style.visibility = 'hidden';
  }
  if (!cocoempty) {
    message.innerHTML = "You take the " + "Coco Pops";
    player.inventory.push("cereal");
    remove(room.contents, item);
    document.getElementById('multiChoice').style.visibility = 'hidden';
  }
}

function rice() {
  selection = "rice";
  console.log("click");
  message.innerHTML = "You take the " + "Rice Krispies";
  player.inventory.push("cereal");
  remove(room.contents, item);
  document.getElementById('multiChoice').style.visibility = 'hidden';
}

function corn() {
  selection = "corn";
  console.log("click");
  message.innerHTML = "You take the " + "Corn Flakes";
  player.inventory.push("cereal");
  remove(room.contents, item);
  document.getElementById('multiChoice').style.visibility = 'hidden';
}

function krave() {
  selection = "krave";
  console.log("click");
  message.innerHTML = "You take the " + "Krave";
  player.inventory.push("cereal");
  remove(room.contents, item);
  document.getElementById('multiChoice').style.visibility = 'hidden';
}

function weet() {
  selection = "weet";
  console.log("click");
  message.innerHTML = "You take the " + "Weet-a-Bix";
  player.inventory.push("cereal");
  remove(room.contents, item);
  document.getElementById('multiChoice').style.visibility = 'hidden';
}


function random() {
  switch (Math.floor(Math.random() * 6)) {
    case 0:
      sub = Math.floor(Math.random() * 10) + "%";
      return "▱▱▱▱▱▱▱▱▱▱ " + sub;
    case 1:
      sub = Math.floor(Math.random() * 10) + "%";
      return "▰▱▱▱▱▱▱▱▱▱ 1" + sub;
    case 2:
      sub = Math.floor(Math.random() * 10) + "%";
      return "▰▰▱▱▱▱▱▱▱▱ 2" + sub;
    case 3:
      sub = Math.floor(Math.random() * 10) + "%";
      return "▰▰▰▱▱▱▱▱▱▱ 3" + sub;
    case 4:
      sub = Math.floor(Math.random() * 10) + "%";
      return "▰▰▰▰▱▱▱▱▱▱ 4" + sub;
    case 5:
      sub = Math.floor(Math.random() * 10) + "%";
      return "▰▰▰▰▰▱▱▱▱▱ 5" + sub;
  }
}