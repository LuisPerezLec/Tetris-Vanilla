const gameFrame = document.getElementById('gameFrame');

function updateFrame (){
  gameFrame.innerHTML = '';
  for (let i = 0; i < 200; i ++){
    let id = `frame-${i}`
    let frame = document.createElement('div');
    frame.id = id;
    frame.style.background = "#555";
    gameFrame.appendChild(frame);
  }
}

window.setInterval(updateFrame, (1000/30));

function createShapes () {
  let random =  Math.floor(Math.random() * (6 - 1) + 1);
  console.log(random)
}