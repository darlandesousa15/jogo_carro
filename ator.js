let ator;
let xAtor = 100;
let yAtor = 370;
let placar = "0";

function mostraAtor(){
  
  image(ator, xAtor, yAtor, 25, 25);
  
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill (color(80, 140, 0));
  rect (140, 08, 40, 20);
  fill (255);
  text(placar, 160, 24);
  
  if (yAtor<0){
    
    yAtor = 370;
    xAtor = 100;
    placar ++;
    
  }
  
}

function movimentaAtor(){
  
  if (keyIsDown(UP_ARROW)){
    
      yAtor -= 3;
}
  
  if (keyIsDown(DOWN_ARROW)){
      
      yAtor += 3;
  
}
}