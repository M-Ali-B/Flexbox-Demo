const flexStartEl = document.getElementById('flex-start-el');
const flexEndEl = document.getElementById('flex-end-el');
const stretchEl = document.getElementById('stretch-el');
const marginAutoEl = document.getElementById('margin-auto-el');

function handleMarginAuto() {
  const grabClass = document.querySelectorAll('.child');

  grabClass.forEach((el) => {
    el.style.margin = 'auto';
  });
  document.addEventListener('DOMContentLoaded', grabClass);
}

document.addEventListener('click', handleMarginAuto);
