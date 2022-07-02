let ator;
let xAtor = 100;
let yAtor = 370;
let placar = "0";
let colisao = false;

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
    placar ++;
    somDoPonto.play();
    
  }
  
}

function movimentaAtor(){
  
  if (keyIsDown(UP_ARROW)){
    
      yAtor -= 3;
}
  
  if (keyIsDown(DOWN_ARROW)){
      if(podeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao (){
 for (let i = 0; i < carros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros [i], comprimentoCaro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      colidiu ();
      somColisao.play();
      if (placar > 0){
      placar -= 1;
     }
   }
 }
}

function colidiu (){
  yAtor = 370;  
}
function podeMover(){
  return yAtor < 366;
}