const bodyNode = document.getElementsByTagName('body')[0];
const headerNode = document.createElement('header');
console.log(bodyNode);
bodyNode.prepend(headerNode);
const titleNode = document.createElement('h1');
titleNode.innerText = "Bingo Bash!"
headerNode.append(titleNode);
const masterListDivNode = document.createElement('div');
masterListDivNode.innerText = "box zone";
headerNode.after(masterListDivNode);
const masterListLength = 76;
for (i=0; i<masterListLength; i++){  
    const box = masterListDivNode.append(document.createElement(`box`));
    box.classList.add('box');
}

