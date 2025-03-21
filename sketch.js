function setup() {
    createCanvas(800, 500);
  }
  
  let xJogador1 = 700;
  let xJogador2 = 700;
  
  function draw() {
    background("purple");
    fill("pink")
    textSize(100);
    text("🏎️", xJogador1, 100);
    text("🏍️", xJogador2, 300);
    rect(50, 0, 10, 500);
    xJogador1 += random(-20);
    xJogador2 += random(-17);
  
  }