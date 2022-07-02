let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [97, 40, 149, 210, 262, 320];
let velocidadeCarros = [5, 7, 6, 3, 7, 4];
let possiçãoInicialCarros = [700, 700, 600, 600, 600, 600];
let posicaoFinalCarro = -100;

function mostraCarro(){ 
  for (let i = 0; i < carros.length; i++){
    image(carros[i], xCarros[i], yCarros[i], 60, 40);
  }
}

function carroAnda(){
  for (let i = 0; i < carros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function carroVolta(){
  for (let i = 0; i< carros.length; i++){
    if ( carros[i] < posicaoFinalCarro ){
      xCarros[i] == possiçãoInicialCarros[i];
    }  
  }
}

