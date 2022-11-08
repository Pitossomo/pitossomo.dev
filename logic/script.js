var mouse;
var root = document.documentElement;
const BASE_HUE = Number(getComputedStyle(root).getPropertyValue('--base-hue'))
root.style.setProperty('--base-hue', BASE_HUE)

document.addEventListener('mousemove', (e) => {
  mouse = {x: e.clientX, y: e.clientY}
  const newBaseHue = BASE_HUE + (mouse.x+mouse.y)/90
  root.style.setProperty('--base-hue', newBaseHue)
})