const bodyNode = document.body;
bodyNode.setAttribute("class","body");
const headerNode = document.createElement('header');
headerNode.setAttribute("class","header");
console.log(bodyNode);
const scriptSpot = document.getElementsByTagName('script');
bodyNode.prepend(headerNode);

//box for master list
const masterListDivNode = document.createElement('div');
headerNode.after(masterListDivNode);
masterListDivNode.classList.add('boxZone');

//Next number button
const nextNumContainer = document.createElement('div');
bodyNode.prepend(nextNumContainer);
nextNumContainer.setAttribute("class","randomButtonBox");
const nextNumberButton = document.createElement("button");
nextNumberButton.setAttribute("class","randoButton");
nextNumContainer.append(nextNumberButton);
nextNumberButton.innerText="Select Random Number";

//player board zone
const playerZone = document.createElement('div');
playerZone.setAttribute("class","playerZone");
masterListDivNode.after(playerZone);

//player count prompt
const playerNumberContainer = document.createElement('div');
playerNumberContainer.setAttribute("class","playerNumberContainer");
playerZone.append(playerNumberContainer);
const promptQuestion = document.createElement('p');
promptQuestion.innerText= "How many players?";
playerNumberContainer.append(promptQuestion);
const promptInput = document.createElement('input');
playerZone.setAttribute("type","input");
promptInput.setAttribute("placeholder","Enter # of players here...");
playerNumberContainer.append(promptInput);
const playButton = document.createElement('button');
playerZone.setAttribute("type","button");
playButton.setAttribute("class","playButton");
playerNumberContainer.append(playButton);
playButton.innerText="Play!";

//get a random value up to 76
const getRandom76 = function(){
    const randNum = Math.floor(Math.random()*77)
    return randNum;
}

//generate master list
const masterListLength = 76;
let startArr = []
for (i=0; i<masterListLength; i++){
    startArr[i] = i;
    console.log(startArr);  
    const box = document.createElement(`div`)
    masterListDivNode.append(box);
    box.classList.add('mBox');
}
let randomArr76 = [];
console.log(randomArr76);
const randomMasterList = function (){
    const boxList = document.getElementsByClassName("mBox");
    let randomIndex =null;
    
        for(let i=0;i<masterListLength; i++){
            randomIndex = Math.floor(Math.random()*(startArr.length))
            randomArr76[i]= startArr[randomIndex]+1;
            startArr.splice(randomIndex,1);
            
        }
        for(let i=0;i<masterListLength;i++){
            boxList[i].innerText = randomArr76[i];
        }
        
    }
    randomMasterList();
    console.log("randArr",randomArr76);








//generate a player board
const playerBoardSize = 25;
const newPlayer = function (n){    
    const playerNameInput = document.createElement('input');
    const playerBoard = document.createElement('div');
    playerZone.append(playerBoard);
    playerNameInput.setAttribute("class","nameInput");
    playerBoard.append(playerNameInput);
    playerBoard.classList.add('playerBoxZone');
    for (i=0; i<playerBoardSize; i++){        
        const box = document.createElement(`box`)
        playerBoard.append(box);
        box.classList.add('box');
        const cellNumber = i+1;
        box.innerText = getRandom76();
    }
}

//generate multiple boards
playButton.onclick = function(){
    const numberOfPlayers = promptInput.value;
    if(numberOfPlayers){
        playButton.classList.add("invisible");
        promptInput.classList.add("invisible");
        playerNumberContainer.classList.add("invisible");
        for(let i=0; i<numberOfPlayers; i++){
            newPlayer();
            const playerNameInput = document.getElementsByClassName("nameInput");
            playerNameInput[i].setAttribute("placeholder",`Player ${i+1}`);
        }
    }
}

nextNumberButton.onclick = function (){
    let targetValue =  getRandom76();
    const targetList = document.getElementsByClassName("box");
    const targetList2 = document.getElementsByClassName("mBox");
    
    console.log(targetList);
    for(let i=0; i<targetList.length; i++){
        if(targetList[i].innerText == targetValue){
            targetList[i].classList.add("boxSelected");
        }        
    }
    for(let i=0; i<targetList2.length; i++){
    if(targetList2 && targetList2[i].innerText == targetValue){
        console.log(`debug`,targetList2);
        targetList2[i].classList.add("boxSelected");
    }
}
    }
