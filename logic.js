var mouse;
var root = document.documentElement;

document.addEventListener('load', (e) => {
  root.style.setProperty('--base-hue', Math.floor(Math.random()*360))
})

document.addEventListener('mousemove', (e) => {
  mouse = {x: e.clientX, y: e.clientY}
  const newBaseHue = ((mouse.x+mouse.y)/100)%256
  root.style.setProperty('--base-hue', newBaseHue)
})