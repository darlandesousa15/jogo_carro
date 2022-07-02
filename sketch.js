


function preload(){
  
  ator = loadImage("imagens/ator-1.png");
  estrada = loadImage("imagens/estrada.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carro4 = loadImage("imagens/carro-2.png");
  carro5 = loadImage("imagens/carro-3.png");
  carro6 = loadImage("imagens/carro-1.png");
  carros = [carro1, carro2, carro3, carro4, carro5, carro6];


}

function setup() {
  createCanvas(500, 400);

}

function draw() {
  background(220);
  
  mostraEstrada(); 
  mostraCarro();
  carroAnda();
  mostraAtor();
  movimentaAtor();
  carroVolta();
  
  
}

