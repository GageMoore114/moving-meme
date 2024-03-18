// makes start button hitable and makes stop button nonhitable
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
  }

  // makes start button nonhitable and makes stop button hitable
  function stop() {
    // hit start btn and start function and then disabled btn.
    document.getElementById("startButton").disabled = false;
    // hit Stop btn and start function and then disabled btn.
    document.getElementById("stopButton").disabled = true;
  }

  // moving the Meme in random locations
  function moveImg() {
    const img = document.getElementById("meme-img");
    const startX = parseInt(img.style.left) || 700;
    const startY = parseInt(img.style.top) || 450;
    const nextX = startX + Math.floor(Math.random() * 300)-100;
    const nextY = startY + Math.floor(Math.random() * 300)-100;
    img.style.left = nextX + "px";
    img.style.top = nextY + "px";
  }

  //starting
  function startMoving() {
    // stop moving
    stop(); 
    // start moving
    start(); 
    // time takes to move 
    intervalId = setInterval(moveImg, 900); 
  }

  //stopping 
  function stopMoving() {
    start();
    stop();
    clearInterval(intervalId); 
  }