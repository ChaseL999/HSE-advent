console.log('Winter Break is almost here!!!');

const icons = [
    '&#x1F6F7;',
    '&#x1F328;',
    '&#x1F43B;',
    '&#x1F332;',
    '&#x1F381;',
    '&#x1F936;',
    '&#x1F9E4;',
    '&#x1F9E3;',
    '&#x1F976;',
    '&#x1F31F;',
    '&#x26F8;',
    '&#x1F36A;',
    '&#x1F98C;',
    '&#x1F3C2;',
    '&#x26F7;',
    '&#x1F3BF;',
    '&#x1F3D2;',
    '&#x1F514;',
    '&#x1F6CF;',
    '&#x1F385;',
    '&#x1F3BF;',
    '&#x1F56F;',
    '&#x26c4;'
  ];

const boxes = document.querySelectorAll('.num');

function handelBoxClick(event){
const clickedBox = event.currentTarget;
const dayClicked = clickedBox.dataset.day;
const today = new Date();
if(today.getDate() >= Number(dayClicked)){
  clickedBox.innerHTML = icons[Number(dayClicked)];

}else{
  console.log('No peaking !!! It is not the right day yet!');
  }

}

boxes.forEach(function (box){
  box.addEventListener('click', handelBoxClick);
});

let daysOpened = JSON.parse(localStorage.getItem('daysClicked'));

function storeClickedBoxes(day){
  if(!localStorage.getItem('daysClicked')){
    daysOpened = [];
  }else{
    daysOpened = JSON.parse(localStorage.getItem('daysClicked'));
  }
if(!daysOpened.includes(day)){
  daysOpened.push(day);
}
localStorage.setItem('daysClicked', JSON.stringify(daysOpened));

}

function randomizeIcons(oldList){
  let reandomList = []
    if(!localStorage.getItem('icons')){
      while(oldlList.length >0){
        const index = Math.floor(Math.random()*oldlList.length);
        randomList.push(oldList[index]);
        oldList.splice(index, 1);
      }

  localStorage.setItem('icons', JSON.strinify(randomList));
}else{

  randomList = Json.parse(localStorage.getItem('icons'));
}
return randomList;

function showClickedBoxes(){
  boxes.forEach (function(box){
    const day = Number(box);
    if(daysOpened.includes(day)){
      box.innerHTML = icons[day];
    }
  });
  }if(daysOpened !== null){
    showClickedBoxes();
  }
}
function resetCalendar(){
  const answer = confirm('Are you sure you want me to reset the calender?')
  if(answer){
    localStorage.clear();
    document.location.reload();
  }
}
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset Calendar';
resetButton.addEventListener('click', resetCalendar);
const footer = document.querySelector('footer');
footer.insertAdjacentElement('afterbegin',resetButton);
footer.style.textAlign = 'center';
footer.style.paddingTop = '20px' ;
