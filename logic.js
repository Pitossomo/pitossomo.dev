var mouse;
var root = document.documentElement;
const INITIAL_HUE = window.getComputedStyle(root).getPropertyValue('--base-hue') // Math.floor(Math.random()*360)

document.addEventListener('load', (e) => {
  root.style.setProperty('--base-hue', INITIAL_HUE)
})

document.addEventListener('mousemove', (e) => {
  mouse = {x: e.clientX, y: e.clientY}
  const newBaseHue = INITIAL_HUE + ((mouse.x+mouse.y)/90)
  console.log(mouse, INITIAL_HUE, newBaseHue)
  root.style.setProperty('--base-hue', newBaseHue)
})