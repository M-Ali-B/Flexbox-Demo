const flexStartEl = document.getElementById('flex-start-el');
const flexEndEl = document.getElementById('flex-end-el');
const stretchEl = document.getElementById('stretch-el');
const marginAutoEl = document.getElementById('margin-auto-el');
const marginResetEl = document.getElementById('margin-reset-el')
let grabContainer = document.querySelector('.container')
let childArray = document.querySelectorAll('.child');

function handleMarginAuto() {

  childArray.forEach((el) => el.style.margin = 'auto');
}

function handleSelfAlign(value){
childArray.forEach(el => el.style.alignSelf = value)
}

function handleMarginReset(){
  childArray.forEach((el)=> el.style.margin = '')
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


marginAutoEl.addEventListener('click', ()=>handleMarginAuto());
marginResetEl.addEventListener('click', ()=>handleMarginReset());
flexStartEl.addEventListener('click', ()=>handleSelfAlign('flex-start'))
flexEndEl.addEventListener('click', ()=>handleSelfAlign('flex-end'))
stretchEl.addEventListener('click', ()=>handleSelfAlign('stretch'))
