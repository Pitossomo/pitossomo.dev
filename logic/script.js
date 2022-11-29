var mouse;
var root = document.documentElement;
const BASE_HUE = Number(getComputedStyle(root).getPropertyValue('--base-hue'))

root.style.setProperty('--base-hue', BASE_HUE)

document.addEventListener('mousemove', (e) => {
  mouse = {x: e.clientX, y: e.clientY}
  const newBaseHue = BASE_HUE + (mouse.x+mouse.y)/90
  root.style.setProperty('--base-hue', newBaseHue)
})

let mouseDown = false;
let startX, scrollLeft;
const carousel = document.querySelector('.carousel');
const customers = document.querySelector('.customers')
carousel.addEventListener('mousedown', e => {
  mouseDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
}, false);

carousel.addEventListener('mousemove', e => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - carousel.offsetLeft;
  const scroll = x - startX;
  carousel.scrollLeft = scrollLeft - scroll;
  console.log(e.pageX)
});

carousel.addEventListener('mouseup', () => { mouseDown = false; }, false);
carousel.addEventListener('mouseleave', () => { mouseDown = false; }, false);