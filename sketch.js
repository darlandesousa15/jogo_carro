let somDaTrilha;
let somColisao;
let somDoPonto;

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();

}

function draw() {
  background(220);
  
  mostraEstrada(); 
  mostraCarro();
  carroAnda();
  mostraAtor();
  movimentaAtor();
  carroVolta();
  verificaColisao();

  
  
}

