const flexStartEl = document.getElementById('flex-start-el');
const flexEndEl = document.getElementById('flex-end-el');
const stretchEl = document.getElementById('stretch-el');
const marginAutoEl = document.getElementById('margin-auto-el');
const marginResetEl = document.getElementById('margin-reset-el')
const currentStateEl = document.getElementById('current-state-el');
let grabContainer = document.querySelector('.container')
let childArray = document.querySelectorAll('.child');

function handleMargin(value) {
  console.log(Boolean(value))
  if(Boolean(value) !=true){
    currentStateEl.innerText =`Current State: Reset`  
  }
  else{
  currentStateEl.innerText =`Current State: ${value}`
  }
  childArray.forEach((el) => el.style.margin = value);
}

function handleSelfAlign(value){
currentStateEl.innerText =`Current State: ${value}`
childArray.forEach(el => el.style.alignSelf = value)
}


function handleFlexStart(){
 
    child.style.alignSelf = 'flex-start';
  
}


function handleFlexEnd(){
 
    child.style.alignSelf = 'flex-end';
  
}

function handleStretch(){
 
    child.style.alignSelf = 'stretch';
  
}


marginAutoEl.addEventListener('click', ()=>handleMargin('auto'));
marginResetEl.addEventListener('click', ()=>handleMargin(''));
flexStartEl.addEventListener('click', ()=>handleSelfAlign('flex-start'))
flexEndEl.addEventListener('click', ()=>handleSelfAlign('flex-end'))
stretchEl.addEventListener('click', ()=>handleSelfAlign('stretch'))
