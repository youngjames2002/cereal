const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
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
  showTextNode(nextTextNodeId)
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
        text: 'Rice Crispies',
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

startGame()